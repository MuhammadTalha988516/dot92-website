import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { expertiseData } from "../Data/data";

function OurExpertise() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-white py-16 px-4 md:px-20 text-center">
      <h2 className="text-3xl font-bold mb-12 text-gray-800">Our Expertise</h2>
      <div className="grid gap-12 md:grid-cols-3">
        {expertiseData.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div
              key={index}
              data-aos="fade-up"
              className="flex flex-col items-center h-[300px] border border-gray-200 rounded-xl shadow-xl bg-white p-6 transition-transform hover:scale-105 duration-300 ease-in-out"
            >
              <div className="mb-4">
                <IconComponent className="w-12 h-12 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default OurExpertise;
