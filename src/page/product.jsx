import { useEffect, useState } from "react";
import Desc from "../components/Desc.jsx";
import FAQSection from "../components/Faq.jsx";
import { supabase } from "../data/supabase.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { formatRupiah } from "../data/currency.js";
import HeroSlides from "../components/HeroSlides.jsx";
import { Link } from "react-router";

export default function ProductPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const { data, error } = await supabase
        .from("tbl_product")
        .select("*")
        .limit(10);

      if (error) {
        console.error(error);
      } else {
        setProducts(data);
      }
    }
    getProducts();
  }, []);

  return (
    <div>
      <HeroSlides />
      <Desc
        header="CIVIXOR"
        opt="WELCOME"
        image="https://plus.unsplash.com/premium_photo-1681692092648-9243865930fa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://plus.unsplash.com/premium_photo-1681692092648-9243865930fa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        Civixor is a civil engineering platform that provides detailed product
        specifications for construction and infrastructure projects. It serves
        as a reliable reference for materials, components, and technical
        standards, helping ensure efficient and accurate execution. Designed for
        both professionals and individuals with little to no engineering
        experience, Civixor makes technical information more accessible. The
        platform also offers consulting services to support effective
        application with practical and sustainable solutions.
      </Desc>
      <div className="py-12 px-6 md:px-12 lg:px-20 bg-white">
        {/* Heading */}
        <div className="max-w-7xl mx-auto mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">Produk Rekomendasi</h2>
        </div>

        {/* Swiper */}
        <div className="max-w-7xl mx-auto">
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={24} // Sedikit lebih lebar untuk kesan lega
            slidesPerView={5}
            breakpoints={{
              0: { slidesPerView: 1.3, spaceBetween: 16 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
            }}
            className="pb-12" // Ruang untuk navigasi/pagination
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm my-4 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2">
                  {/* Image Container */}
                  <div className="relative aspect-4/3 overflow-hidden bg-gray-50">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Badge & Type Overlay */}
                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                      <span className="bg-white/90 backdrop-blur-md text-gray-800 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm">
                        {product.type}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-700 line-clamp-2 min-h-10 leading-relaxed group-hover:text-orange-600 transition-colors">
                      {product.name}
                    </h3>

                    <div className="mt-1 flex items-baseline gap-1">
                      <span className="text-md font-bold text-gray-700">
                        {formatRupiah(product.price)}
                      </span>
                      <span className="text-xs text-gray-400 font-medium">
                        /{product.unit}
                      </span>
                    </div>

                    {/* Minimalist CTA */}
                    <Link
                      to={`/detail/${product.id}`}
                      className="mt-5 w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-gray-950 text-white text-xs font-bold rounded-xl hover:bg-orange-500 transition-all duration-300 shadow-sm active:scale-95">
                      Lihat Detail
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <FAQSection />
    </div>
  );
}
