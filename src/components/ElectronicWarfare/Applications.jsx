import React, { useLayoutEffect, useRef } from "react";
import {
  Plane,
  Radar,
  Zap,
  Code,
  ShieldCheck,
} from "lucide-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { applicationsData } from "../Data/data";

gsap.registerPlugin(ScrollTrigger);

function getIcon(name) {
  const props = { className: "w-12 h-12 text-orange-800" };

  switch (name) {
    case "plane":
      return <Plane {...props} />;
    case "radar":
      return <Radar {...props} />;
    case "zap":
      return <Zap {...props} />;
    case "code":
      return <Code {...props} />;
    case "shieldCheck":
      return <ShieldCheck {...props} />;
    default:
      return null;
  }
}

function OurApplications() {
  const cardsRef = useRef([]);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    // Ensure refs are available
    if (!containerRef.current || cardsRef.current.length === 0) {
      return;
    }

    let ctx;
    let isActive = true;

    const setupAnimation = () => {
      if (!isActive) return;

      ctx = gsap.context(() => {
        cardsRef.current.forEach((card, index) => {
          if (card) {
            gsap.fromTo(
              card,
              {
                opacity: 0,
                y: 50,
              },
              {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: card,
                  start: "top 80%", // animate when top of card hits 80% of viewport
                  toggleActions: "play none none none",
                },
              }
            );
          }
        });
      }, containerRef);
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
          console.warn("Applications cleanup failed:", error);
        }
      }
    };
  }, []);

  return (
    <section ref={containerRef} className="bg-orange-700 text-white py-20 px-4 md:px-20">
      <h2 className="text-3xl font-bold mb-12 text-center">Applications</h2>
      <div className="grid gap-10 md:grid-cols-3">
        {applicationsData.map((item, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="relative bg-white text-orange-600 p-6 pt-12 rounded-xl shadow-lg h-[300px] transition-transform hover:scale-110"
          >
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-yellow-500 rounded-full p-2 shadow-md flex justify-center items-center">
              {getIcon(item.icon)}
            </div>
            <h3 className="text-xl font-semibold mb-2 mt-4 text-center">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurApplications;
