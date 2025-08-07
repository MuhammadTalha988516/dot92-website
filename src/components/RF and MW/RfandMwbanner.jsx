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
      desc: "These components are essential in systems that transmit, receive, or process radio signals. They include amplifiers, oscillators, antennas, and filters used in satellite communication, UAV data links, radar systems, and military-grade wireless networks. These components ensure signal strength, clarity, and reliability in high-performance environments.",
      img: active,
      offset: { x: -200, y: -100 },
    },
    {
      title: "MMIC / 8P",
      desc: "MMIC (Monolithic Microwave Integrated Circuit) and SiP (System-in-Package). are compact, high-performance solutions used in advanced RF and microwave systems. MMICs integrate multiple microwave functions such as amplifiers, mixers, and switches onto a single chip, ideal for applications like radar, SATCOM, and EW. SiPs combine multiple ICs and components into one package, enabling miniaturization and efficiency. ",
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

      {/* Banner Section with Animation */}
      <motion.section
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative flex-grow w-full flex items-center justify-center overflow-hidden h-[650px]"
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
          className="relative text-white text-4xl md:text-6xl font-bold px-4 text-center"
        >
          RF & Microwave Components
        </motion.h1>
      </motion.section>

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
                scale: 1.2,
                boxShadow: "0px 25px 50px rgba(0, 0, 0, 0.4)",
              }}
              transition={{ duration: 1, ease: "easeOut" }}
              onClick={() => navigate("/contact")}
              style={{
                backgroundImage: `url(${card.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="rounded-2xl shadow-lg border border-slate-200 
                         p-8 w-full sm:w-[340px] md:w-[380px] h-[420px] 
                         flex flex-col items-center justify-center text-center 
                         text-white relative cursor-pointer mx-auto"
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>

              {/* Card content */}
              <div className="relative z-10 px-4">
                <h5 className="text-white text-2xl md:text-3xl font-bold mb-4">
                  {card.title}
                </h5>
                <p className="text-gray-200 text-sm md:text-base mb-6">
                  {card.desc}
                </p>
                <span className="text-orange-400 font-semibold text-base hover:underline">
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
