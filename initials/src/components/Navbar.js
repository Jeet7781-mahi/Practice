import React from "react";

export default function Navbar() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <div className="text-2xl font-extrabold text-indigo-600">Easylearn</div>
            <div className="text-sm text-gray-500 hidden sm:block">Educare</div>
          </div>

          <nav className="hidden md:flex gap-6 items-center text-gray-700">
            <a href="#home" className="hover:text-indigo-600">Home</a>
            <a href="#about" className="hover:text-indigo-600">About Us</a>
            <a href="#study-abroad" className="hover:text-indigo-600">Study Abroad</a>
            <a href="#courses" className="hover:text-indigo-600">UG & PG Course</a>
            <a href="#career" className="hover:text-indigo-600">Career Guidance</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="#enroll" className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm shadow-sm hover:bg-indigo-700">
              Enroll Now
            </a>
            <button className="md:hidden p-2 rounded-md focus:outline-none" onClick={()=>{
              const nav = document.getElementById("mobile-nav");
              if(nav) nav.classList.toggle("hidden");
            }}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
            </button>
          </div>
        </div>
      </div>

      {/* mobile nav */}
      <div id="mobile-nav" className="md:hidden hidden px-4 pb-4">
        <nav className="flex flex-col gap-2 text-gray-700">
          <a href="#home" className="block py-2">Home</a>
          <a href="#about" className="block py-2">About Us</a>
          <a href="#study-abroad" className="block py-2">Study Abroad</a>
          <a href="#courses" className="block py-2">UG & PG Course</a>
          <a href="#career" className="block py-2">Career Guidance</a>
          <a href="#contact" className="block py-2">Contact</a>
        </nav>
      </div>
    </header>
  );
}
