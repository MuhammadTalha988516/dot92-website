import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "../home/Navbar";
import Footer from "../home/Footer";
import RFImage from "../../assets/rf.jpg";
import active from "../../assets/active.jpg";
import RFC from "../../assets/RFCir.jpg";
import MMIC from "../../assets/MMIC.jpg";

const RFComponents = () => {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Active / Passive Components",
      desc: "Comprehensive solutions for active and passive RF and microwave components including switches, attenuators, and couplers.",
      img: active,
      offset: { x: -200, y: -100 },
    },
    {
      title: "MMIC / 8P",
      desc: "Advanced Monolithic Microwave Integrated Circuits (MMIC) and 8P solutions for high-frequency applications.",
      img: MMIC,
      offset: { x: 0, y: 200 },
    },
    {
      title: "RF Circuits",
      desc: "Custom-designed RF circuit solutions optimized for defense and communication systems.",
      img: RFC,
      offset: { x: 200, y: -100 },
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-10">
        <Navbar />
      </div>

      {/* Banner Section */}
      <section className="relative flex-grow w-full flex items-center justify-center overflow-hidden h-[650px]">
        <img
          src={RFImage}
          alt="RF and Microwave Components"
          className="absolute inset-0 w-full h-full object-fill"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <h1 className="relative text-white text-4xl md:text-6xl font-bold px-4 text-center">
          RF & Microwave Components
        </h1>
      </section>

      {/* Cards Section */}
      <section className="w-full max-w-7xl mx-auto py-24 mt-20 px-6 grid grid-cols-1 md:grid-cols-3 gap-20">
        {cards.map((card, index) => {
          const ref = useRef(null);
          const isInView = useInView(ref, { once: true, amount: 0.2 });

          return (
            <motion.div
              key={index}
              ref={ref}
              initial={{ x: card.offset.x, y: card.offset.y, opacity: 0 }}
              animate={isInView ? { x: 0, y: 0, opacity: 1 } : {}}
              whileHover={{
                scale: 1.25,
                boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.35)",
              }}
              transition={{ duration: 1, ease: "easeOut" }}
              onClick={() => navigate("/contact")}
              style={{
                backgroundImage: `url(${card.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="rounded-lg shadow-md border border-slate-200 p-6 flex flex-col items-center text-center text-white relative cursor-pointer"
            >
              {/* Dark overlay for better text visibility */}
              <div className="absolute inset-0 bg-black/40 rounded-lg"></div>

              {/* Card content */}
              <div className="relative z-10">
                <h5 className="text-white text-xl font-semibold mb-2">
                  {card.title}
                </h5>
                <p className="text-gray-200 mb-4">{card.desc}</p>
                <span className="text-orange-400 font-semibold text-sm hover:underline">
                  Learn More →
                </span>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default RFComponents;
