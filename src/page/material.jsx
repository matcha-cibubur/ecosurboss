import { useState, useEffect } from "react";
import { supabase } from "../data/supabase.js";
import ProductCard from "../components/Products.jsx";
import HeroSlides from "../components/HeroSlides.jsx";
import {
  Clock,
  HardHat,
  Search,
  ShieldCheck,
  Truck,
  Filter,
  X,
} from "lucide-react"; // Gunakan lucide-react untuk ikon
import { useSearchParams } from "react-router"; // Import untuk parameter URL

const features = [
  {
    icon: <ShieldCheck size={32} className="text-[#F98821]" />,
    title: "Quality Certified",
    desc: "All materials have passed national standard and structural integrity tests.",
  },
  {
    icon: <Truck size={32} className="text-[#F98821]" />,
    title: "Integrated Logistics",
    desc: "Fast and secure delivery directly to your project site, without any delays.",
  },
  {
    icon: <Clock size={32} className="text-[#F98821]" />,
    title: "Time Efficiency",
    desc: "Instant ordering and pricing to speed up the construction schedule.",
  },
  {
    icon: <HardHat size={32} className="text-[#F98821]" />,
    title: "Expert Support",
    desc: "Free consultation with our technical team to help you choose the right materials.",
  },
];

export default function MaterialPage() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [showFilter, setShowFilter] = useState(false);

  // Menggunakan searchParams untuk filter di URL
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCategory = searchParams.get("type") || "All";

  useEffect(() => {
    async function getProducts() {
      const { data, error } = await supabase.from("tbl_product").select("*");
      if (error) console.error(error);
      else setProducts(data);
    }
    getProducts();
  }, []);

  const categories = ["All", ...new Set(products.map((p) => p.type))];

  // Filter Logic: Search + Category
  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      currentCategory === "All" || p.type === currentCategory;
    return matchesSearch && matchesCategory;
  });

  const handleCategoryClick = (type) => {
    if (type === "All") {
      searchParams.delete("type");
    } else {
      searchParams.set("type", type);
    }
    setSearchParams(searchParams);
    setShowFilter(false); // Tutup dropdown setelah pilih
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <HeroSlides />

      <div className="w-full bg-white py-16 border-b border-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {features.map((f, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="mb-5 p-4 bg-orange-50 rounded-2xl">
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 tracking-tight">
                  {f.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed px-4">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
              Material Collections
            </h2>
            <p className="text-gray-500 mt-2">
              Temukan bahan konstruksi terbaik untuk proyek Anda.
            </p>
          </div>

          {/* Minimalist Search Bar */}
          <div className="flex items-center gap-3">
            {/* FILTER BUTTON */}
            <div className="relative">
              <button
                onClick={() => setShowFilter(!showFilter)}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl border transition-all ${
                  currentCategory !== "All"
                    ? "bg-[#F98821] border-[#F98821] text-white"
                    : "bg-white border-gray-200 text-gray-600 hover:border-gray-300"
                }`}>
                <Filter size={18} />
                <span className="text-sm font-bold">
                  {currentCategory === "All" ? "Filter" : currentCategory}
                </span>
              </button>

              {/* DROPDOWN FILTER */}
              {showFilter && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setShowFilter(false)}></div>
                  <div className="absolute right-0 mt-3 w-56 bg-white border border-gray-100 shadow-2xl rounded-2xl p-2 z-20 animate-in fade-in zoom-in duration-200">
                    <div className="px-4 py-2 text-[10px] font-black uppercase tracking-widest text-gray-400 border-b border-gray-50 mb-1">
                      Pilih Kategori
                    </div>
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => handleCategoryClick(cat)}
                        className={`w-full text-left px-4 py-3 rounded-xl text-sm transition-all ${
                          currentCategory === cat
                            ? "bg-orange-50 text-[#F98821] font-bold"
                            : "text-gray-600 hover:bg-gray-50"
                        }`}>
                        {cat}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
            {/* SEARCH BAR */}
            <div className="relative group">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#F98821] transition-colors"
                size={18}
              />
              <input
                type="text"
                placeholder="Cari material..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full md:w-64 pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:border-[#F98821] transition-all shadow-sm"
              />
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <div className="inline-flex p-6 bg-gray-100 rounded-full mb-4">
              <Search size={32} className="text-gray-400" />
            </div>
            <p className="text-gray-500 text-lg font-medium">
              Produk tidak ditemukan
            </p>
            <button
              onClick={() => setSearch("")}
              className="mt-2 text-[#F98821] font-bold hover:underline">
              Hapus pencarian
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
