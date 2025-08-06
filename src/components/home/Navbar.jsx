import React from "react";
import Logo from "../../assets/main logo.png";
import {Link} from "react-router-dom"


function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-4 mt-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Left: Logo */}
        <div className="flex items-center">
          <img
            src={Logo}
            alt="logo"
            className="h-20 w-auto object-contain"
          />
        </div>

        {/* Right: Navigation + Button */}
        <div className="flex items-center gap-1">
          {/* Navigation Links */}
          <ul className="flex bg-black/50 border border-orange-500 text-white text-sm font-medium gap-4">
            <li className="w-[140px] h-[52px] flex items-center justify-center text-center cursor-pointer transition-all hover:bg-white hover:text-black">
            <Link to="/electronic-warfare">Electronic Warfare</Link>
            </li>
            <li className="w-[160px] h-[52px] flex items-center justify-center text-center cursor-pointer transition-all hover:bg-white hover:text-black">
              RF & MW Components
            </li>
            <li className="w-[110px] h-[52px] flex items-center justify-center text-center cursor-pointer transition-all hover:bg-white hover:text-black">
            <Link to="/about">About Us</Link>
            </li>
            <li 
            className="w-[110px] h-[52px] flex items-center justify-center text-center cursor-pointer transition-all hover:bg-white hover:text-black">
              
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          {/* Call Now Button */}
          <button className="bg-orange-600 text-white px-6 py-[18px] font-semibold hover:bg-orange-700 cursor-pointer transition">
            Call Now
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
