import React from 'react';
import bgImage from '../../assets/logo1.jpg';
import gridImage from '../../assets/logo2.png';

function ContactBanner() {
    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center bg-black">
            {/* Background Section */}
            <div
                className="w-full h-screen flex items-center justify-center relative"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <h1 className="text-white text-5xl font-bold text-center">Contact Us</h1>
                </div>
            </div>

            {/* Grid Section */}
            <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 my-12 px-4 items-center">
                {/* Left: Text */}
                <div>
                    <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
                    <p className="text-lg text-gray-700">
                        We would love to hear from you! Whether you have a question about features, pricing, or anything else, our team is ready to answer all your questions.
                    </p>
                </div>
                {/* Right: Image */}
                <div className="flex justify-center">
                    <img src={gridImage} alt="Contact" className="rounded-lg shadow-lg max-h-80 object-contain" />
                </div>
            </div>

            {/* Animated Textarea Section */}
            <div className="w-full flex justify-center mb-12">
                <textarea
                    className="w-full max-w-2xl h-32 p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-all duration-300 shadow-md resize-none animate-pulse"
                    placeholder="Type your message here..."
                />
            </div>
        </div>
    );
}

export default ContactBanner;