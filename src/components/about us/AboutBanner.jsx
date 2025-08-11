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
          start: 'top 100%',
        },
      });

      gsap.from(textRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 100%',
        },
      });
    }, sectionRef);

    return () => ctx?.revert();
  }, []);

  return (
<section
  ref={sectionRef}
  className="relative min-h-[500px] sm:min-h-[650px] lg:min-h-[800px] w-full flex items-center justify-center bg-no-repeat bg-cover"
  style={{
    backgroundImage: `url(${aboutBannerData.backgroundImage})`,
    backgroundPosition: "center",
    backgroundSize: "100%", // zoom in so only 1 drone fits
  }}
>



      <div className="absolute inset-0  bg-opacity-60 z-0"></div>
      <div className=" flex flex-col items-center justify-center text-center text-white px-4">
        <h1
          ref={titleRef}
          className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-10"
        >
          {aboutBannerData.title}
        </h1>
        <p
          ref={textRef}
          className="text-gray-200 text-lg sm:text-xl lg:text-2xl max-w-4xl sm:max-w-5xl mx-auto"
        >
          {aboutBannerData.description}
        </p>
      </div>
    </section>
  );
};

export default AboutBanner;
