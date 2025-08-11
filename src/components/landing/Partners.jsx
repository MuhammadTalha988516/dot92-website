import React from "react";
import { partnerLogos } from "../Data/data";

function Partners() {
  return (
    <div className="py-16 bg-white overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-10 text-black">
        Our Partners
      </h2>
      <div className="flex items-center justify-center px-4">
        <img
          src={partnerLogos}
          alt="chengdu"
          className="
            w-full 
            max-w-[700px] 
            h-auto 
            sm:max-w-[500px] 
            md:max-w-[600px] 
            lg:max-w-[700px]
          "
        />
      </div>
    </div>
  );
}

export default Partners;
