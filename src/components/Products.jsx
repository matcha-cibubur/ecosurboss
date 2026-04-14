import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function ProductCard({ product }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    gsap.fromTo(
      el,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
    );
  }, []);

  return (
    <div
      ref={cardRef}
      className="group bg-white rounded-md border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      {/* IMAGE */}
      <div className="overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* CONTENT */}
      <div className="p-5">
        {/* TITLE + BADGE */}
        <div className="flex justify-between items-start gap-2">
          <h3 className="text-lg font-semibold text-gray-800 leading-snug line-clamp-2">
            {product.name}
          </h3>

          <span
            className={`text-xs px-2 py-1 rounded-full font-semibold whitespace-nowrap
              ${
                product.quality === "A+"
                  ? "bg-green-100 text-green-700"
                  : product.quality === "A"
                  ? "bg-green-50 text-green-600"
                  : "bg-yellow-100 text-yellow-700"
              }`}
          >
            {product.quality}
          </span>
        </div>

        {/* SHORT DESC */}
        <p className="mt-2 text-sm text-gray-500 line-clamp-2">
          {product.specs.jenis ??
            product.specs.bahan ??
            product.specs.komposisi}
        </p>

        {/* SPECS */}
        <div className="mt-3 flex flex-wrap gap-2">
          {product.specs
            .map((k) => (
              <span
                key={k}
                className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md"
              >
                {k}
              </span>
            ))}
        </div>

        {/* PRICE */}
        <div className="mt-5 flex items-end justify-between">
          <div>
            <div className="text-xs text-gray-400">Mulai dari</div>
            <div className="text-xl font-bold text-gray-900">
              Rp{product.price.toLocaleString()}
              <span className="text-sm text-gray-500 font-medium">
                {" "}
                /{product.unit}
              </span>
            </div>
          </div>

          {/* CTA */}
          <button className="text-sm font-medium text-orange-500 hover:text-orange-600 transition">
            Detail →
          </button>
        </div>
      </div>
    </div>
  );
}