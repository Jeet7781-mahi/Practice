import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQSection() {
  const faqs = [
    {
      q: "How does EasyLearn Educare help with study abroad planning?",
      a: "EasyLearn Educare guides you through the entire process. We suggest country and course selection, applications, documentation, and visa support.",
    },
    {
      q: "Do you assist with UG and PG admissions in India?",
      a: "EasyLearn Educare helps secure admissions for UG/PG and professional programs.",
    },
    {
      q: "Can I get online counselling, or do I need to visit your office?",
      a: "EasyLearn Educare offers both online/offline counselling. Call us and schedule your consultation.",
    },
    {
      q: "Which countries can I apply to for studying abroad?",
      a: "The UK, USA, Canada, Australia, Germany, and Dubai are the most enquired destinations. Connect with us for other countries.",
    },
    {
      q: "Is there a fee for counselling?",
      a: "We offer free initial counselling. If you decide to proceed, our team will explain any service charges transparently before the process begins.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="container bg-white py-14">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-10 flex flex-col md:flex-row gap-10 items-start justify-center">

        {/* Left Content */}
        <div className="w-full md:w-[35%] text-center md:text-left">
          <h4 className="text-sm font-bold text-red-500 tracking-wide">FAQ</h4>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2 leading-snug">
            Frequently Asked<br /> Questions.
          </h2>

          <p className="text-gray-600 mt-4 leading-relaxed max-w-[90%] md:max-w-full mx-auto md:mx-0">
            We provide expert counselling, admission assistance, and career guidance.
          </p>
        </div>

        {/* Right Accordion */}
        <div className="w-full md:w-[65%] space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="border rounded-lg bg-gray-50 shadow-sm overflow-hidden transition-all"
            >
              <button
                className="w-full flex justify-between items-center p-4 text-left text-gray-800 font-medium hover:bg-gray-100 transition"
                onClick={() => toggleFAQ(index)}
              >
                <span className="pr-4">{item.q}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-green-500 w-5 h-5 shrink-0" />
                ) : (
                  <ChevronDown className="text-green-500 w-5 h-5 shrink-0" />
                )}
              </button>

              {/* Accordion content with animation */}
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-40 opacity-100 p-4 pt-0" : "max-h-0 opacity-0 p-0"
                }`}
              >
                <p className="text-gray-600 leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
