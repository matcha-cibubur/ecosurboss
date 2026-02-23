import ProductCard from "../components/Products";
import products from "../data/data";

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-10">
      <div className="mx-auto container-max px-4">
        <header className="mb-8">
          <h1 className="text-3xl font-extrabold">Toko Bangunan Simple</h1>
          <p className="text-slate-600 mt-2">Material bangunan berkualitas, lengkap dengan spesifikasi dan harga.</p>
        </header>

        <main>
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </section>
        </main>

        <footer className="mt-10 text-sm text-slate-500">&copy; {new Date().getFullYear()} Toko Bangunan — Demo</footer>
      </div>
    </div>
  )
}