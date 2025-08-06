import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactSection from "../contact us/ContactSection";
import OurOffices from "../contact us/OurOffice";
import Navbar from "../home/Navbar";
import Footer from "../home/Footer";
import LoadingScreen from "../contact us/LoadingScreen";

const Contact = () => {
const [loading, setLoading] = useState(true);

useEffect(() => {
const timer = setTimeout(() => setLoading(false), 3000);
return () => clearTimeout(timer);
}, []);

return (
<AnimatePresence mode="wait">
{loading ? (
<LoadingScreen key="loading" />
) : (
<motion.div
key="contact"
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 0.6 }}
>
<Navbar />
<ContactSection />
<OurOffices />
<Footer />
</motion.div>
)}
</AnimatePresence>
);
};

export default Contact;