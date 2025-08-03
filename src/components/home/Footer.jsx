import Logo from "../../assets/main logo.png";

function Footer() {
  return (
    <>
      {/* Divider Line Above Footer */}
      <div className="w-full flex justify-center">
        <div className="h-[2px] w-3/4 bg-gray-400 my-8"></div>
      </div>

      {/* Footer Section */}
      <footer className="bg-white/70 w-full text-black py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="flex items-start justify-center md:justify-start ">
            <img src={Logo} alt="logo" className="h-[150px] w-auto object-contain " />
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>Drones</li>
              <li>UAVs</li>
              <li>RF Components</li>
            </ul>
          </div>

          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li>Our Company</li>
              <li>Careers</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Social Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">LinkedIn</a></li>
              <li><a href="#" className="hover:underline">Twitter</a></li>
              <li><a href="#" className="hover:underline">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-10 text-sm">
          &copy; {new Date().getFullYear()} DOT92. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default Footer;
