import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "../home/Navbar";
import Footer from "../home/Footer";
import RFImage from "../../assets/rf.webp";
import active from "../../assets/active1.webp";
import RFC from "../../assets/RFCir.webp";
import MMIC from "../../assets/MMIC.webp";

const RFComponents = () => {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Active / Passive Components",
      desc: "These components are essential in systems that transmit, receive, or process radio signals. They include amplifiers, oscillators, antennas, and filters used in satellite communication, UAV data links, radar systems, and military-grade wireless networks. These components ensure signal strength, clarity, and reliability in high-performance environments.",
      img: active,
      offset: { x: -200, y: -100 },
    },
    {
      title: "MMIC / 8P",
      desc: "MMIC (Monolithic Microwave Integrated Circuit) and SiP (System-in-Package) are compact, high-performance solutions used in advanced RF and microwave systems. MMICs integrate multiple microwave functions such as amplifiers, mixers, and switches onto a single chip, ideal for applications like radar, SATCOM, and EW. SiPs combine multiple ICs and components into one package, enabling miniaturization and efficiency.",
      img: MMIC,
      offset: { x: 0, y: 200 },
    },
    {
      title: "RF Circuits",
      desc: "These are specialized electronic circuits designed to operate at radio frequencies, typically from MHz to GHz ranges. They include modules like amplifiers, mixers, filters, and oscillators that process and transmit high-frequency signals. RF circuits are fundamental to systems such as radar, SATCOM, UAV communication and secure military radios.",
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
      <motion.section
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative flex-grow w-full flex items-center justify-center overflow-hidden h-[350px] sm:h-[450px] md:h-[650px]"
      >
        <motion.img
          src={RFImage}
          alt="RF and Microwave Components"
          className="absolute inset-0 w-full h-full object-fill"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          className="relative text-white text-2xl sm:text-4xl md:text-6xl font-bold px-4 text-center"
        >
          RF & Microwave Components
        </motion.h1>
      </motion.section>

      {/* Cards Section */}
      <section className="w-full max-w-7xl mx-auto py-12 sm:py-16 md:py-24 mt-10 px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 md:gap-20">
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
                scale: window.innerWidth >= 768 ? 1.05 : 1,
                boxShadow:
                  window.innerWidth >= 768
                    ? "0px 25px 50px rgba(0, 0, 0, 0.4)"
                    : "none",
              }}
              transition={{ duration: 1, ease: "easeOut" }}
              onClick={() => navigate("/contact")}
              style={{
                backgroundImage: `url(${card.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="rounded-2xl shadow-lg border border-slate-200 
                         p-6 sm:p-8 w-full min-h-[360px]
                         flex flex-col items-center justify-center text-center 
                         text-white relative cursor-pointer mx-auto"
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>

              {/* Card content */}
              <div className="relative z-10 px-2 sm:px-4 flex flex-col">
                <h5 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-3">
                  {card.title}
                </h5>
                <p className="text-gray-200 text-xs sm:text-sm md:text-base mb-4 sm:mb-6">
                  {card.desc}
                </p>
                <span className="text-orange-400 font-semibold text-sm sm:text-base hover:underline">
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
