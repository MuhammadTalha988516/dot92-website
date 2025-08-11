import React, { useEffect, useRef } from "react";
import image from "../../assets/pexels-photographybynobody-10717015.webp"



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

      // 👉 Stronger parallax effect
      const parallaxOffset = clampedScroll * 0.8;

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
      className="relative w-full h-[1400px] flex items-center justify-start mt-20 overflow-hidden"
    >
      {/* Parallax Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          ref={imageRef}
          src={image}
          className="w-full h-[120%] object-cover will-change-transform"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0  bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl ml-32">
        <h4 className="text-white text-4xl font-semibold mb-2">Who We Are</h4>
        <h1 className="text-orange-500 text-6xl font-bold mb-6">
          About Our Company
        </h1>
        <p className="text-white text-2xl mb-10 max-w-5xl leading-relaxed">
          Dot92 was established in 2021 and is proudly registered in Islamabad, Pakistan. Our proud partnership with ChengDu Jiaci helps our vision to grow and reach new frontiers. At Dot92, we believe innovation is not just about advanced technology but about solving real-world challenges with precision, purpose, and trust. We work closely with military, government, and private sector clients to create solutions that are tailored, reliable, and built to perform where it matters most.
        <br />
        <br />
        Government, commercial, and research organizations are partnering with DOT92 to tackle their toughest challenges — and you can too
        </p>
          
        </div>
      
    </section>
  );
}
