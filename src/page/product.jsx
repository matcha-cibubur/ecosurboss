import ProductCard from "../components/Products.jsx";
import products from "../data/data.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProductPage() {
  return (
    <div>
      <div>
        <div className="w-full mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop
            className="shadow-lg">
            {/* Slide 2 */}
            <SwiperSlide>
              <div className="bg-gray-800 text-white p-10 flex flex-col md:flex-row items-center justify-between">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Besi & Baja
                  </h2>
                  <p className="mb-6">
                    Material kuat dan berkualitas untuk konstruksi terbaik.
                  </p>
                  <button className="bg-orange-500 px-6 py-2 rounded-lg font-semibold hover:bg-orange-600 transition">
                    Lihat Rekomendasi
                  </button>
                </div>
                {/* <img src="" alt="Besi" className="mt-6 md:mt-0 rounded-lg" /> */}
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <div className="bg-blue-600 text-white p-10 flex flex-col md:flex-row items-center justify-between">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Cat Tembok Premium
                  </h2>
                  <p className="mb-6">
                    Warna tahan lama & kualitas terbaik untuk rumah.
                  </p>
                  <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
                    Cek Sekarang
                  </button>
                </div>
                {/* <img src="" alt="Cat" className="mt-6 md:mt-0 rounded-lg" /> */}
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}