import React from "react";


const OurOffices = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Left Side - Heading */}
          <div>
            <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
              Contact
            </p>
            <h2 className="text-4xl font-semibold text-gray-900">
              Our offices
            </h2>
          </div>

          {/* Right Side - Office Details */}
          <div className="space-y-6 col-span-2 grid md:grid-cols-2 gap-8">
            {/* US Office */}
            <div>
              <h3 className="text-xs uppercase text-gray-500 tracking-wider mb-1">
                United States
              </h3>
              <p className="font-semibold text-gray-900">Adchitects LLC</p>
              <p className="text-gray-700">1740 Broadway</p>
              <p className="text-gray-700">
                New York City 10019, United States
              </p>
              <p className="text-xs uppercase text-gray-500 tracking-wider mt-4">
                Registration Number:
              </p>
              <p className="text-gray-900">4059227</p>
            </div>

            {/* Europe Office */}
            <div>
              <h3 className="text-xs uppercase text-gray-500 tracking-wider mb-1">
                Europe Head Office
              </h3>
              <p className="font-semibold text-gray-900">
                Adchitects Sp. z o. o.
              </p>
              <p className="text-gray-700">Aleja Niepodległości 36</p>
              <p className="text-gray-700">61-714 Poznań, Poland</p>
              <p className="text-xs uppercase text-gray-500 tracking-wider mt-4">
                EU VAT-ID:
              </p>
              <p className="text-gray-900">PL7792439412</p>
            </div>
          </div>
        </div>

        {/* Map and Info Card Section */}
        <div className="relative w-full h-[500px] mt-16">
          <iframe
            title="Office Locations Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.9852514023534!2d-74.00601518459156!3d40.712775279330175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMjIuOCJX!5e0!3m2!1sen!2sus!4v1625655281234!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="absolute inset-0 w-full h-full"
          ></iframe>

          {/* Info Card */}
          <div className="absolute w-sm h-[500px] top-10 right-8 bg-white shadow-lg p-10 rounded-xl max-w-lg z-10">
            <h4 className="font-semibold text-lg text-gray-900 mb-2">
              United States Office
            </h4>
            <p className="text-sm text-gray-700 mb-1">Adchitects LLC</p>
            <p className="text-sm text-gray-700 mb-1">1740 Broadway</p>
            <p className="text-sm text-gray-700 mb-1">
              New York City 10019, United States
            </p>
            <p className="text-sm text-gray-700 mt-2">
              Registration No: 4059227
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurOffices;
