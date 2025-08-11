import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    contactNo: "",
    inquiry: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can replace this with your own backend API call
    console.log("Form submitted:", formData);

    alert("✅ Your message has been recorded!");

    setFormData({
      firstName: "",
      lastName: "",
      companyName: "",
      email: "",
      contactNo: "",
      inquiry: "",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex flex-col items-center justify-center bg-white py-36 px-4"
    >
      <div className="w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        
        {/* Left: Contact Form */}
        <div>
          <h3 className="text-sm font-medium text-gray-900 uppercase mb-2">
            Contact
          </h3>
          <h1 className="text-4xl font-bold text-orange-600 mb-8">
            Drop us a line
          </h1>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* First & Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-gray-500 block mb-1">
                  First Name*
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 px-4 py-2 rounded-md"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-500 block mb-1">
                  Last Name*
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 px-4 py-2 rounded-md"
                />
              </div>
            </div>

            {/* Company Name */}
            <div>
              <label className="text-xs font-semibold text-gray-500 block mb-1">
                Company Name
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded-md"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-xs font-semibold text-gray-500 block mb-1">
                Email*
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-4 py-2 rounded-md"
              />
            </div>

            {/* Contact No - Required */}
            <div>
              <label className="text-xs font-semibold text-gray-500 block mb-1">
                Contact No.*
              </label>
              <input
                type="text"
                name="contactNo"
                value={formData.contactNo}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-4 py-2 rounded-md"
              />
            </div>

            {/* Inquiry */}
            <div>
              <label className="text-xs font-semibold text-gray-500 block mb-1">
                Inquiry*
              </label>
              <textarea
                name="inquiry"
                value={formData.inquiry}
                onChange={handleChange}
                required
                rows="4"
                className="w-full border border-gray-300 px-4 py-2 rounded-md"
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

        {/* Right: Background image + text */}
        <div
          className="flex flex-col justify-center items-center text-center p-8 rounded-md text-white bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://cdn.pixabay.com/photo/2024/03/19/15/37/call-center-8643475_1280.jpg')",
            backgroundSize: "80% 55%",
          }}
        >
          <h2 className="text-2xl font-bold mb-2">We are here to help!</h2>
          <p className="text-sm mb-6 max-w-sm">
            No matter what stage your idea or project is in. Let’s meet to
            discuss and plan the next steps to make it happen in the most
            efficient way. 👏
          </p>
          <button className="bg-orange-600 text-white px-5 py-2 rounded-md hover:bg-orange-700 text-center items-center transition-all w-fit">
            Schedule a Call
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactSection;
