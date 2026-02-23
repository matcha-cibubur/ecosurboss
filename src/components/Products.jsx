import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

export default function ProductCard({ product }) {
  const cardRef = useRef(null)

  useEffect(() => {
    const el = cardRef.current
    gsap.fromTo(
      el,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out', stagger: 0.08 }
    )
  }, [])

  return (
    <div ref={cardRef} className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <img src={product.image} alt={product.name} className="w-full h-44 object-cover" />
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <span className={`px-2 py-1 rounded-lg text-sm font-medium ${product.quality === 'A+' ? 'bg-green-200' : product.quality === 'A' ? 'bg-green-100' : 'bg-yellow-100'}`}>
            Kualitas {product.quality}
          </span>
        </div>

        <p className="mt-2 text-sm text-slate-600">{product.specs.jenis ?? product.specs.bahan ?? product.specs.komposisi}</p>

        <ul className="mt-3 text-sm space-y-1 text-slate-700">
          {Object.entries(product.specs).map(([k, v]) => (
            <li key={k}><strong className="capitalize">{k}:</strong> {v}</li>
          ))}
        </ul>

        <div className="mt-4 flex items-center justify-between">
          <div>
            <div className="text-sm text-slate-500">Harga</div>
            <div className="text-xl font-bold">Rp{product.price.toLocaleString()} <span className="text-sm font-medium text-slate-500">/{product.unit}</span></div>
          </div>
          <button className="bg-sky-600 text-white px-4 py-2 rounded-lg shadow hover:bg-sky-700">Beli</button>
        </div>
      </div>
    </div>
  )
}