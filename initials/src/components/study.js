import React from "react";

export default function StudyConsultancySection() {
  return (
    <section className="bg-white py-10 sm:py-14 lg:py-20 px-4 sm:px-8 lg:px-16">
      <div
        className="
          max-w-7xl mx-auto 
          flex flex-col lg:flex-row 
          items-start justify-between 
          gap-10 lg:gap-16
        "
      >
        {/* Left Section */}
        <div className="w-full lg:w-1/2 space-y-4">
          <h2
            className="
              font-bold leading-snug 
              text-[clamp(1.5rem,4vw,2.5rem)]
              text-gray-900
            "
          >
            Not just a{" "}
            <span className="text-blue-600">traditional</span> study
            <br />
            abroad <span className="text-blue-600">consultancy</span>
          </h2>

          <p
            className="
              text-gray-700 
              text-[clamp(0.85rem,1vw,1rem)] 
              leading-relaxed
            "
          >
            EasyLearn Educare is a trusted educational consultancy in Kolkata,
            guiding students toward top MBA and professional colleges across
            India. We provide expert counselling, admission assistance, and
            career guidance to help students achieve their academic and
            professional dreams.
          </p>

          <p
            className="
              text-gray-700 
              text-[clamp(0.85rem,1vw,1rem)] 
              leading-relaxed
            "
          >
            Our mission is to support students from start to finish — from the
            application process to selecting the right program and settling
            into their chosen destination with confidence and clarity.
          </p>
        </div>

        {/* Right Side Form */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div
            className="
              w-full max-w-md 
              bg-white border rounded-xl shadow-md 
              p-6 sm:p-8
            "
          >
            <h3
              className="
                text-[clamp(1rem,1.6vw,1.3rem)]
                font-semibold 
                text-gray-900 
                text-center
              "
            >
              Book Your{" "}
              <span className="text-blue-600">FREE Consultation</span> Call
              with Our Certified Counsellors
            </h3>

            <form className="mt-6 space-y-4">
              <input
                type="text"
                placeholder="Full Name *"
                className="w-full border rounded-md p-3 text-sm sm:text-base focus:outline-blue-500"
              />

              <input
                type="text"
                placeholder="Mobile Number *"
                className="w-full border rounded-md p-3 text-sm sm:text-base focus:outline-blue-500"
              />

              <input
                type="email"
                placeholder="Email ID *"
                className="w-full border rounded-md p-3 text-sm sm:text-base focus:outline-blue-500"
              />

              <select className="w-full border rounded-md p-3 text-sm sm:text-base focus:outline-blue-500">
                <option>Destination *</option>
                <option>USA</option>
                <option>UK</option>
                <option>Canada</option>
                <option>Australia</option>
                <option>Germany</option>
              </select>

              <label className="flex gap-2 text-xs sm:text-sm text-gray-700 items-start">
                <input type="checkbox" className="mt-[4px]" />
                <span>
                  I agree to Easylearn’s{" "}
                  <span className="text-blue-600 cursor-pointer">
                    Privacy Policy
                  </span>{" "}
                  and{" "}
                  <span className="text-blue-600 cursor-pointer">
                    Terms and Conditions
                  </span>{" "}
                  *
                </span>
              </label>

              <button
                type="submit"
                className="
                  w-full 
                  bg-green-500 hover:bg-green-600 
                  transition 
                  text-white font-semibold 
                  text-sm sm:text-base 
                  py-3 rounded-md
                "
              >
                Book a FREE Consultation →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
