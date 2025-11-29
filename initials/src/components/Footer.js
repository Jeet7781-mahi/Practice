import React from "react";

export default function Footer(){
  return (
    <footer id="contact" className="bg-gray-900 text-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h4 className="text-xl font-bold text-white">Easylearn Educare</h4>
          <p className="mt-2 text-sm">Trusted educational consultancy in Kolkata. Expert counselling and admission assistance.</p>
        </div>

        <div>
          <h5 className="font-semibold">Quick Links</h5>
          <ul className="mt-3 space-y-1 text-sm">
            <li><a href="#about" className="hover:underline">About Us</a></li>
            <li><a href="#study-abroad" className="hover:underline">Study Abroad</a></li>
            <li><a href="#courses" className="hover:underline">Courses</a></li>
            <li><a href="#career" className="hover:underline">Career Guidance</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold">Contact</h5>
          <p className="mt-3 text-sm">easylearneducare@gmail.com</p>
          <p className="text-sm mt-1">+91 82404 09187</p>
          <p className="text-sm mt-1">Kolkata, West Bengal</p>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center py-4 text-sm">
        © {new Date().getFullYear()} Easylearn Educare — All rights reserved.
      </div>
    </footer>
  );
}
