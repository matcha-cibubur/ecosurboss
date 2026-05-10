import { HardHat, Building2, Wrench, Target, Eye, Award } from "lucide-react";

export default function AboutusPage() {
  return (
    <div className="bg-white">
      {/* --- HERO SECTION --- */}
      <div className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-[2s]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1400&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent" />

        <div className="relative z-10 flex items-center h-full px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#F98821] text-white px-4 py-1.5 rounded-full text-xs md:text-sm font-bold tracking-[0.2em] mb-6">
              <Building2 size={16} /> ESTABLISHED 2026
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tighter">
              Building the Future <br />
              <span className="text-[#F98821]">With Precision.</span>
            </h1>

            <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-xl font-light">
              CIVIXOR is a trusted partner in providing information on
              innovative construction materials and technical consulting. We
              address our clients’ material needs for infrastructure development
              and provide technical support.
            </p>
          </div>
        </div>
      </div>

      {/* --- STATS SECTION (Pemeramai Halaman) --- */}
      <div className="relative z-20 -mt-20 max-w-7xl mx-auto px-6">
        {/* Menggunakan flex dan justify-center untuk memastikan card di tengah */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {[
            { label: "Material Variants", value: "120+" },
            { label: "Quality Assurance", value: "100%" },
          ].map((stat, i) => (
            <div
              key={i}
              // Menambahkan w-full sm:w-64 agar lebar card konsisten dan rapi
              className="bg-white w-full sm:w-72 p-8 rounded-3xl shadow-xl shadow-black/5 border border-gray-50 flex flex-col items-center text-center">
              <span className="text-3xl md:text-4xl font-black text-gray-900 mb-1">
                {stat.value}
              </span>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* --- VISION & MISSION SECTION --- */}
      <div className="py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-xs font-black text-[#F98821] uppercase tracking-[0.3em] mb-4">
            Our Commitment
          </h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-8 tracking-tight">
            Unwavering Commitment to Quality Construction.
          </h3>
          <div className="space-y-8">
            <div className="flex gap-5">
              <div className="shrink-0 w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-[#F98821]">
                <Target size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg">Our Mission</h4>
                <p className="text-gray-500 leading-relaxed">
                  Providing information and technical consultation on
                  eco-friendly building materials that offer the best value for
                  money to developers and contractors.
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="shrink-0 w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-[#1B5E9E]">
                <Eye size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg">Our Vision</h4>
                <p className="text-gray-500 leading-relaxed">
                  To become the leading digital ecosystem for construction
                  materials that integrates information, procurement consulting,
                  and instant project cost estimates.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1563391017873-6e6beab67fed?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="rounded-3xl mt-12"
            alt="Build"
          />
          <img
            src="https://images.unsplash.com/photo-1652303518379-c0ef1c9fb2b1?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="rounded-3xl"
            alt="Engineer"
          />
        </div>
      </div>

      {/* --- SERVICES / CORE VALUES --- */}
      <div className="py-24 bg-gray-50 px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tighter uppercase italic">
            Why CIVIXOR?
          </h2>
          <div className="h-1 w-20 bg-[#F98821] mx-auto mb-6"></div>
          <p className="text-gray-500 text-lg">
            We don’t just provide product information; we offer technical
            solutions for every structural challenge your building faces.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-3">
          {[
            {
              icon: <HardHat className="w-10 h-10" />,
              title: "Professional Advice",
              desc: "Free initial technical consultation on selecting the right materials for specific structural loads.",
            },
            {
              icon: <Award className="w-10 h-10" />,
              title: "Certified Materials",
              desc: "All product information has been verified and quality-screened to meet project requirements and ensure long-term reliability.",
            },
            {
              icon: <Wrench className="w-10 h-10" />,
              title: "End-to-End Support",
              desc: "From budget calculations to in-depth technical consultations during on-site project construction.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-4xl p-10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100 group">
              <div className="mb-6 text-[#F98821] group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
                {card.title}
              </h3>
              <p className="text-gray-500 leading-relaxed font-light">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
