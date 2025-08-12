import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Drone from "../../assets/drone.webp";

gsap.registerPlugin(ScrollTrigger);

function AboutUs() {
  const imageRef = useRef(null);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    if (!containerRef.current || !imageRef.current) return;

    let ctx;
    let isActive = true;

    const setupAnimation = () => {
      if (!isActive) return;

      ctx = gsap.context(() => {
        gsap.from(imageRef.current, {
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
            toggleActions: "restart none none none",
          },
          x: 200,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
        });
      }, containerRef);
    };

    const timer = setTimeout(setupAnimation, 0);

    return () => {
      isActive = false;
      clearTimeout(timer);
      if (ctx && typeof ctx.revert === "function") {
        try {
          ctx.revert();
        } catch (error) {
          console.warn("AboutUs cleanup failed:", error);
        }
      }
    };
  }, []);

  return (
    <section className="relative z-10 w-full py-16 pt-24 px-4 bg-white" ref={containerRef}>
      <div className="max-w-[1440px] mx-auto">

        {/* ===== DESKTOP VERSION ===== */}
        <div className="hidden md:flex items-start gap-20">
          {/* TEXT */}
          <div className="flex-1 ml-20">
            <h3 className="text-black text-4xl font-semibold mb-4 border-t-2 border-orange-600 pt-4 w-max">
             DOT92
            </h3>
            <p className="text-gray-700 mb-4 text-2xl max-w-lg">
               Dot92 is a specialized company providing advanced RF and microwave solutions. Our core business focuses on electronic countermeasures and intelligent unmanned systems. We proudly serve both public and private sector clients, offering customized EW technologies that enhance situational awareness and threat detection

            </p>
          </div>

          {/* IMAGE */}
          <div className="flex-1 mr-20" ref={imageRef}>
            <img
              src={Drone}
              alt="drone"
              className="w-full h-[400px] rounded-md shadow-lg"
            />
          </div>
        </div>

        {/* ===== MOBILE VERSION ===== */}
        <div className="block md:hidden">
          {/* TEXT FIRST */}
          <div className="flex flex-col gap-6 mb-16">
            <h3 className="text-black text-3xl font-semibold mb-4 border-t-2 border-orange-600 pt-4 w-max">
              About Us
            </h3>
            <p className="text-gray-700 mb-4 text-lg max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad vitae
              excepturi, vel omnis ullam culpa velit, laboriosam necessitatibus
              hic minus repellat modi, temporibus odio exercitationem repellendus
              labore! Quibusdam, laborum perferendis!
            </p>
            <img
              src={Drone}
              alt="drone"
              className="w-full h-auto rounded-md shadow-lg"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutUs;
