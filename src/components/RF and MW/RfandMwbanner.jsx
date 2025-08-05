import React from "react";
import RFImage from "../../assets/rf.jpg"; // ✅ Place image in assets folder

const RFComponents = () => {
  return (
    <section className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-2xl shadow-lg">
      {/* Background Image */}
      <img
        src={RFImage}
        alt="RF and Microwave Components"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Text */}
      <h1 className="relative text-white text-4xl md:text-6xl font-bold px-4 text-center">
        RF & Microwave Components
      </h1>
    </section>
  );
};

export default RFComponents;
