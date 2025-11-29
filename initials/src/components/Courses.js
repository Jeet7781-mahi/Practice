import React from "react";

const CourseCard = ({title, short}) => (
  <div className="bg-white p-5 rounded-lg shadow-sm">
    <h4 className="font-semibold text-lg">{title}</h4>
    <p className="text-sm text-gray-600 mt-2">{short}</p>
    <button className="mt-4 text-indigo-600 text-sm">Learn more</button>
  </div>
);

export default function Courses(){
  return (
    <section id="courses" className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold">Top Courses Category</h2>
        <p className="text-gray-600 mt-2">Choose from a variety of programs and career-oriented courses.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <CourseCard title="B-Tech" short="Engineering programs across top universities." />
        <CourseCard title="MBA" short="Industry-focused MBA programs to boost your career." />
        <CourseCard title="M-Tech" short="Advanced technical masters for specialized growth." />
      </div>
    </section>
  );
}
