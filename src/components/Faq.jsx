import { useState } from "react";

const faqs = [
  {
    question: "Is the important information provided always up to date?",
    answer:
      "We strive to update material information regularly to ensure it remains relevant to market conditions. However, prices are subject to change at any time depending on the supplier and region.",
  },
  {
    question: "Does this website provide or sell building materials?",
    answer:
      "No. This website does not sell building materials directly. We only provide information about building materials and specifications, as well as consultation services to help you prepare a cost estimate so you can choose the right materials for your project.",
  },
  {
    question: "Is there a consultation service available?",
    answer:
      "Yes, we offer consulting services to customers who need them. We have technical consultants available to assist you with cost estimates.",
  },
  {
    question: "Is the RAB consultation fee-based?",
    answer:
      "Consulting services may be free of charge for the initial stage (rough estimate). For a more detailed and comprehensive cost estimate, a fee may apply depending on the complexity of the project.",
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
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden transition">
                {/* QUESTION */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-5 text-left">
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
                    isActive ? "max-h-40 opacity-100 pb-5" : "max-h-0 opacity-0"
                  } overflow-hidden`}>
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
