import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../../assets/mainlogo.webp";

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMenuOpen(false);
  }, [location.pathname]);

  const linkClasses =
    "w-[140px] h-[52px] flex items-center justify-center text-center cursor-pointer transition-all hover:bg-white hover:text-black";

  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-4 mt-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between flex-nowrap">
        
        {/* Logo */}
        <NavLink to="/" className="flex-shrink-0">
          <img
            src={Logo}
            alt="logo"
            className="h-35 w-auto object-contain cursor-pointer"
          />
        </NavLink>

        {/* Hamburger (Mobile Only) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white ml-4 flex-shrink-0"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center flex-grow justify-end">
          <ul className="flex bg-black/50 border border-orange-500 text-white text-sm font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${linkClasses} ${isActive ? "bg-orange-600 text-white" : ""}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/electronic-warfare"
                className={({ isActive }) =>
                  `${linkClasses} ${isActive ? "bg-orange-600 text-white" : ""}`
                }
              >
                Electronic Warfare
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/rf-mw-components"
                className={({ isActive }) =>
                  `${linkClasses} ${isActive ? "bg-orange-600 text-white" : ""}`
                }
              >
                RF & MW Components
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${linkClasses} ${isActive ? "bg-orange-600 text-white" : ""}`
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `${linkClasses} ${isActive ? "bg-orange-600 text-white" : ""}`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <button className="bg-orange-600 text-white px-6 py-[18px] font-semibold hover:bg-orange-700 cursor-pointer transition">
            Call Now
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-[90px] left-0 w-full bg-black/90 text-white flex flex-col items-center space-y-2 py-4">
          <NavLink
            to="/"
            className="py-3 w-full text-center hover:bg-orange-600"
          >
            Home
          </NavLink>
          <NavLink
            to="/electronic-warfare"
            className="py-3 w-full text-center hover:bg-orange-600"
          >
            Electronic Warfare
          </NavLink>
          <NavLink
            to="/rf-mw-components"
            className="py-3 w-full text-center hover:bg-orange-600"
          >
            RF & MW Components
          </NavLink>
          <NavLink
            to="/about"
            className="py-3 w-full text-center hover:bg-orange-600"
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className="py-3 w-full text-center hover:bg-orange-600"
          >
            Contact
          </NavLink>
          <button className="bg-orange-600 text-white px-6 py-3 font-semibold w-full hover:bg-orange-700">
            Call Now
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
