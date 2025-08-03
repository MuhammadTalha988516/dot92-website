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
    const ctx = gsap.context(() => {
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

    return () => ctx.revert(); // Clean up on unmount
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
