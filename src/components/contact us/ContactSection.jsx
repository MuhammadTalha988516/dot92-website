import React, { useState } from "react";
import { motion } from "framer-motion";
import cbg from "../../assets/cbg.webp";

const ContactSection = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    contactNo: "",
    inquiry: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("✅ Your message has been recorded!");
    setFormData(initialState);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex flex-col items-center justify-center bg-white py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        
        {/* LEFT: FORM */}
        <div>
          <h3 className="text-sm font-medium text-gray-900 uppercase mb-2">
            Contact
          </h3>
          <h1 className="text-3xl sm:text-4xl font-bold text-orange-600 mb-8">
            Drop us a line
          </h1>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* First & Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="text-xs font-semibold text-gray-500 block mb-1">
                  First Name*
                </label>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-orange-500 outline-none"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="text-xs font-semibold text-gray-500 block mb-1">
                  Last Name*
                </label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-orange-500 outline-none"
                />
              </div>
            </div>

            {/* Company Name */}
            <div>
              <label htmlFor="companyName" className="text-xs font-semibold text-gray-500 block mb-1">
                Company Name
              </label>
              <input
                id="companyName"
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-orange-500 outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="text-xs font-semibold text-gray-500 block mb-1">
                Email*
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-orange-500 outline-none"
              />
            </div>

            {/* Contact No */}
            <div>
              <label htmlFor="contactNo" className="text-xs font-semibold text-gray-500 block mb-1">
                Contact No.*
              </label>
              <input
                id="contactNo"
                type="tel"
                name="contactNo"
                value={formData.contactNo}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-orange-500 outline-none"
              />
            </div>

            {/* Inquiry */}
            <div>
              <label htmlFor="inquiry" className="text-xs font-semibold text-gray-500 block mb-1">
                Inquiry*
              </label>
              <textarea
                id="inquiry"
                name="inquiry"
                value={formData.inquiry}
                onChange={handleChange}
                required
                rows="4"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-orange-500 outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-3 rounded-md hover:bg-orange-700 transition-all"
            >
              Submit
            </button>
          </form>
        </div>

        {/* RIGHT: IMAGE + TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center items-center text-center p-8 rounded-md text-white bg-center bg-no-repeat bg-cover min-h-[300px]"
          style={{
            backgroundImage: `url(${cbg})`,
          }}
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-2">We are here to help!</h2>
          <p className="text-sm sm:text-base mb-6 max-w-sm">
            No matter what stage your idea or project is in. Let’s meet to
            discuss and plan the next steps to make it happen in the most
            efficient way.
          </p>
          <button className="bg-orange-600 text-white px-5 py-2 rounded-md hover:bg-orange-700 transition-all">
            Schedule a Call
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactSection;
