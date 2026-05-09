import { HardHat, Building2, Wrench } from "lucide-react";

export default function AboutusPage() {
  return (
    <div>
      <div className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1400&auto=format&fit=crop')",
          }}
        />

        {/* Overlay Gelap */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Content */}
        <div className="relative z-10 flex items-end h-full px-6 md:px-12 lg:px-20 pb-16">
          <div className="w-full md:w-1/2">
            {/* Badge */}
            <div className="inline-block bg-white/80 text-gray-800 px-6 py-2 rounded-full text-sm md:text-base font-medium mb-6">
              ABOUT US
            </div>

            {/* Decorative Lines */}
            <p className="text-white/80 text-sm md:text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
      <div className="py-16 bg-gray-100 px-6 md:px-12 lg:px-20">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>

        {/* Cards */}
        <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <div className="mb-4">
              <HardHat className="w-10 h-10 text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Construction Planning
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <div className="mb-4">
              <Building2 className="w-10 h-10 text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Structural Design</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <div className="mb-4">
              <Wrench className="w-10 h-10 text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Material Consulting</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute
              irure dolor in reprehenderit in voluptate velit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
