import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { partnerLogos } from "../Data/data";

function Partners() {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const logos = wrapper.querySelectorAll(".logo");
    const gap = 80; // space between logos
    const speed = 100; // px per second

    let totalX = 0;

    logos.forEach((logo, index) => {
      const logoWidth = logo.offsetWidth;
      const startX = wrapper.offsetWidth + totalX;
      const distance = startX + logoWidth;
      const duration = distance / speed;

      // Initial placement
      logo.style.left = `${startX}px`;

      // Animate
      gsap.fromTo(
        logo,
        { x: 0 },
        {
          x: -distance,
          duration,
          ease: "none",
          repeat: -1,
        }
      );

      totalX += logoWidth + gap;
    });
  }, []);

  return (
    <div className="py-16 bg-white overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Our Partners
      </h2>

      <div className="relative overflow-hidden w-full">
        <div ref={wrapperRef} className="relative w-full h-24">
          {partnerLogos.map((logo, idx) => (
            <img
              key={idx}
              src={logo}
              alt={`partner-logo-${idx}`}
              className="logo absolute h-20 w-auto object-contain top-1/2 -translate-y-1/2"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Partners;
