import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Drone from "../../assets/drone.jpg";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function AboutUs() {
  const imageRef = useRef(null);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    // Ensure refs are available
    if (!containerRef.current || !imageRef.current) {
      return;
    }

    let ctx;
    let isActive = true;

    const setupAnimation = () => {
      if (!isActive) return;

      ctx = gsap.context(() => {
        gsap.from(imageRef.current, {
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%", // when image hits 80% from top of viewport
            toggleActions: "restart none none none", // or "play reverse play reverse" if needed
          },
          x: 200,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
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
          console.warn("AboutUs cleanup failed:", error);
        }
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="grid grid-cols-2 mt-32 px-10 gap-6 items-center">
      {/* Text Section */}
      <div className="text-3xl leading-relaxed text-gray-800">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad vitae
          excepturi, vel omnis ullam culpa velit, laboriosam necessitatibus hic
          minus repellat modi, temporibus odio exercitationem repellendus
          labore! Quibusdam, laborum perferendis!
        </p>
      </div>

      {/* Image Section */}
      <div ref={imageRef}>
        <img
          src={Drone}
          alt="drone"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}

export default AboutUs;
