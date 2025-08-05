import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { motion } from "framer-motion";

const LoadingScreen = () => {
return (
<motion.div
initial={{ opacity: 1 }}
animate={{ opacity: 1 }}
exit={{ opacity: 0 }}
transition={{ duration: 1 }}
className="fixed inset-0 flex items-center justify-center bg-black z-50 text-white"
>
<div className="max-w-2xl text-center px-6">
<div className="text-4xl mb-4">
<FaQuoteLeft className="inline mr-2 text-gray-400" />
“Design is not just what it looks like and feels like. Design is how it works.”
<FaQuoteRight className="inline ml-2 text-gray-400" />
</div>
<p className="text-lg text-gray-300 mt-4">– Steve Jobs</p>
</div>
</motion.div>
);
};

export default LoadingScreen;