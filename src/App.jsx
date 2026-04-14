import { Route, Routes } from "react-router";
import ProductPage from "./page/product.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto container-max">
        <header className="sticky top-0 z-50 bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between h-16">
              <div className="text-2xl font-bold text-gray-800">CIVIX</div>

              <nav className="hidden md:flex space-x-8">
                <a
                  href="#"
                  className="text-gray-600 hover:text-orange-500 transition">
                  Beranda
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-orange-500 transition">
                  Produk
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-orange-500 transition">
                  Kategori
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-orange-500 transition">
                  Tentang Kami
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-orange-500 transition">
                  Kontak
                </a>
              </nav>

              <div className="flex items-center space-x-4">
              </div>
            </div>
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<ProductPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}