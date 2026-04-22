import ProductCard from "../components/Products.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import FAQSection from "../components/Faq.jsx";
import Footer from "../components/Footer.jsx";
import { useState, useEffect } from "react";
import { supabase } from "../data/supabase.js";

export default function ProductPage() {
  const [products, setProducts] = useState([]);
const [search, setSearch] = useState("");
  async function getProducts() {
  const { data, error } = await supabase
    .from('tbl_product')
    .select('*')

  console.log(data)

  if (error) {
    console.error(error)
  } else {
    setProducts(data)
  }
}

  useEffect(() => {
    getProducts()
  }, []);
const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <div>
      <div>
        <div className="w-full mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 8000 }}
            loop
            className="shadow-lg">
            {/* Slide 1 */}
            <SwiperSlide>
              <div 
                className="relative w-full min-h-[80vh] max-h-[90vh] flex items-center justify-center bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://plus.unsplash.com/premium_photo-1663054763397-4933ffbed379?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                  backgroundPosition: "bottom"
                }}
              >
                {/* Content */}
                <div className="relative z-10 bg-black/60 rounded-xl text-white text-center md:text-left max-w-6xl p-6 md:px-12">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                    Material
                  </h2>

                  <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 max-w-xl">
                    Baja
                  </p>
                  <button className="bg-orange-500 px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition text-sm sm:text-base">
                    Lihat Informasi
                  </button>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <div 
                className="relative w-full min-h-[80vh] max-h-[90vh] flex items-center justify-center bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://plus.unsplash.com/premium_photo-1661962468079-5d6791f9c627?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29uY3JldGUlMjBmb3IlMjBjb25zdHJ1Y3Rpb258ZW58MHx8MHx8fDA%3D')",
                  backgroundPosition: "center"
                }}
              >
                {/* Content */}
                <div className="relative z-10 bg-black/60 rounded-xl text-white text-center md:text-left max-w-6xl p-6 md:px-12">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                    Material
                  </h2>

                  <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 max-w-xl">
                    Concrete
                  </p>
                  <button className="bg-orange-500 px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition text-sm sm:text-base">
                    Lihat Informasi
                  </button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="bg-gray-100 py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              CIVIXOR
            </h1>

            <h2 className="text-xl font-semibold mb-3">
              WELCOME
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Civixor is a civil engineering platform that provides detailed product specifications for construction and infrastructure projects. It serves as a reliable reference for materials, components, and technical standards, helping ensure efficient and accurate execution.
Designed for both professionals and individuals with little to no engineering experience, Civixor makes technical information more accessible. The platform also offers consulting services to support effective application with practical and sustainable solutions.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img
                src="https://plus.unsplash.com/premium_photo-1681692092648-9243865930fa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="NASA"
                className="rounded-md w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="max-w-7xl mx-auto p-4">
          <div className="mb-6 flex flex-col justify-between items-center gap-4">
            <h2 className="text-xl md:text-2xl font-semibold">List of Materials</h2>

            <input
              type="text"
              placeholder="Cari produk..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-48 md:w-72 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
             {filteredProducts.length > 0 ? (
              filteredProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500 text-2xl my-8">
                Produk tidak ditemukan
              </p>
            )}
          </div>
        </div>
      </div>
      <FAQSection />
      <Footer />
    </div>
  );
}