import { useState, useEffect } from "react";
import { Calculator, ChevronRight, Info, RotateCcw } from "lucide-react";

export default function CalculationPage() {
  const [inputs, setInputs] = useState({
    roomLength: "",
    roomWidth: "",
    wallHeight: "",
    brickCoefficient: "",
    openingArea: "0",
    reservePercentage: "",
  });

  const [results, setResults] = useState(null);

  useEffect(() => {
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

    if (
      roomLength &&
      roomWidth &&
      wallHeight &&
      coeff >= 70 &&
      coeff <= 80 &&
      reserve >= 5 &&
      reserve <= 10
    ) {
      // 1. Hitung Wall Area (Luas Kotor)
      const wallArea =
        2 *
        (parseFloat(roomLength) + parseFloat(roomWidth)) *
        parseFloat(wallHeight);

      // 2. Hitung Net Area (Luas Bersih)
      const netArea = wallArea - parseFloat(openingArea);

      // 3. Hitung Kebutuhan Bata
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
  }, [inputs]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "brickCoefficient" && parseFloat(value) > 80) return;
    if (name === "reservePercentage" && parseFloat(value) > 10) return;

    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white min-h-screen">
      {/* --- HERO IMAGE SECTION --- */}
      <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden bg-gray-100">
        <img
          src="https://images.unsplash.com/photo-1495578942200-c5f5d2137def?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Material Detail"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-transparent" />
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center w-full px-6">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter uppercase italic">
            Standard Calculation
          </h1>
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#F98821] mb-2 block">
            Red Standard Brick
          </span>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-6 pb-24">
        {/* --- TECHNICAL SPECS & FORMULA --- */}
        <div className="grid md:grid-cols-2 gap-12 py-12 border-b border-gray-100">
          <div>
            <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6 flex items-center gap-2">
              <div className="w-8 h-px bg-gray-200"></div> Material
              Specifications
            </h3>
            <div className="grid grid-cols-2 gap-y-4">
              <div className="text-sm">
                <span className="text-gray-400 block text-[10px] uppercase font-bold">
                  Size
                </span>{" "}
                20 x 10 x 5 cm
              </div>
              <div className="text-sm">
                <span className="text-gray-400 block text-[10px] uppercase font-bold">
                  Avg. Requirement
                </span>{" "}
                70 - 80 pcs/m²
              </div>
              <div className="text-sm">
                <span className="text-gray-400 block text-[10px] uppercase font-bold">
                  Avg. Reserve
                </span>{" "}
                5 - 10%
              </div>
            </div>
            <h3 className="text-xs font-bold text-gray-500 mt-4 me-2 gap-2">
              <span className="text-gray-700">Note : </span> Quantity may vary
              depending on mortar thickness, installation quality, and
              door/window openings
            </h3>
          </div>
          <div>
            <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6 flex items-center gap-2">
              <div className="w-8 h-px bg-gray-200"></div> FORMULA REFERENCE
            </h3>
            <div className="grid grid-cols-2 gap-y-4">
              <div className="text-sm">
                <span className="text-gray-400 block text-[10px] uppercase font-bold">
                  Wall Area
                </span>{" "}
                2 x (length + width) x height
              </div>
              <div className="text-sm">
                <span className="text-gray-400 block text-[10px] uppercase font-bold">
                  Net Area
                </span>{" "}
                Wall Area - Opening Area
              </div>
              <div className="text-sm">
                <span className="text-gray-400 block text-[10px] uppercase font-bold">
                  Bricks Needed
                </span>{" "}
                Net Area x Brick Coefficient (Avg. Requirement)
              </div>
              <div className="text-sm">
                <span className="text-gray-400 block text-[10px] uppercase font-bold">
                  Final Total Estimation
                </span>{" "}
                Brick Needed + Avg. reserve
              </div>
            </div>
          </div>
        </div>

        {/* --- MAIN INTERACTION AREA --- */}
        <div className="mt-16 grid md:grid-cols-2 gap-20">
          <div className="space-y-10">
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-3">
              <Calculator size={24} className="text-[#F98821]" /> Input
              Parameters
            </h2>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="group">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 block group-focus-within:text-[#F98821] transition-colors">
                    Length (m)
                  </label>
                  <input
                    name="roomLength"
                    value={inputs.roomLength}
                    onChange={handleChange}
                    type="number"
                    placeholder="0.0"
                    className="w-full bg-transparent border-b-2 border-gray-100 py-2 focus:border-[#F98821] outline-none transition-all text-lg font-medium"
                  />
                </div>
                <div className="group">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 block group-focus-within:text-[#F98821] transition-colors">
                    Width (m)
                  </label>
                  <input
                    name="roomWidth"
                    value={inputs.roomWidth}
                    onChange={handleChange}
                    type="number"
                    placeholder="0.0"
                    className="w-full bg-transparent border-b-2 border-gray-100 py-2 focus:border-[#F98821] outline-none transition-all text-lg font-medium"
                  />
                </div>
              </div>

              <div className="group">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 block group-focus-within:text-[#F98821] transition-colors">
                  Wall Height (m)
                </label>
                <input
                  name="wallHeight"
                  value={inputs.wallHeight}
                  onChange={handleChange}
                  type="number"
                  placeholder="0.0"
                  className="w-full bg-transparent border-b-2 border-gray-100 py-2 focus:border-[#F98821] outline-none transition-all text-lg font-medium"
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

              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="p-4 bg-gray-50 rounded-2xl">
                  <label
                    className={`text-[9px] font-black uppercase tracking-widest mb-2 block italic transition-colors ${inputs.brickCoefficient && (inputs.brickCoefficient < 70 || inputs.brickCoefficient > 80) ? "text-red-500" : "text-[#F98821]"}`}>
                    Coeff (70-80)
                  </label>
                  <input
                    name="brickCoefficient"
                    value={inputs.brickCoefficient}
                    onChange={handleChange}
                    type="number"
                    className="w-full bg-transparent border-none p-0 focus:ring-0 text-xl font-black text-gray-800"
                  />
                </div>
                <div className="p-4 bg-gray-50 rounded-2xl">
                  <label
                    className={`text-[9px] font-black uppercase tracking-widest mb-2 block italic transition-colors ${inputs.reservePercentage && (inputs.reservePercentage < 5 || inputs.reservePercentage > 10) ? "text-red-500" : "text-[#F98821]"}`}>
                    Reserve % (5-10)
                  </label>
                  <input
                    name="reservePercentage"
                    value={inputs.reservePercentage}
                    onChange={handleChange}
                    type="number"
                    className="w-full bg-transparent border-none p-0 focus:ring-0 text-xl font-black text-gray-800"
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
                  brickCoefficient: "",
                  openingArea: "0",
                  reservePercentage: "",
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
                  {/* PENAMBAHAN WALL AREA DISINI */}
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
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                  <Info size={32} className="text-gray-200" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Ready to Calculate
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed font-light">
                  {(inputs.brickCoefficient &&
                    (inputs.brickCoefficient < 70 ||
                      inputs.brickCoefficient > 80)) ||
                  (inputs.reservePercentage &&
                    (inputs.reservePercentage < 5 ||
                      inputs.reservePercentage > 10))
                    ? "Input di luar spesifikasi material (Coeff: 70-80, Reserve: 5-10%)."
                    : "Masukkan dimensi ruangan Anda untuk mendapatkan hasil estimasi kebutuhan material secara presisi."}
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
