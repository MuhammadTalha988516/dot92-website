import React from "react";

export default function LeadingProjects() {
  return (
    <section className="w-full py-15 px-4 bg-gray-50">
      <div className="max-w-8xl mx-auto">
        {/* SECTION HEADER */}
        <div className="mb-25 ml-22">
          <h4 className="text-black text-lg font-semibold mb-2">
            Technology Is What We Do
          </h4>
          <h1 className="text-orange-500 text-4xl md:text-5xl font-bold mb-6 max-w-4xl">
            Leading Innovation In Electronic Warfare & RF Systems
          </h1>
          <button className="bg-orange-500 text-white px-6 py-3 hover:bg-orange-600 transition">
            Read More
          </button>
        </div>

        {/* DETAILS: TEXT + IMAGE */}
        <div className="flex flex-col md:flex-row items-start gap-20">
          {/* LEFT TEXT */}
          <div className="flex-1 ml-20">
            <h3 className="text-black text-4xl font-semibold mb-4 border-t-2 border-black pt-4 w-max">
              Electronic Warfare
            </h3>
            <p className="text-gray-700 mb-4 text-2xl max-w-lg">
            We are a trusted provider of EW solutions, which mainly leverages the electromagnetic spectrum to detect, disrupt, and defend against threats. It’s a critical domain in modern defense for gaining strategic advantage
        
           
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-1 mr-20">
            <img
              src="https://cdn.pixabay.com/photo/2017/09/10/02/56/technology-2734236_1280.jpg"
              alt="Electronic Warfare"
              className="w-full h-100 rounded-md shadow-lg"
            />
          </div>
        

        
        </div>

        <div className="flex flex-col md:flex-row items-start gap-20 mt-40">
          {/* LEFT TEXT */}

        <div className="flex-1 ml-20">
            <img
              src="https://cdn.pixabay.com/photo/2015/12/12/21/00/radar-equipment-1090106_1280.jpg"
              alt="Electronic Warfare"
              className="w-full h-100 rounded-md shadow-lg"
            />
          </div>    
          

          {/* RIGHT IMAGE */}
            <div className="flex-1 mr-20 gap-20">
           <h3 className="text-black text-4xl font-semibold mb-4 border-t-2 border-black pt-4 w-max">
            Microwave Technology
            </h3>
            <p className="text-gray-700 mb-4 text-2xl max-w-lg">
            Dot92 harnesses Microwave Technology to power high-speed data transmission, precision radar, and secure communication across mission-critical platforms. Integrated Microwave components ensure next-generation defense capabilities across air, land, sea, and space domains.
            </p>
          
        </div>
        </div>
                <div className="flex flex-col md:flex-row items-start gap-20 mt-20">
          {/* LEFT TEXT */}
          <div className="flex-1 ml-20">
         <h3 className="text-black text-4xl font-semibold mb-4 border-t-2 border-black pt-4 w-max">
            Radio Frequency
            </h3>
            <p className="text-gray-700 mb-4 text-2xl max-w-lg">
           From antennas to transceivers, our RF solutions are engineered for performance, reliability, and mission success in high-demand environments. They enable wireless communication, signal transmission, and sensing across a wide range of defense, aerospace, and telecom applications </p>

          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-1 mr-20">
            <img
              src="https://cdn.pixabay.com/photo/2021/09/05/11/56/airport-radar-6599447_1280.jpg"
              alt="Electronic Warfare"
              className="w-full h-100 rounded-md shadow-lg"
            />
          </div>
        

        
        </div>


      </div>
    </section>
  );
}
