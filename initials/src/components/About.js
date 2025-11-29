import React from "react";
import aboutImg from "../Images/portrait-three-smiling-graduate-friends-graduation-robes-university-campus-with-diploma.jpg"; // <-- replace with your image path

const AboutSection = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-5 md:px-10 items-center">
        
        {/* Image */}
        <div>
          <img 
            src={aboutImg} 
            alt="Students" 
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="space-y-5">
          <h2 className="text-4xl font-bold">
            About <span className="text-blue-500 border-b-4 border-blue-300">Us</span>
          </h2>

          <p className="text-gray-600 leading-relaxed">
            EasyLearn Educare is a trusted educational consultancy in Kolkata, guiding 
            students toward top MBA and professional colleges across India. We provide 
            expert counselling, admission assistance, and career guidance to help 
            students achieve their academic and professional dreams.
          </p>

          {/* Button */}
          <button className="bg-blue-600 text-white py-3 px-6 rounded-full shadow-md hover:bg-blue-700 transition-all">
            View More &gt;&gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
