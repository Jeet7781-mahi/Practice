import React from "react";
import uni from "../Images/students-after-graduation-ceremony.jpg";
import exam from "../Images/student_taking_a_college_exam-945x630.jpg";
import hospital from "../Images/doctors-hospital-design-superJumbo.jpg";

export default function BlogSection() {
  const blogs = [
    {
      title: "Top 9 Best MBA Colleges in Delhi NCR",
      tag: "MBA COLLEGES",
      image:
        uni,
    },
    {
      title: "WBJEE Exam Date & Pattern 2026",
      tag: "WBJEE EXAM",
      image:
        exam,
    },
    {
      title: "Hospital Management Course in Kolkata",
      tag: "HOSPITAL MANAGEMENT",
      image:
       hospital,
    },
  ];

  return (
    <div className="container bg-white py-12 px-12">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
        Our Blog
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
        {blogs.map((b, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden border"
          >
            {/* Image Section */}
            <div className="relative w-full h-48">
              <img
                src={b.image}
                alt={b.title}
                className="w-full h-full object-cover"
              />

              {/* Badge */}
              <span className="absolute top-3 right-3 bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                {b.tag}
              </span>

              {/* Overlay Title */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white font-bold text-lg leading-snug">
                  {b.title}
                </p>
              </div>
            </div>

            {/* Below Title */}
            <div className="px-4 py-4 text-gray-800 font-semibold text-sm">
              {b.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}