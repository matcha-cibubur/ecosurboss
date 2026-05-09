import { formatRupiah } from "../data/currency";
import {
  Minus,
  Plus,
  ShoppingCart,
  ArrowLeft,
  ShieldCheck,
  Truck,
  Globe,
} from "lucide-react";
import { Link, useParams } from "react-router";
import { supabase } from "../data/supabase";
import { useEffect, useState } from "react";

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null); // Mulai dengan null
  const [loading, setLoading] = useState(true); // Tambahkan state loading

  useEffect(() => {
    async function getProduct() {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from("tbl_product")
          .select("*")
          .eq("id", id)
          .maybeSingle();

        if (error) throw error;
        setProduct(data);
      } catch (err) {
        console.error("Error:", err.message);
      } finally {
        setLoading(false);
      }
    }
    if (id) getProduct();
  }, [id]);

  // 1. Handle saat sedang loading
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-[#F98821]"></div>
      </div>
    );
  }

  // 2. Handle jika data memang tidak ditemukan (ID salah/data dihapus)
  if (!product) {
    return (
      <div className="flex h-screen flex-col items-center justify-center gap-4">
        <h2 className="text-xl font-bold text-gray-800">Product Not Found</h2>
        <Link to="/material" className="text-[#F98821] hover:underline">
          Return to Materials
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Navigation Header Kecil */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <Link
          to="/material"
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-black transition">
          <ArrowLeft size={16} /> Back to Materials
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-16">
        {/* LEFT: IMAGE */}
        <div className="relative">
          <div className="aspect-square overflow-hidden rounded-2xl bg-gray-50 border border-gray-100">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT: INFO */}
        <div className="flex flex-col justify-center items-start">
          <span className="text-[#F98821] font-bold text-sm uppercase tracking-[0.2em] mb-2">
            {product.type}
          </span>

          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tighter leading-tight">
            {product.name}
          </h1>

          <div className="flex items-baseline gap-2 mb-8">
            <span className="text-3xl font-black text-gray-900">
              {formatRupiah(product.price)}
            </span>
            <span className="text-gray-400 font-medium italic">
              / {product.unit}
            </span>
          </div>

          <div className="border-l-2 border-gray-100 pl-6 mb-10">
            <p className="text-gray-600 leading-relaxed font-light">
              {product.description}
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm border border-gray-100">
            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
              Dimensions
            </p>
            <p className="text-sm font-bold text-gray-800">{product.size}</p>
          </div>

          {/* Quick Specs / Trust */}
          <div className="w-full max-w-md flex justify-between gap-4 py-6 border-t border-gray-50">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-50 rounded-lg text-[#F98821]">
                <ShieldCheck size={20} />
              </div>
              <span className="text-xs font-bold text-gray-600 uppercase tracking-tight">
                Certified Quality
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-50 rounded-lg text-[#1B5E9E]">
                <Truck size={20} />
              </div>
              <span className="text-xs font-bold text-gray-600 uppercase tracking-tight">
                Express Logistic
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
