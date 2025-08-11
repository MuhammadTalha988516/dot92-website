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
    if (!sectionRef.current || !titleRef.current || !textRef.current) return;

    let ctx;
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

    return () => ctx?.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[500px] sm:min-h-[650px] lg:min-h-[800px] w-full flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${aboutBannerData.backgroundImage})`,
      }}
    >
      <div className="absolute inset-0  bg-opacity-60 z-0"></div>
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-12">
        <h1
          ref={titleRef}
          className="text-white text-3xl sm:text-4xl lg:text-6xl font-extrabold mb-4"
        >
          {aboutBannerData.title}
        </h1>
        <p
          ref={textRef}
          className="text-gray-200 text-base sm:text-lg lg:text-xl max-w-xl sm:max-w-2xl mx-auto"
        >
          {aboutBannerData.description}
        </p>
      </div>
    </section>
  );
};

export default AboutBanner;
