import React from "react";
import Navbar from "../home/Navbar";
import Footer from "../home/Footer";
import RFImage from "../../assets/rf.jpg"; // ✅ Make sure image is in assets

const RFComponents = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar with transparent overlay */}
      <div className="absolute top-0 left-0 w-full z-10">
        <Navbar />
      </div>

      {/* Background Section */}
      <section className="relative flex-grow w-full flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <img
          src={RFImage}
          alt="RF and Microwave Components"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Centered Text */}
        <h1 className="relative text-white text-4xl md:text-6xl font-bold px-4 text-center">
          RF & Microwave Components
        </h1>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default RFComponents;
