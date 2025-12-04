import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mainLogo from "../Images/logo.png";
import { faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    // Adjust base padding for mobile (px-4/py-8) and keep px-20 for large screens
    <footer className=" bg-[#2d2d2d] text-white px-4 py-8 md:px-20">
      {/* Removed empty p-2 div */}
      
      {/* Main Grid: Stacks on mobile (gap-8), 2 columns on tablet/desktop (md:grid-cols-2) */}
      <div className="container flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-10">

        {/* LEFT SECTION (Logo, Info, Social) */}
        <div className="md:order-1"> {/* Explicit order for flexibility */}
          {/* Logo Placeholder: Reduced height slightly for better mobile fit */}
          <div className="mb-4">
            <img 
              src={mainLogo} 
              alt="Easy Learn" 
              className="h-24 sm:h-28 md:h-32 object-contain" 
            />
          </div>
          
          <p className="text-sm mb-4">
            Learn Smarter, Dream Bigger with EasyLearn Educare. Empowering students with expert study abroad guidance & digital learning. You are next!
          </p>
          
          {/* Contact Info (Icon alignment is handled by default flex) */}
          <p className="flex items-start gap-2 text-sm">
            <FontAwesomeIcon icon={faPhone} className="mt-1 flex-shrink-0" /> 
            8240409187
          </p>
          <p className="flex items-start gap-2 text-sm mt-2">
            <FontAwesomeIcon icon={faEnvelope} className="mt-1 flex-shrink-0" /> 
            ask@easylearne.com
          </p>
          <p className="flex items-start gap-2 text-sm mt-2">
            {/* Added faLocationDot icon from imports for better clarity */}
            <FontAwesomeIcon icon={faLocationDot} className="mt-1 flex-shrink-0" />
            Various offices (See below)
          </p>
          
          {/* Social Icons */}
          <div className="flex gap-6 mt-4 text-xl">
            <a href="#" aria-label="Facebook"><FontAwesomeIcon icon={faFacebookF} className="cursor-pointer hover:text-blue-400 transition" /></a>
            <a href="#" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} className="cursor-pointer hover:text-blue-400 transition" /></a>
            <a href="#" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedinIn} className="cursor-pointer hover:text-blue-400 transition" /></a>
          </div>
        </div>

        {/* RIGHT SECTION (Newsletter & Links) */}
        <div className="md:order-2"> {/* Explicit order for flexibility */}
          
          {/* NEWSLETTER */}
          <div className="mb-8">
            <h3 className="font-semibold mb-3">Subscribe to Our Newsletter</h3>
            <div className="flex w-full">
              <input
                type="email"
                placeholder="Email Address"
                className="p-3 rounded-l-md flex-grow text-black outline-none min-w-0" // min-w-0 prevents input overflow on small screens
              />
              <button 
                className="bg-orange-400 px-3 sm:px-4 py-3 rounded-r-md font-semibold text-sm hover:bg-orange-500 transition"
                aria-label="Subscribe to newsletter"
              >
                SUBSCRIBE
              </button>
            </div>
          </div>
          
          {/* QUICK/USEFUL/OFFICE LINKS - Grid for Tablet/Desktop, Stacks for Mobile */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-6 md:gap-10 mt-6 md:mt-10">
            
            {/* QUICK LINKS */}
            <div>
              <h3 className="font-semibold mb-3">Quick Links</h3>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="hover:text-gray-300 transition">Home</a></li>
                <li><a href="#" className="hover:text-gray-300 transition">About</a></li>
                <li><a href="#" className="hover:text-gray-300 transition">Services</a></li>
                <li><a href="#" className="hover:text-gray-300 transition">Contact us</a></li>
                <li><a href="#" className="hover:text-gray-300 transition">FAQ’s</a></li>
              </ul>
            </div>

            {/* USEFUL LINKS */}
            <div>
              <h3 className="font-semibold mb-3">Useful Links</h3>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="hover:text-gray-300 transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gray-300 transition">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-gray-300 transition">Disclaimer</a></li>
                <li><a href="#" className="hover:text-gray-300 transition">Support</a></li>
                <li><a href="#" className="hover:text-gray-300 transition">Help Center</a></li>
              </ul>
            </div>
            
            {/* OFFICE */}
            <div className="col-span-2 md:col-span-1"> {/* Ensures this block gets full width on mobile/tablet if needed, but aligns properly in 3rd column on desktop */}
              <h3 className="font-semibold mb-3">Office</h3>
              <div className="text-sm space-y-3"> {/* Use a div with spacing for office details */}
                <p>10 AM - 6:30 PM, Monday - Saturday</p>
                <p>
                  <FontAwesomeIcon icon={faLocationDot} className="mr-2 text-orange-400" />
                  <span className="font-bold">Kolkata Office:</span> 264, Durgapur colony, Bankim Mukherjee Road, New Alipur, Kolkata-53
                </p>
                <p>
                  <FontAwesomeIcon icon={faLocationDot} className="mr-2 text-orange-400" />
                  <span className="font-bold">Noida Office:</span> Office no 1026, 10th Floor. Supertech E-Square Sec 96, Noida. UP
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="mt-10 border-t border-gray-600 pt-4 text-center md:text-left text-xs sm:text-sm">
        <p>Copyright © 2025 Easylearn Educare. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;