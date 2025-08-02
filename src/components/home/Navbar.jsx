import React from "react";

function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-20 bg-transparent px-4  mt-12 ">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo box */}
        <div className="border-2 border-orange-500 rounded-md px-6 py-3 text-2xl font-bold text-white cursor-pointer bg-transparent">
          MyLogo
        </div>

        {/* Nav links inside one box */}
        <div className="border-2 border-orange-500 rounded-md bg-transparent flex space-x-4 px-4 py-2">
          <li className="list-none px-5 py-2 rounded-md cursor-pointer text-white hover:bg-orange-500 hover:text-white transition-colors duration-300">
            Home
          </li>
          <li className="list-none px-5 py-2 rounded-md cursor-pointer text-white hover:bg-orange-500 hover:text-white transition-colors duration-300">
            About
          </li>
          <li className="list-none px-5 py-2 rounded-md cursor-pointer text-white hover:bg-orange-500 hover:text-white transition-colors duration-300">
            Services
          </li>
          <li className="list-none px-5 py-2 rounded-md cursor-pointer text-white hover:bg-orange-500 hover:text-white transition-colors duration-300">
            Contact
          </li>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
