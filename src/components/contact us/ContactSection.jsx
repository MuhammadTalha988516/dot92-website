import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import cbg from "../../assets/cbg.webp";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const formRef = useRef();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    company_name: "",
    email: "",
    contact_no: "",
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

    // Allow only specific email domains
    const emailRegex =
      /^[^\s@]+@(gmail\.com|outlook\.com|yahoo\.com|hotmail\.com|icloud\.com|aol\.com)$/i;
    if (!emailRegex.test(formData.email)) {
      alert("❌ Please use a valid email");
      return;
    }

    // 1️⃣ Send main email to you
    emailjs
      .sendForm(
        "service_mezyizo", // Service ID
        "template_q1hrvee", // Template ID (main)
        formRef.current,
        "Mo1dXuucliG2K50ka" // Public key
      )
      .then(() => {
        // 2️⃣ Send auto-reply to user
        emailjs.sendForm(
          "service_mezyizo", // Same service
          "template_8rgjx1c", // Your auto-reply template ID
          formRef.current,
          "Mo1dXuucliG2K50ka"
        );

        alert("✅ Message sent successfully!");
        setFormData({
          first_name: "",
          last_name: "",
          company_name: "",
          email: "",
          contact_no: "",
          inquiry: "",
        });
      })
      .catch((error) => {
        alert(`❌ Failed to send: ${error.text}`);
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex flex-col items-center justify-center bg-white py-36 px-4 mt-10"
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

          <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
            {/* First & Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-gray-500 block mb-1">
                  First Name*
                </label>
                <input
                  type="text"
                  name="first_name"
                  value={formData.first_name}
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
                  name="last_name"
                  value={formData.last_name}
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
                name="company_name"
                value={formData.company_name}
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

            {/* Contact No */}
            <div>
              <label className="text-xs font-semibold text-gray-500 block mb-1">
                Contact No.
              </label>
              <input
                type="text"
                name="contact_no"
                value={formData.contact_no}
                onChange={handleChange}
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
          className="flex flex-col justify-center items-center text-center p-8 rounded-md text-white bg-center bg-cover min-h-[600px]"
          style={{
            backgroundImage: `url(${cbg})`,
          }}
        >
          <h2 className="text-2xl font-bold mb-2">We are here to help!</h2>
          <p className="text-sm mb-6 max-w-sm">
            No matter what stage your idea or project is in. Let’s meet to
            discuss and plan the next steps to make it happen in the most
            efficient way.
          </p>
          <button className="bg-orange-600 text-white px-5 py-2 rounded-md hover:bg-orange-700 transition-all w-fit">
            Schedule a Call
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactSection;
