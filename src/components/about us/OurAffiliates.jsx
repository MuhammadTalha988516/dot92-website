import React from 'react';
import { ouraffiliates } from '../Data/data';

function OurAffiliates() {
  return (
    <div className="w-full py-12 sm:py-16 px-4 sm:px-6 bg-gray-50">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12">
        Our Affiliates
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {ouraffiliates.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4 sm:p-6 shadow-lg rounded-lg bg-white hover:shadow-xl transition"
          >
            <img
              src={item.logo}
              alt={item.name}
              className="w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-contain mb-4"
            />
            <h3 className="text-lg sm:text-xl font-semibold mb-2">{item.name}</h3>
            <p className="text-gray-600 text-sm sm:text-base">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurAffiliates;
