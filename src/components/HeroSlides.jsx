import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";

const heroSlides = [
  {
    title: "Structural Steel",
    subtitle: "Modern Engineering",
    desc: "Implementing high-grade steel solutions for earthquake-resistant and sustainable skyscraper frameworks.",
    img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pos: "bg-center",
  },
  {
    title: "High-Strength Concrete",
    subtitle: "Foundational Integrity",
    desc: "Premium self-compacting concrete (SCC) designs ensuring maximum durability for infrastructure and bridge projects.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pos: "bg-center",
  },
  {
    title: "Sustainable Masonry",
    subtitle: "Aesthetic & Strength",
    desc: "Eco-friendly brickwork and thermal-insulated wall systems for energy-efficient architectural structures.",
    img: "https://images.unsplash.com/photo-1487491424367-7571f9afbb30?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pos: "bg-center",
  },
];

export default function HeroSlides() {
  return (
    <div className="w-full mx-auto group">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade" // Membuat transisi antar slide lebih halus
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        loop
        className="h-[80vh] md:h-[85vh] w-full">
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className={`relative w-full h-full flex items-center bg-cover ${slide.pos}`}
              style={{ backgroundImage: `url('${slide.img}')` }}>
              {/* Overlay: Gradien lebih gelap di sisi kiri untuk meningkatkan keterbacaan teks */}
              <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/40 to-transparent"></div>

              <div className="container mx-auto px-6 md:px-20 relative z-10">
                <div className="max-w-2xl">
                  {/* Subtitle: Kecil, Rapi, All Caps */}
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-[#F98821] font-bold text-[10px] md:text-xs uppercase tracking-[0.3em]">
                      {slide.subtitle}
                    </span>
                  </div>

                  {/* Main Title: Bold, Clean, Minimalist */}
                  <h2 className="text-5xl md:text-8xl font-extrabold text-white leading-[0.9] mb-6 tracking-tighter">
                    {slide.title.split(" ")[0]} <br />
                    <span className="bg-linear-to-r from-[#FDEB71] via-[#F98821] to-[#F98821] bg-clip-text text-transparent">
                      {slide.title.split(" ").slice(1).join(" ")}
                    </span>
                  </h2>

                  {/* Description: Rapi dengan border pembatas yang tipis */}
                  <div className="border-l border-white/30 pl-6 py-1 mb-10">
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed font-light max-w-md">
                      {slide.desc}
                    </p>
                  </div>

                  {/* CTA Buttons: Simetris & Minimalis */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-[#F98821] text-white px-10 py-4 rounded-sm font-bold text-[11px] uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500">
                      View Materials
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigasi Kustom (Opsional agar lebih minimalis) */}
        <div className="swiper-button-prev text-white/50! hover:text-white! after:text-2xl! hidden md:flex"></div>
        <div className="swiper-button-next text-white/50! hover:text-white! after:text-2xl! hidden md:flex"></div>
      </Swiper>

      {/* Kustomisasi CSS Pagination di Global CSS atau Style Tag */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          background: #f98821 !important;
          opacity: 1;
          width: 25px !important;
          border-radius: 5px !important;
        }
      `}</style>
    </div>
  );
}
