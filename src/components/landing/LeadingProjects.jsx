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
        <div className="flex flex-col md:flex-row items-start gap-12">
          {/* LEFT TEXT */}
          <div className="flex-1 ml-20">
            <h3 className="text-black text-2xl font-semibold mb-4 border-t-2 border-black pt-4 w-max">
              Electronic Warfare
            </h3>
            <p className="text-gray-700 mb-4 max-w-md">
              We are a trusted provider of advanced Electronic Warfare (EW)
              solutions, enabling superior situational awareness and mission
              success.
        
           
              Our integrated RF and Microwave components empower next-generation
              defense and communication systems across critical domains.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-1 mr-20">
            <img
              src="https://images.pexels.com/photos/76971/fighter-jet-fighter-aircraft-f-16-falcon-aircraft-76971.jpeg"
              alt="Electronic Warfare"
              className="w-full h-100 rounded-md shadow-lg"
            />
          </div>
        

        
        </div>

        <div className="flex flex-col md:flex-row items-start gap-12 mt-30">
          {/* LEFT TEXT */}

        <div className="flex-1 ml-20">
            <img
              src="https://cdn.pixabay.com/photo/2015/12/12/21/00/radar-equipment-1090106_1280.jpg"
              alt="Electronic Warfare"
              className="w-full h-100 rounded-md shadow-lg"
            />
          </div>    
          

          {/* RIGHT IMAGE */}
            <div className="flex-1 mr-20">
           <h3 className="text-black text-2xl font-semibold mb-4 border-t-2 border-black pt-4 w-max">
            Microwave Technology
            </h3>
            <p className="text-gray-700 mb-4 max-w-md">
            Our cutting-edge Microwave systems deliver high-performance solutions for advanced radar, secure communications, and electronic warfare applications.
            Integrated RF and Microwave components ensure next-generation defense capabilities across air, land, sea, and space domains.
            </p>
          
        </div>
        </div>
                <div className="flex flex-col md:flex-row items-start gap-12 mt-20">
          {/* LEFT TEXT */}
          <div className="flex-1 ml-20">
         <h3 className="text-black text-2xl font-semibold mb-4 border-t-2 border-black pt-4 w-max">
            Radio Frequency
            </h3>
            <p className="text-gray-700 mb-4 max-w-md">
            Our Radio Frequency (RF) technologies enable reliable, high-speed signal transmission and secure communications across a wide range of mission-critical applications.
            From precision RF modules to broadband amplifiers and advanced filters, our solutions support modern defense, aerospace, and secure communication systems.
            </p>

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
