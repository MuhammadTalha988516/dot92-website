import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { bannerData } from "../Data/data";

export default function EBanner() {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 100, rotateX: 90 },
      { opacity: 1, y: 0, rotateX: 0, duration: 1.2, ease: "power3.out" }
    );

    gsap.fromTo(
      paragraphRef.current,
      { opacity: 0, y: 100, rotateX: 90 },
      { opacity: 1, y: 0, rotateX: 0, duration: 1.4, delay: 0.3, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="relative">
      {/* Banner background only for upper portion */}
      <div
        className="h-[100vh] w-full bg-cover bg-no-repeat relative"
        style={{
          backgroundImage: `url(${bannerData.image})`,
          backgroundPosition: "center top", // Keeps crop from top
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-4">
          <h1
            ref={headingRef}
            className="text-2xl md:text-7xl font-bold mb-4 drop-shadow-lg"
          >
            {bannerData.heading}
          </h1>
          <p
            ref={paragraphRef}
            className="max-w-3xl text-base md:text-lg text-gray-200 drop-shadow-md"
          >
            {bannerData.paragraph}
          </p>
        </div>
      </div>
    </div>
  );
}
