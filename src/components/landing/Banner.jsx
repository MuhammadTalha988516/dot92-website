import Fire from "../../assets/fire.mp4";

function Banner() {
  return (
    <div className="relative w-full h-[800px]">
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
      <div className="relative z-10 mx-10 flex flex-col items-start justify-center h-full text-center px-4">
        <h1 className="text-white text-5xl font-bold mb-4">Welcome to Dot92</h1>
        <p className="text-white text-lg max-w-xl mb-8">
          We build cutting-edge digital experiences that ignite innovation and
          empower growth.
        </p>
        <div className="flex gap-4">
          <button className="px-6 py-3 bg-orange-600 text-black font-semibold rounded hover:bg-gray-200 transition">
            Get Started
          </button>
          <button className="px-6 py-3 border border-white text-white font-semibold rounded hover:bg-white hover:text-black transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
