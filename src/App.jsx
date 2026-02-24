import { Route, Routes } from "react-router";
import ProductPage from "./page/product.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto container-max">
        <header class="sticky top-0 z-50 bg-white shadow-md">
          <div class="max-w-7xl mx-auto px-6">
            <div class="flex items-center justify-between h-16">
              <div class="text-2xl font-bold text-gray-800">CIVIX</div>

              <nav class="hidden md:flex space-x-8">
                <a
                  href="#"
                  class="text-gray-600 hover:text-orange-500 transition">
                  Beranda
                </a>
                <a
                  href="#"
                  class="text-gray-600 hover:text-orange-500 transition">
                  Produk
                </a>
                <a
                  href="#"
                  class="text-gray-600 hover:text-orange-500 transition">
                  Kategori
                </a>
                <a
                  href="#"
                  class="text-gray-600 hover:text-orange-500 transition">
                  Tentang Kami
                </a>
                <a
                  href="#"
                  class="text-gray-600 hover:text-orange-500 transition">
                  Kontak
                </a>
              </nav>

              <div class="flex items-center space-x-4">
                <button class="px-4 py-2 text-gray-700 hover:text-orange-500 transition">
                  Masuk
                </button>
                <button class="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition shadow">
                  Daftar
                </button>
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