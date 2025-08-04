import React, { useEffect, useRef } from "react";
import image from "../../assets/pexels-photographybynobody-10717015.jpg"

const stats = [
  { value: "1980", label: "Year of Establishment" },
  { value: "50+", label: "Projects Completed" },
  { value: "100+", label: "Professional Employees" },
  { value: "20+", label: "Business Partners" },
];

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
      <div className="relative z-10 max-w-2xl ml-32">
        <h4 className="text-white text-2xl font-semibold mb-2">Who We Are</h4>
        <h1 className="text-orange-500 text-5xl font-bold mb-6">
          About Our Company
        </h1>
        <p className="text-white text-lg mb-10 leading-relaxed">
          Since our inception in 1982, we have been at the forefront of
          electronic warfare solutions, supporting critical defense operations
          and national security initiatives. Our dedicated team of engineers,
          analysts, and industry veterans bring decades of experience and
          passion for innovation.
        </p>
        {/* Stats */}
        <div className="flex gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-white text-5xl font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-white text-lg mb-2">{stat.label}</div>
              <div className="w-12 mx-auto border-b border-white opacity-50"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
