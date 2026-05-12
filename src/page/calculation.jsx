import { useState, useEffect } from "react";
import {
  Calculator,
  ChevronRight,
  Info,
  RotateCcw,
  Loader2,
  ChevronDown,
  Check,
  Box,
  Layers,
} from "lucide-react";
import { supabase } from "../data/supabase";

export default function DynamicCalculationPage() {
  const [materials, setMaterials] = useState([]);
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const [inputs, setInputs] = useState({
    roomLength: "",
    roomWidth: "",
    wallHeight: "",
    brickCoefficient: "",
    openingArea: "0",
    reservePercentage: "",
  });

  const [results, setResults] = useState(null);

  // 1. Fetch Data dari Supabase
  useEffect(() => {
    async function fetchMaterials() {
      setLoading(true);
      const { data, error } = await supabase.from("tbl_calc").select("*");
      if (!error && data.length > 0) {
        setMaterials(data);
        setSelectedMaterial(data[0]); // Default ke material pertama
      }
      setLoading(false);
    }
    fetchMaterials();
  }, []);

  // 2. Reset/Update Input saat Material Berubah
  useEffect(() => {
    if (selectedMaterial) {
      setInputs((prev) => ({
        ...prev,
        brickCoefficient: selectedMaterial.avgRequirement[0].toString(),
        reservePercentage: selectedMaterial.avgReserve[0].toString(),
      }));
    }
  }, [selectedMaterial]);

  // 3. Logika Kalkulasi Dinamis
  useEffect(() => {
    if (!selectedMaterial) return;

    const {
      roomLength,
      roomWidth,
      wallHeight,
      brickCoefficient,
      openingArea,
      reservePercentage,
    } = inputs;

    const coeff = parseFloat(brickCoefficient);
    const reserve = parseFloat(reservePercentage);

    // LOGIKA PERBAIKAN: Validasi untuk Array Tunggal atau Rentang
    const checkValid = (inputValue, dbArray) => {
      if (!dbArray || dbArray.length === 0) return false;

      const dbValueMin = parseFloat(dbArray[0]);

      if (dbArray.length === 1) {
        // Jika data tunggal, input harus sama dengan data tersebut
        return Math.abs(inputValue - dbValueMin) < 0.0001;
      }

      const dbValueMax = parseFloat(dbArray[1]);
      // Jika rentang, input harus di antara min dan max
      return inputValue >= dbValueMin && inputValue <= dbValueMax;
    };

    const isCoeffValid = checkValid(coeff, selectedMaterial.avgRequirement);
    const isReserveValid = checkValid(reserve, selectedMaterial.avgReserve);

    if (
      roomLength &&
      roomWidth &&
      wallHeight &&
      isCoeffValid &&
      isReserveValid
    ) {
      const wallArea =
        2 *
        (parseFloat(roomLength) + parseFloat(roomWidth)) *
        parseFloat(wallHeight);

      const netArea = wallArea - parseFloat(openingArea);

      // Kalkulasi menggunakan coeff yang sedang aktif
      const bricksNeeded = Math.ceil(netArea * coeff);
      const reserveAmount = Math.ceil(bricksNeeded * (reserve / 100));
      const totalRequired = bricksNeeded + reserveAmount;

      setResults({
        wallArea: wallArea.toFixed(2),
        netArea: netArea.toFixed(2),
        bricksNeeded,
        reserve: reserveAmount,
        totalRequired,
      });
    } else {
      setResults(null);
    }
  }, [inputs, selectedMaterial]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validasi input dinamis untuk Coefficient dan Reserve
    if (name === "brickCoefficient" || name === "reservePercentage") {
      const field =
        name === "brickCoefficient" ? "avgRequirement" : "avgReserve";
      if (selectedMaterial[field].length === 2) {
        if (parseFloat(value) > selectedMaterial[field][1]) return;
      } else {
        return; // Jika hanya 1 data, input bersifat statis (tidak bisa diubah)
      }
    }

    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  if (loading) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center gap-4">
        <Loader2 className="animate-spin text-[#F98821]" size={48} />
        <p className="font-black uppercase tracking-widest text-gray-400 text-xs">
          Loading Materials...
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* --- HERO IMAGE SECTION --- */}
      <div className="relative w-full h-[40vh] md:h-[50vh] bg-gray-100">
        <img
          src={selectedMaterial?.imageBanner}
          alt="Material Banner"
          className="w-full h-full object-cover opacity-90 transition-opacity duration-700"
        />
        <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-transparent" />
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center w-full px-6">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter uppercase italic leading-tight">
            Standard Calculation
          </h1>
          <span className="text-sm font-black uppercase tracking-[0.4em] text-[#F98821] mb-2 block">
            {selectedMaterial?.name}
          </span>

          {/* Material Selection */}
          <div className="relative inline-block w-full max-w-60">
            {/* Trigger Button yang Lebih Tipis */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`
          w-full flex items-center justify-between px-4 py-2.5 
          bg-white/80 backdrop-blur-sm border rounded-xl transition-all duration-200
          ${isOpen ? "border-[#F98821] ring-4 ring-[#F98821]/10" : "border-gray-200 hover:border-gray-300 shadow-sm"}
        `}>
              <span className="text-xs font-extrabold text-gray-700 tracking-tight uppercase">
                {selectedMaterial?.name || "Select..."}
              </span>
              <ChevronDown
                size={14}
                className={`text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#F98821]" : ""}`}
              />
            </button>

            {/* Dropdown Menu yang Lebih Ramping */}
            {isOpen && (
              <div className="absolute left-0 right-0 top-full mt-1.5 z-100 bg-white border border-gray-100 rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.08)] overflow-hidden animate-in fade-in slide-in-from-top-1 duration-200">
                <div className="p-1 max-h-48 overflow-y-auto custom-scrollbar">
                  {materials.map((m) => (
                    <button
                      key={m.id}
                      onClick={() => {
                        setSelectedMaterial(m);
                        setIsOpen(false);
                      }}
                      className={`
                  w-full flex items-center justify-between px-3 py-2 rounded-lg text-[11px] font-bold transition-all
                  ${
                    selectedMaterial?.id === m.id
                      ? "bg-gray-50 text-[#F98821]"
                      : "text-gray-500 hover:bg-gray-50 hover:text-gray-800"
                  }
                `}>
                      <span className="uppercase tracking-wide">{m.name}</span>
                      {selectedMaterial?.id === m.id && (
                        <Check size={12} strokeWidth={3} />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-24">
        {/* --- TECHNICAL SPECS & ILLUSTRATION --- */}
        <div className="grid md:grid-cols-2 gap-12 py-12 border-b border-gray-100 items-center">
          <div className="space-y-12">
            <div>
              <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6 flex items-center gap-2">
                <div className="w-8 h-px bg-gray-200"></div> Material
                Specifications
              </h3>
              <div className="grid grid-cols-2 gap-y-4">
                <div className="text-sm whitespace-pre-line">
                  <span className="text-gray-400 block text-[10px] uppercase font-bold">
                    Size
                  </span>
                  {selectedMaterial?.size?.replaceAll("\\n", "\n")}
                </div>
                <div className="text-sm">
                  <span className="text-gray-400 block text-[10px] uppercase font-bold">
                    Avg. Requirement
                  </span>
                  {selectedMaterial?.avgRequirement.join(" - ")} pcs/m²
                </div>
                <div className="text-sm">
                  <span className="text-gray-400 block text-[10px] uppercase font-bold">
                    Avg. Reserve
                  </span>
                  {selectedMaterial?.avgReserve.join(" - ")}%
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6 flex items-center gap-2">
                <div className="w-8 h-px bg-gray-200"></div> Formula Reference
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-4">
                <div className="text-sm">
                  <span className="text-gray-400 block text-[10px] uppercase font-bold">
                    Wall Area
                  </span>
                  2 x (length + width) x height
                </div>
                <div className="text-sm">
                  <span className="text-gray-400 block text-[10px] uppercase font-bold">
                    Net Area
                  </span>
                  Wall Area - Opening Area
                </div>
                <div className="text-sm">
                  <span className="text-gray-400 block text-[10px] uppercase font-bold">
                    Brick Needed
                  </span>
                  Net Area x Brick Coefficient (Avg. Requirement)
                </div>
                <div className="text-sm">
                  <span className="text-gray-400 block text-[10px] uppercase font-bold">
                    Final Total Estimation
                  </span>
                  Brick Needed + Avg. reserve
                </div>
              </div>
            </div>
          </div>

          <div className="h-full min-h-75 rounded-3xl overflow-hidden shadow-2xl">
            <img src={selectedMaterial?.imageIllustration} alt="Illustration" />
          </div>
        </div>

        {/* --- INTERACTION AREA --- */}
        <div className="mt-16 grid md:grid-cols-2 gap-20">
          <div className="space-y-10">
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-3">
              <Calculator size={24} className="text-[#F98821]" /> Input
              Parameters
            </h2>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="group">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">
                    Length (m)
                  </label>
                  <input
                    name="roomLength"
                    value={inputs.roomLength}
                    onChange={handleChange}
                    type="number"
                    placeholder="0.0"
                    className="w-full bg-transparent border-b-2 border-gray-100 py-2 focus:border-[#F98821] outline-none text-lg font-medium"
                  />
                </div>
                <div className="group">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">
                    Width (m)
                  </label>
                  <input
                    name="roomWidth"
                    value={inputs.roomWidth}
                    onChange={handleChange}
                    type="number"
                    placeholder="0.0"
                    className="w-full bg-transparent border-b-2 border-gray-100 py-2 focus:border-[#F98821] outline-none text-lg font-medium"
                  />
                </div>
              </div>

              <div className="group">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">
                  Wall Height (m)
                </label>
                <input
                  name="wallHeight"
                  value={inputs.wallHeight}
                  onChange={handleChange}
                  type="number"
                  placeholder="0.0"
                  className="w-full bg-transparent border-b-2 border-gray-100 py-2 focus:border-[#F98821] outline-none text-lg font-medium"
                />
              </div>
              <div className="group">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 block group-focus-within:text-[#F98821] transition-colors">
                  Opening Area (m²)
                </label>
                <input
                  name="openingArea"
                  value={inputs.openingArea}
                  onChange={handleChange}
                  type="number"
                  placeholder="0.0"
                  className="w-full bg-transparent border-b-2 border-gray-100 py-2 focus:border-[#F98821] outline-none transition-all text-lg font-medium"
                />
              </div>

              {/* Dinamis Coefficient & Reserve Inputs */}
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div
                  className={`p-4 rounded-2xl ${selectedMaterial?.avgRequirement.length === 1 ? "bg-gray-100 opacity-60" : "bg-gray-50"}`}>
                  <label className="text-[9px] font-black uppercase tracking-widest mb-2 block italic text-[#F98821]">
                    Coefficient ({selectedMaterial?.avgRequirement.join("-")})
                  </label>
                  <input
                    name="brickCoefficient"
                    value={inputs.brickCoefficient}
                    onChange={handleChange}
                    readOnly={selectedMaterial?.avgRequirement.length === 1}
                    type="number"
                    className="w-full bg-transparent border-none p-0 focus:ring-0 text-xl font-black text-gray-800 outline-none"
                  />
                </div>
                <div
                  className={`p-4 rounded-2xl ${selectedMaterial?.avgReserve.length === 1 ? "bg-gray-100 opacity-60" : "bg-gray-50"}`}>
                  <label className="text-[9px] font-black uppercase tracking-widest mb-2 block italic text-[#F98821]">
                    Reserve % ({selectedMaterial?.avgReserve.join("-")})
                  </label>
                  <input
                    name="reservePercentage"
                    value={inputs.reservePercentage}
                    onChange={handleChange}
                    readOnly={selectedMaterial?.avgReserve.length === 1}
                    type="number"
                    className="w-full bg-transparent border-none p-0 focus:ring-0 text-xl font-black text-gray-800 outline-none"
                  />
                </div>
              </div>
            </div>

            <button
              onClick={() =>
                setInputs({
                  roomLength: "",
                  roomWidth: "",
                  wallHeight: "",
                  brickCoefficient:
                    selectedMaterial.avgRequirement[0].toString(),
                  openingArea: "0",
                  reservePercentage: selectedMaterial.avgReserve[0].toString(),
                })
              }
              className="flex items-center gap-2 text-[10px] font-bold text-gray-300 hover:text-red-500 transition-colors uppercase tracking-[0.2em] cursor-pointer">
              <RotateCcw size={14} /> Reset Calculation
            </button>
          </div>

          <div className="relative">
            {results ? (
              <div className="sticky top-12 space-y-8 animate-in fade-in slide-in-from-right-8 duration-700">
                <div className="space-y-1">
                  <span className="text-[10px] font-black text-[#F98821] uppercase tracking-[0.4em]">
                    Final Estimation Result
                  </span>
                  <div className="flex items-baseline gap-2">
                    <h2 className="text-8xl font-black text-gray-900 tracking-tighter leading-none">
                      {results.totalRequired.toLocaleString()}
                    </h2>
                    <span className="text-xl font-bold text-gray-400">pcs</span>
                  </div>
                </div>
                <div className="space-y-4 pt-8 border-t border-gray-50">
                  <div className="flex justify-between items-center group cursor-help">
                    <span className="text-xs text-gray-400 font-medium group-hover:text-gray-900 transition-colors flex items-center gap-2">
                      <ChevronRight size={14} className="text-[#F98821]" /> Wall
                      Area (Gross)
                    </span>
                    <span className="text-sm font-bold text-gray-800">
                      {results.wallArea} m²
                    </span>
                  </div>
                  <div className="flex justify-between items-center group cursor-help">
                    <span className="text-xs text-gray-400 font-medium group-hover:text-gray-900 transition-colors flex items-center gap-2">
                      <ChevronRight size={14} className="text-[#F98821]" /> Wall
                      Net Area
                    </span>
                    <span className="text-sm font-bold text-gray-800">
                      {results.netArea} m²
                    </span>
                  </div>
                  <div className="flex justify-between items-center group cursor-help">
                    <span className="text-xs text-gray-400 font-medium group-hover:text-gray-900 transition-colors flex items-center gap-2">
                      <ChevronRight size={14} className="text-[#F98821]" /> Raw
                      Requirement
                    </span>
                    <span className="text-sm font-bold text-gray-800">
                      {results.bricksNeeded} pcs
                    </span>
                  </div>
                  <div className="flex justify-between items-center group cursor-help text-[#F98821]">
                    <span className="text-xs font-bold flex items-center gap-2">
                      <ChevronRight size={14} /> Safety Reserve (
                      {inputs.reservePercentage}%)
                    </span>
                    <span className="text-sm font-black">
                      +{results.reserve} pcs
                    </span>
                  </div>
                </div>
                <div className="bg-gray-900 text-white p-6 rounded-3xl mt-12 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                      Standardized by
                    </p>
                    <p className="text-sm font-bold">CIVIXOR Technical Team</p>
                  </div>
                  <div className="w-12 h-12 bg-[#F98821] rounded-full flex items-center justify-center font-black italic">
                    CX
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center p-12 border-2 border-dashed border-gray-100 rounded-[40px]">
                <Info size={32} className="text-gray-200 mb-6" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Ready to Calculate
                </h3>
                <p className="text-sm text-gray-400 font-light">
                  Lengkapi parameter untuk melihat estimasi{" "}
                  {selectedMaterial?.name}.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
