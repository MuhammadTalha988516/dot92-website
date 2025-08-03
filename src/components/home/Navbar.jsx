import React from "react";

function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-4 mt-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Left: Logo Box */}
        <div className="border border-orange-500 px-4 py-2 bg-black/50 text-white text-center">
          <p className="text-xl font-extrabold leading-none">dot</p>
          <p className="text-sm">92</p>
        </div>

        {/* Center: Navigation Links */}
        <ul className="flex bg-black/50 border border-orange-500 text-white text-sm font-medium gap-2">
          <li className="w-[110px] h-[52px] flex items-center justify-center text-center cursor-pointer transition-all hover:bg-white hover:text-black">
            Electronic Warfare 
          </li>
          <li className="w-[110px] h-[52px] flex items-center justify-center text-center cursor-pointer transition-all hover:bg-white hover:text-black">
            RF & MW Components
          </li>
          <li className="w-[110px] h-[52px] flex items-center justify-center text-center cursor-pointer transition-all hover:bg-white hover:text-black">
            About Us
          </li>
          <li className="w-[110px] h-[52px] flex items-center justify-center text-center cursor-pointer transition-all hover:bg-white hover:text-black">
            Contact
          </li>
        </ul>

        {/* Right: Call Now Button */}
        <button className="bg-orange-600 text-white px-6 py-[18px] font-semibold hover:bg-orange-700 cursor-pointer transition">
          Call Now
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
