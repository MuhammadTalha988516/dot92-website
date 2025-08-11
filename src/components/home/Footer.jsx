import { Link } from "react-router-dom";
import Logo from "../../assets/mainlogo.webp";

function Footer() {
  return (
    <>
      {/* Divider Line Above Footer */}
      <div className="w-full flex justify-center">
        <div className="h-[2px] w-3/4 bg-black my-8"></div>
      </div>

      {/* Footer Section */}
      <footer className="bg-white/70 w-full text-black py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
          
          {/* Logo Section */}
          <div className="flex items-start justify-center md:justify-start">
            <img
              src={Logo}
              alt="logo"
              className="h-[150px] w-auto object-contain"
            />
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/electronic-warfare" className="hover:underline">Electronic Warfare</Link></li>
              <li><Link to="/electronic-warfare" className="hover:underline">Our Expertise</Link></li>
              <li><Link to="/rf-mw-components" className="hover:underline">RF and MW Components</Link></li>
            </ul>
          </div>

          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:underline">Our Affiliates</Link></li>
              <li><Link to="/about" className="hover:underline">Our Team</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
            </ul>
          </div>

          
          {/* Vertical Line + Contact Us Button */}
          <div className="flex flex-col items-center border-l-3 border-black pl-6">
            <p className="mb-4 text-center text-lg">Get in touch with us for more information.</p>
            <Link
              to="/contact"
              className="bg-orange-700 text-white text-lg px-4 py-2 rounded hover:bg-orange-500"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-10 text-sm">
          &copy; {new Date().getFullYear()} DOT92. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default Footer;
