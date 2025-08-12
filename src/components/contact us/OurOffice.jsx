import React, { useState } from "react";

const OurOffices = () => {
  const [officeData] = useState({
    country: "Pakistan",
    address:
      "79/80, 4th Floor, Executive Block, Gulberg Greens, Islamabad (44600)",
    phone:"+92 300 5146422",
    pbx: "+92 515155900",
    fax: "+92 515155955",
    emails: [
      "info@dot92.com",
      "cm@dot92.com",
      "technical@dot92.com",
    ],
  });

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
            {/* Office Info */}
            <div>
              <h3 className="text-xs uppercase text-gray-500 tracking-wider mb-1">
                {officeData.country}
              </h3>
              <p className="font-semibold text-gray-700 mb-4">
                {officeData.address}
              </p>

              <p className="text-xs uppercase text-gray-500 tracking-wider mb-1">
                Phone Number
              </p>
              <p className="font-semibold text-gray-700 mb-4">
                Phone: {officeData.phone}
                <br />
                PIBX: {officeData.pbx}
                <br />
                Fax    : { officeData.fax}
              </p>
            </div>

            {/* Email Info */}
            <div>
              <h3 className="text-xs uppercase text-gray-500 tracking-wider mb-1">
                Emails
              </h3>
              {officeData.emails.map((email, index) => (
                <p key={index} className="font-semibold text-gray-700">
                  {email}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurOffices;
