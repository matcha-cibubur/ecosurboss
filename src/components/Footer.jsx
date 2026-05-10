export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-14 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {/* BRAND */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">CIVIXOR</h2>
          <p className="text-sm leading-relaxed text-gray-400">
            We provide information on building materials with a variety of
            specifications to meet the needs of your construction project.
          </p>
        </div>

        {/* NAVIGATION */}
        <div>
          <h3 className="text-white font-semibold mb-4">Navigasi</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="/material" className="hover:text-white transition">
                Material
              </a>
            </li>
            <li>
              <a href="/calculation" className="hover:text-white transition">
                Calculation
              </a>
            </li>
            <li>
              <a href="/aboutus" className="hover:text-white transition">
                About us
              </a>
            </li>
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
      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} CIVIXOR. All rights reserved.
      </div>
    </footer>
  );
}
