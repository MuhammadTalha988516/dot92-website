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
        <h1 className="text-white text-3xl sm:text-5xl font-bold mb-4 mt-32">
          Welcome to Dot92
        </h1>
        <p className="text-orange-500 text-base sm:text-lg max-w-xl mb-8 font-extrabold">
         Partners in Capacity Building
        </p>
        
        <br />
        
        <div className="flex flex-col sm:flex-row gap-2 ">
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