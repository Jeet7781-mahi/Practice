import React from "react";

export default function CountriesAndWhyChoose() {
  const countries = [
    { src: "https://flagcdn.com/gb.svg", name: "UK" },
    { src: "https://flagcdn.com/us.svg", name: "USA" },
    { src: "https://flagcdn.com/au.svg", name: "Australia" },
    { src: "https://flagcdn.com/ca.svg", name: "Canada" },
    { src: "https://flagcdn.com/ie.svg", name: "Ireland" },
    { src: "https://flagcdn.com/eu.svg", name: "Europe" },
    { src: "https://flagcdn.com/sg.svg", name: "Singapore" },
    { src: "https://flagcdn.com/ae.svg", name: "UAE" },
    { src: "https://flagcdn.com/nz.svg", name: "New Zealand" },
  ];

  const features = [
    {
      title: "Flexibility",
      desc: "We provide expert counselling, admission assistance, and career guidance.",
    },
    {
      title: "Quality",
      desc: "We ensure high-quality services for students aspiring to study abroad.",
    },
    {
      title: "Experienced",
      desc: "Our experienced counsellors guide you throughout your academic journey.",
    },
    {
      title: "Global",
      desc: "We assist students aiming for top universities across the globe.",
    },
  ];

  return (
    <div className="w-full">
      {/* 🌍 Countries Section */}
      <section className="bg-[#052a4f] text-white py-10 px-4 sm:px-8 lg:px-16 text-center">

        <h2 className="text-[clamp(1.4rem,4vw,2.3rem)] font-bold mb-8">
          Countries For Study Abroad
        </h2>

        <div className="
          grid
          grid-cols-3 sm:grid-cols-4 md:grid-cols-6 
          gap-4 sm:gap-6 
          max-w-6xl mx-auto mb-8
        ">
          {countries.map((c, idx) => (
            <div key={idx} className="flex justify-center">
              <img
                src={c.src}
                alt={c.name}
                className="w-14 h-10 sm:w-16 sm:h-12 md:w-20 md:h-14 object-cover rounded shadow border"
              />
            </div>
          ))}
        </div>

        <button className="mt-4 px-6 py-2 bg-white text-[#052a4f] font-semibold rounded-full shadow hover:bg-gray-200 transition-all text-sm sm:text-base">
          View More
        </button>
      </section>

      {/* ⭐ Why Choose Section */}
      <section className="py-12 px-4 sm:px-8 lg:px-16 text-center bg-white">

        <h2 className="text-[clamp(1.4rem,4vw,2.3rem)] font-bold text-gray-900 mb-4">
          Why Choose <span className="text-blue-600">Easylearn Educare</span>?
        </h2>

        <p className="text-gray-700 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed mb-10">
          We provide expert counselling, admission assistance, and career guidance to help students
          achieve their academic and professional dreams. Our dedicated team ensures high-quality
          service and trusted mentorship.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="
                border border-blue-400 
                rounded-xl p-5 sm:p-6 
                shadow hover:shadow-lg 
                transition bg-white text-center
              "
            >
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                {f.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
