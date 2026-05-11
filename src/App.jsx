import { Link, Route, Routes } from "react-router";
import ProductPage from "./page/product.jsx";
import { ChevronDown, Globe } from "lucide-react";
import { useState } from "react";
import MaterialPage from "./page/material.jsx";
import Footer from "./components/Footer.jsx";
import CalculationPage from "./page/calculation.jsx";
import AboutusPage from "./page/aboutus.jsx";
import ProductDetailPage from "./page/detail.jsx";
import ProjectDeletedPage from "./page/Deleted.jsx";

export default function App() {
  const [openLang, setOpenLang] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto container-max">
        {/* <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-gray-50">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="flex items-center justify-between py-4">
              <Link to="/" className="flex items-center gap-3 group">
                <img
                  src="./logo.png"
                  alt="logo"
                  className="h-8 w-auto transition-opacity group-hover:opacity-80"
                />
                <h1 className="text-xl font-bold tracking-tight bg-linear-to-r from-[#FDEB71] via-[#F98821] to-[#1B5E9E] bg-clip-text text-transparent">
                  CIVIXOR
                </h1>
              </Link>
              <nav className="hidden md:flex items-center gap-8">
                {[
                  { name: "Home", path: "/" },
                  { name: "Material", path: "/material", hasChild: true },
                  { name: "Calculation", path: "/calculation" },
                  { name: "About Us", path: "/aboutus" },
                ].map((nav) => (
                  <div key={nav.name} className="relative group py-2">
                    <Link
                      to={nav.path}
                      className="flex items-center gap-1 text-[14px] font-medium text-gray-600 hover:text-black transition-colors duration-300">
                      {nav.name}
                      {nav.hasChild && (
                        <ChevronDown
                          size={12}
                          className="text-gray-400 group-hover:rotate-180 transition-transform duration-300"
                        />
                      )}
                    </Link>

                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#F98821] transition-all duration-300 group-hover:w-full"></span>

                    {nav.hasChild && (
                      <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                        <div className="w-120 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-2xl border border-gray-50 p-6">
                          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                            {[
                              "Brick",
                              "Steel",
                              "Concrete",
                              "Woods",
                              "Scaffolding",
                              "Ceramic",
                              "Roofing",
                              "Paint",
                              "Ceiling",
                              "Electrical",
                            ].map((item) => (
                              <Link
                                key={item}
                                to={`/material?type=${item.toLowerCase()}`}
                                className="group/item flex items-center justify-between text-[12px] font-medium text-gray-600 hover:text-[#F98821] transition-colors">
                                {item}
                                <div className="w-1.5 h-1.5 rounded-full bg-gray-200 group-hover/item:bg-[#F98821] transition-colors"></div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              <div className="flex items-center gap-5">
                <div className="relative">
                  <button
                    onClick={() => setOpenLang(!openLang)}
                    className="flex items-center gap-2 text-[13px] font-medium text-gray-600 hover:text-black transition-all">
                    <Globe size={16} />
                    <span className="hidden sm:inline">EN</span>
                  </button>

                  {openLang && (
                    <div className="absolute -right-8 mt-2 w-36 bg-white shadow-xl rounded-xl border border-gray-100 py-2 px-1">
                      {["English"].map((l) => (
                        <button
                          key={l}
                          className="w-full text-left px-4 py-2 text-[13px] text-gray-600 hover:bg-orange-100 transition rounded duration-300">
                          {l}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </header> */}
        <main>
          <Routes>
            {/* <Route path="/" element={<ProductPage />} />
            <Route path="/material" element={<MaterialPage />} />
            <Route path="/calculation" element={<CalculationPage />} />
            <Route path="/aboutus" element={<AboutusPage />} />
            <Route path="/detail/:id" element={<ProductDetailPage />} /> */}
            <Route path="*" element={<ProjectDeletedPage />} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </div>
    </div>
  );
}
