import { useState } from "react";
import { gsap } from "gsap";

const faqs = [
  {
    question: "Apakah produk memiliki kualitas terjamin?",
    answer:
      "Ya, semua produk telah melalui proses seleksi dan memiliki standar kualitas yang jelas.",
  },
  {
    question: "Apakah tersedia pengiriman ke seluruh Indonesia?",
    answer:
      "Kami melayani pengiriman ke seluruh Indonesia melalui mitra logistik terpercaya.",
  },
  {
    question: "Bagaimana cara melakukan pemesanan?",
    answer:
      "Anda dapat langsung memilih produk dan menghubungi kami melalui tombol detail atau kontak yang tersedia.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* TITLE */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            FAQ
          </h2>
          <p className="text-gray-500 mt-2">
            Pertanyaan yang sering ditanyakan
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden transition"
              >
                {/* QUESTION */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-5 text-left"
                >
                  <span className="font-medium text-gray-800">
                    {faq.question}
                  </span>
                  <span className="text-xl text-gray-400">
                    {isActive ? "−" : "+"}
                  </span>
                </button>

                {/* ANSWER */}
                <div
                  className={`px-5 transition-all duration-300 ease-in-out ${
                    isActive
                      ? "max-h-40 opacity-100 pb-5"
                      : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}