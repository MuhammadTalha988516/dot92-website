import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { aboutBannerData } from '../Data/data'; 

gsap.registerPlugin(ScrollTrigger);

const AboutBanner = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    // Ensure refs are available
    if (!sectionRef.current || !titleRef.current || !textRef.current) {
      return;
    }

    let ctx;
    let isActive = true;

    const setupAnimation = () => {
      if (!isActive) return;

      ctx = gsap.context(() => {
        gsap.from(titleRef.current, {
          opacity: 0,
          y: 60,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        });

        gsap.from(textRef.current, {
          opacity: 0,
          y: 40,
          duration: 1,
          delay: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        });
      }, sectionRef);
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(setupAnimation, 0);

    return () => {
      isActive = false;
      clearTimeout(timer);

      // Safely revert the GSAP context
      if (ctx && typeof ctx.revert === 'function') {
        try {
          ctx.revert();
        } catch (error) {
          console.warn("AboutBanner cleanup failed:", error);
        }
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${aboutBannerData.backgroundImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0  bg-opacity-60 z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1
          ref={titleRef}
          className="text-white text-4xl md:text-6xl font-extrabold mb-4"
        >
          {aboutBannerData.title}
        </h1>
        <p
          ref={textRef}
          className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto"
        >
          {aboutBannerData.description}
        </p>
      </div>
    </section>
  );
};

export default AboutBanner;
