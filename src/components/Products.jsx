import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";

export default function ProductCard({ product }) {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
    );
  }, []);

  return (
    <div
      ref={cardRef}
      className="group bg-white rounded-3xl overflow-hidden hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 border border-gray-50">
      {/* Image Container */}
      <div className="relative aspect-4/3 overflow-hidden bg-gray-100">
        <img
          src={product.image || product.images}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />
        {/* Floating Type Tag */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-gray-600 rounded-full shadow-sm">
            {product.type}
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-lg font-bold text-gray-900 leading-tight group-hover:text-[#F98821] transition-colors line-clamp-1">
            {product.name}
          </h3>
          <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">
            {product.unit} base
          </p>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-50">
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tight">
              Mulai dari
            </p>
            <p className="text-lg font-black text-gray-900">
              Rp{product.price?.toLocaleString()}
              <span className="text-[11px] text-gray-400 font-medium ml-1">
                /{product.unit}
              </span>
            </p>
          </div>

          {/* Circular CTA Button */}
          <Link
            to={`/detail/${product.id}`}
            className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center group-hover:bg-[#F98821] group-hover:rotate-45 transition-all duration-300 shadow-lg shadow-black/5">
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
