import React, { useEffect, useRef } from "react";
import image from "../../assets/pexels-photographybynobody-10717015.webp";

export default function AboutCompany() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !imageRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrollAmount = -rect.top;
      const maxScroll = sectionRef.current.offsetHeight;
      const clampedScroll = Math.min(Math.max(scrollAmount, 0), maxScroll);
      const parallaxOffset = clampedScroll * 0.5; // softer effect

      imageRef.current.style.transform = `translateY(${parallaxOffset}px)`;
    };

    const handleScrollSmooth = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", handleScrollSmooth, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollSmooth);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-start py-20 overflow-hidden"
    >
      {/* Parallax Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          ref={imageRef}
          src={image}
          className="w-full h-full object-cover will-change-transform"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-4 sm:ml-12 md:ml-32 text-left">
        <h4 className="text-white text-2xl sm:text-4xl font-semibold mb-2">
          Who We Are
        </h4>
        <h1 className="text-orange-500 text-4xl sm:text-6xl font-bold mb-6">
          About Our Company
        </h1>
        <p className="text-white text-lg sm:text-2xl mb-10 leading-relaxed">
          Dot92 was established in 2021 and is proudly registered in Islamabad,
          Pakistan. Our proud partnership with ChengDu Jiaci helps our vision
          to grow and reach new frontiers.
        </p>
        <p className="text-orange-500 text-xl sm:text-3xl mb-10 font-bold">
          Government, commercial, and research organizations are partnering
          with DOT92 to tackle their toughest challenges — and you can too.
        </p>
      </div>
    </section>
  );
}
