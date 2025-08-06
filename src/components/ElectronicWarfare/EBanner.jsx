import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { bannerData } from "../Data/data";

function EBanner() {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      {
        opacity: 0,
        y: 100,
        rotateX: 90,
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 1.2,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      paragraphRef.current,
      {
        opacity: 0,
        y: 100,
        rotateX: 90,
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 1.4,
        delay: 0.3,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div className="relative">
      {/* Background Image from data */}
      <div
        className="h-[500px] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerData.image})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0  bg-opacity-50 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 ref={headingRef} className="text-4xl md:text-6xl font-bold mb-4">
            {bannerData.heading}
          </h1>
          <p ref={paragraphRef} className="max-w-2xl text-lg">
            {bannerData.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default EBanner;
