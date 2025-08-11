import React, { useEffect, useRef } from "react";
import { partnerLogos } from "../Data/data";

function Partners() {
  

  return (
    <div className="py-16 bg-white overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-10 text-black">
        Our Partners
      </h2>
      <div className="flex items-center justify-center">
        <img
         src={partnerLogos} 
         alt="chengdu" 
         className="w-[700px] h-auto "
         />
      </div>

      
    </div>
  );
}

export default Partners;
