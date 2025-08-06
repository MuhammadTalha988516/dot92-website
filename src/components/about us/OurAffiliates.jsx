import React from 'react';
import { ouraffiliates } from '../Data/data'; // ✅ correct import

function OurAffiliates() {
  return (
    <div className="w-full py-16 px-6 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Our Affiliates
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {ouraffiliates.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 shadow-lg rounded-lg bg-white"
          >
            <img
              src={item.logo}
              alt={item.name}
              className="w-40 h-40 object-contain mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurAffiliates;
