import React from "react";
import {
  Radar,
  Satellite,
  Radio,
  Wifi,
  Cpu,
  Signal,
  Waves,
  Antenna,
} from "lucide-react"; // Example Lucide icons

const services = [
  { icon: <Radar size={48} className="text-orange-500" />, title: "Electronic Warfare Systems" },
  { icon: <Satellite size={48} className="text-orange-500" />, title: "Satellite Communications" },
  { icon: <Radio size={48} className="text-orange-500" />, title: "RF Modules" },
  { icon: <Wifi size={48} className="text-orange-500" />, title: "Microwave Components" },
  { icon: <Cpu size={48} className="text-orange-500" />, title: "Signal Processing Units" },
  { icon: <Signal size={48} className="text-orange-500" />, title: "Antennas & Arrays" },
  { icon: <Waves size={48} className="text-orange-500" />, title: "EMI/EMC Solutions" },
  { icon: <Antenna size={48} className="text-orange-500" />, title: "Surveillance Systems" },
];

export default function OurServices() {
  return (
    <section className="py-20 px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h4 className="text-black text-2xl font-bold mb-2">Our Services</h4>
        <h1 className="text-orange-500 text-4xl font-bold mb-4">
          We Offer Advanced Electronic Warfare & RF Solutions
        </h1>
        <p className="text-gray-700 mb-8 max-w-2xl">
          We provide cutting-edge RF and Microwave systems, electronic warfare solutions, and
          advanced communication modules for mission-critical operations.
        </p>
        <button className="bg-orange-500 text-white px-6 py-3 mb-12 hover:bg-orange-600 transition">
          Read More
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col items-center justify-center text-center bg-white p-8 border border-gray-200 rounded-lg shadow-md transform transition duration-300 hover:-translate-y-2 hover:shadow-lg cursor-pointer"
            >
              {service.icon}
              <h3 className="mt-4 text-lg font-semibold text-black">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
