import React from "react";
import aboutImg from "../Images/portrait-three-smiling-graduate-friends-graduation-robes-university-campus-with-diploma.jpg";

const AboutSection = () => {
  return (
    <section className="w-full py-10 sm:py-14 lg:py-20 bg-white">
      <div className="
        container mx-auto 
        grid grid-cols-1 md:grid-cols-2 
        gap-8 lg:gap-14 
        px-4 sm:px-6 lg:px-12 
        items-center
      ">
        
        {/* Image */}
        <div className="flex justify-center">
          <img 
            src={aboutImg} 
            alt="Students" 
            className="
              w-full 
              max-w-[450px] 
              md:max-w-full 
              rounded-lg shadow-lg 
              object-cover 
              h-[220px] sm:h-[300px] md:h-[350px] lg:h-[420px]
            "
          />
        </div>

        {/* Content */}
        <div className="space-y-4 sm:space-y-5">
          <h2 
            className="
              font-bold leading-tight
              text-[clamp(1.5rem,4vw,2.7rem)]
            "
          >
            About{" "}
            <span className="text-blue-500 border-b-4 border-blue-300">
              Us
            </span>
          </h2>

          <p 
            className="
              text-gray-600 
              text-[clamp(0.85rem,1.2vw,1.1rem)]
              leading-relaxed
              max-w-xl
            "
          >
            EasyLearn Educare is a trusted educational consultancy in Kolkata, 
            guiding students toward top MBA and professional colleges across India. 
            We provide expert counselling, admission assistance, and career 
            guidance to help students achieve their academic and professional dreams.
          </p>

          {/* Button */}
          <button 
            className="
              bg-blue-600 hover:bg-blue-700 
              text-white 
              transition 
              shadow-md rounded-full
              text-[clamp(0.8rem,1vw,1.1rem)] 
              px-6 py-2.5 sm:px-7 sm:py-3
            "
          >
            View More &gt;&gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
