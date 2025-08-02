import React from "react";
import Navbar from "../home/Navbar"; 
import Fire from "../../assets/fire.mp4";

function Banner() {
  return (
    <div className="relative w-full h-[600px]">
      {/* Video background */}
      <video
        src={Fire}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay for dark effect */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Navbar overlays on top of video */}
      <Navbar />

      {/* Content on top of video */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-white text-5xl font-bold">Welcome to Dot92</h1>
      </div>
    </div>
  );
}

export default Banner;
