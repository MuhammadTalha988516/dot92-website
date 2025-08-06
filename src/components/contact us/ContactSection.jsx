import React from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactSection = () => {
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
          <h3 className="text-sm font-medium text-gray-500 uppercase mb-2">
            Contact
          </h3>
          <h1 className="text-4xl font-bold text-black mb-8">
            Drop us a line
          </h1>

          <form className="space-y-6">
            <div>
              <label className="text-xs font-semibold text-gray-500 block mb-1">
                How can we help?
              </label>
              <textarea className="w-full border border-gray-300 px-4 py-2 rounded-md" rows="4" />
            </div>

            <div>
              <label className="text-xs font-semibold text-gray-500 block mb-1">
                Your Name
              </label>
              <input type="text" className="w-full border border-gray-300 px-4 py-2 rounded-md" />
            </div>

            <div>
              <label className="text-xs font-semibold text-gray-500 block mb-1">
                Your Company Email
              </label>
              <input type="email" className="w-full border border-gray-300 px-4 py-2 rounded-md" />
            </div>

            <div>
              <label className="text-xs font-semibold text-gray-500 block mb-1">
                How did you hear about us?
              </label>
              <input type="text" className="w-full border border-gray-300 px-4 py-2 rounded-md" />
            </div>

            <button className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-all">
              Request Free Estimate
            </button>
          </form>
        </div>

        {/* Right: Info + Logos + Testimonial */}
        <div className="space-y-10">
          {/* Avatar Images */}
          <div className="flex items-center gap-4">
            <img
              src="https://i.pravatar.cc/60?img=2"
              alt="Person 1"
              className="w-10 h-10 rounded-full"
            />
            <img
              src="https://i.pravatar.cc/60?img=3"
              alt="Person 2"
              className="w-10 h-10 rounded-full"
            />
          </div>

          {/* Text + CTA */}
          <div>
            <h2 className="text-lg font-semibold text-black mb-2">
              We are here to help!
            </h2>
            <p className="text-sm text-gray-500 max-w-md">
              No matter what stage your idea or project is in. Let’s meet to
              discuss and plan the next steps to make it happen in the most efficient way. 👏
            </p>
            <button className="mt-4 bg-black text-white px-5 py-2 rounded-md hover:bg-gray-800 transition-all">
              Schedule a Call
            </button>
          </div>

          {/* Logos */}
          <div className="grid grid-cols-3 gap-4 grayscale">
            {["APOLLO", "Jägermeister", "Explorers", "Huddly", "ClickTime", "Wiliot"].map((logo, idx) => (
              <span key={idx} className="text-sm font-semibold text-black">
                {logo}
              </span>
            ))}
          </div>

          {/* Testimonial */}
          <div className="mt-4">
            <div className="flex items-center gap-1 text-gray-500 text-sm mb-1">
              <span>Clutch</span>
              <span>5.0</span>
              <div className="flex text-red-500">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} size={14} />
                ))}
              </div>
            </div>
            <p className="text-lg italic text-black max-w-xl">
              "The most impressive thing about them was their blend of creative
              and technical abilities."
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Jordan Williams — <br />CEO & Co-Founder 
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactSection;
