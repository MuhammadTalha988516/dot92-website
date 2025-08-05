import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../../assets/main logo.png";

function Navbar() {
  const location = useLocation();

  // Scroll to top on every route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const linkClasses =
    "w-[140px] h-[52px] flex items-center justify-center text-center cursor-pointer transition-all hover:bg-white hover:text-black";

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
            <li>
              <NavLink
                to="/electronic-warfare"
                className={({ isActive }) =>
                  `${linkClasses} ${
                    isActive ? "bg-orange-600 text-white" : ""
                  }`
                }
              >
                Electronic Warfare
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/rf-mw-components"
                className={({ isActive }) =>
                  `${linkClasses} ${
                    isActive ? "bg-orange-600 text-white" : ""
                  }`
                }
              >
                RF & MW Components
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${linkClasses} ${
                    isActive ? "bg-orange-600 text-white" : ""
                  }`
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `${linkClasses} ${
                    isActive ? "bg-orange-600 text-white" : ""
                  }`
                }
              >
                Contact
              </NavLink>
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
