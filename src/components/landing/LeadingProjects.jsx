import React from "react";

export default function LeadingProjects() {
  return (
    <section className="w-full py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* SECTION HEADER */}
        <div className="mb-16 text-center md:text-left">
          <h4 className="text-black text-lg sm:text-xl font-semibold mb-2">
            Technology Is What We Do
          </h4>
          <h1 className="text-orange-500 text-3xl sm:text-4xl md:text-5xl font-bold mb-6 max-w-4xl">
            Leading Innovation In Electronic Warfare & RF Systems
          </h1>
          <button className="bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 transition">
            Read More
          </button>
        </div>

        {/* SECTION 1 */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-20">
          <div className="flex-1">
            <h3 className="text-black text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 border-t-2 border-orange-600 pt-4">
              Electronic Warfare
            </h3>
            <p className="text-gray-700 mb-4 text-lg sm:text-xl max-w-lg">
              We are a trusted provider of EW solutions, leveraging the
              electromagnetic spectrum to detect, disrupt, and defend against
              threats for strategic advantage.
            </p>
          </div>
          <div className="flex-1">
            <img
              src="https://cdn.pixabay.com/photo/2017/09/10/02/56/technology-2734236_1280.jpg"
              alt="Electronic Warfare"
              className="w-full h-auto rounded-md shadow-lg object-cover"
            />
          </div>
        </div>

        {/* SECTION 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-10 mb-20">
          <div className="flex-1">
            <h3 className="text-black text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 border-t-2 border-orange-600 pt-4">
              Microwave Technology
            </h3>
            <p className="text-gray-700 mb-4 text-lg sm:text-xl max-w-lg">
              Dot92 harnesses Microwave Technology to power high-speed data
              transmission, precision radar, and secure communication across
              mission-critical platforms.
            </p>
          </div>
          <div className="flex-1">
            <img
              src="https://cdn.pixabay.com/photo/2015/12/12/21/00/radar-equipment-1090106_1280.jpg"
              alt="Microwave Technology"
              className="w-full h-auto rounded-md shadow-lg object-cover"
            />
          </div>
        </div>

        {/* SECTION 3 */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <h3 className="text-black text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 border-t-2 border-orange-600 pt-4">
              Radio Frequency
            </h3>
            <p className="text-gray-700 mb-4 text-lg sm:text-xl max-w-lg">
              From antennas to transceivers, our RF solutions are engineered
              for performance and reliability in high-demand environments.
            </p>
          </div>
          <div className="flex-1">
            <img
              src="https://cdn.pixabay.com/photo/2021/09/05/11/56/airport-radar-6599447_1280.jpg"
              alt="Radio Frequency"
              className="w-full h-auto rounded-md shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
