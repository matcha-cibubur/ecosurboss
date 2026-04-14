export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-14 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        
        {/* BRAND */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">
            TokoBangunan
          </h2>
          <p className="text-sm leading-relaxed text-gray-400">
            Menyediakan berbagai kebutuhan material bangunan berkualitas
            tinggi untuk proyek konstruksi Anda.
          </p>
        </div>

        {/* NAVIGATION */}
        <div>
          <h3 className="text-white font-semibold mb-4">Navigasi</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Beranda</a></li>
            <li><a href="#" className="hover:text-white transition">Produk</a></li>
            <li><a href="#" className="hover:text-white transition">Tentang Kami</a></li>
            <li><a href="#" className="hover:text-white transition">Kontak</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-white font-semibold mb-4">Kontak</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Email: civixor@gmail.com</li>
            <li>Telepon: +62 812-1234-5678</li>
            <li>Alamat: Cikarang, Indonesia</li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Berlangganan
          </h3>
          <p className="text-sm text-gray-400 mb-4">
            Dapatkan info promo dan produk terbaru.
          </p>

          <div className="flex items-center bg-gray-800 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Email Anda"
              className="w-full px-3 py-2 bg-transparent text-sm focus:outline-none"
            />
            <button className="bg-orange-500 px-4 py-2 text-sm font-medium hover:bg-orange-600 transition">
              Kirim
            </button>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} TokoBangunan. All rights reserved.
      </div>
    </footer>
  );
}