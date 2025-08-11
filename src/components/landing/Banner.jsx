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
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 flex flex-col items-start justify-center h-full">
        <h1 className="text-white text-3xl sm:text-5xl font-bold mb-4">
          Welcome to Dot92
        </h1>
        <p className="text-white text-base sm:text-lg max-w-xl mb-8">
          We build cutting-edge digital experiences that ignite innovation and
          empower growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/contact"
            className="px-6 py-3 bg-orange-600 text-black font-semibold rounded hover:bg-gray-200 transition"
          >
            Get Started
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
