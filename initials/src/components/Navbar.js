import React, { useState } from "react";
import mainLogo from "../Images/WhatsApp Image 2025-11-30 at 9.59.06 PM.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "Home",
    "About Us",
    "Study Abroad",
    "UG & PG Course",
    "Career Guidance",
    "Contact",
  ];

  return (
    <>
      {/* Top Social Bar */}
      <div className="bg-gray-900 text-white flex  sm:flex-row justify-between items-center px-4 py-2 text-xs sm:text-sm">
        <div className="flex space-x-4 text-lg sm:text-xl">
          <FontAwesomeIcon icon={faInstagram} className="cursor-pointer hover:text-blue-400" />
          <FontAwesomeIcon icon={faLinkedin} className="cursor-pointer hover:text-blue-400" />
          <FontAwesomeIcon icon={faFacebook} className="cursor-pointer hover:text-blue-400" />
        </div>

        <div className="font-semibold mt-2 sm:mt-0 cursor-pointer hover:text-yellow-400">
          Our Blogs
        </div>
      </div>

      {/* Main Header */}
      <div className="flex justify-between items-center px-4 py-2 bg-white">
        
        {/* Logo */}
        <img
          src={mainLogo}
          alt="EasyLearn"
          className="h-14 sm:h-16 md:h-20 w-auto object-contain"
        />

        {/* Desktop Contact + Button */}
        <div className="hidden lg:flex items-center gap-6 text-sm sm:text-base">
          <span className="flex items-center gap-2">
            <FontAwesomeIcon icon={faEnvelope} className="text-blue-600" /> easylearneducare@gmail.com
          </span>
          <span className="flex items-center gap-2">
            <FontAwesomeIcon icon={faPhone} className="text-blue-600" /> +91 8240409187
          </span>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition">
            Enroll Now
          </button>
        </div>

        {/* Mobile Only: Enroll + Menu Button */}
        <div className="flex items-center gap-4 lg:hidden">

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition">
            Enroll
          </button>

          <button onClick={() => setMenuOpen(!menuOpen)} className="text-black">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-[#1b4c8a] w-full relative">

        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-wrap justify-center gap-6 py-3 text-white text-sm md:text-base font-medium">
          {navItems.map((item, index) => (
            <li key={index}>
              <a href="#" className="hover:text-yellow-400 transition">{item}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="md:hidden flex flex-col bg-[#1b4c8a] text-white text-base font-medium px-6 pb-5 space-y-5 animate-slideDown">

            {/* Added Email + Phone here */}
            <div className="space-y-2 border-b border-white/20 pb-4">
              <p className="flex items-center gap-2">
                <FontAwesomeIcon icon={faEnvelope} /> easylearneducare@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <FontAwesomeIcon icon={faPhone} /> +91 8240409187
              </p>
            </div>

            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="block hover:text-yellow-400 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>

      {/* Animation */}
      <style>{`
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
};

export default Header;
