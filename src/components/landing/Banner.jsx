import Fire from "../../assets/fire.mov";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className="relative w-full h-[600px] sm:h-[800px]">
      {/* Background Video */}
      <video
        src={Fire}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-[100vh] object-cover"
      />

     
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 flex flex-col items-start justify-center h-full">
        <h1 className="text-white text-3xl sm:text-5xl font-bold mb-4 mt-40">
          Welcome to Dot92
        </h1>
        <p className="text-white text-base sm:text-lg max-w-xl mb-8">
         Partners in Capacity Building
        </p>
        <p className="text-white max-w-xl text-lg">
          Dot92 is a specialized company providing advanced RF and microwave solutions. Our core business focuses on electronic countermeasures and intelligent unmanned systems. We proudly serve both public and private sector clients, offering customized EW technologies that enhance situational awareness and threat detection
        </p>
        <br />
        <br />
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/contact"
            className="px-6 py-3 bg-orange-600 text-white font-semibold rounded hover:bg-orange-800 transition"
          >
            Join Us
          </Link>
          <Link
            to="/about"
            className="px-6 py-3 border border-white text-white font-semibold rounded hover:bg-white hover:text-black transition"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
