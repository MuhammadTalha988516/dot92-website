import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);
gsap.registerPlugin(ScrollTrigger);

const OurTeam = () => {
  const chartWrapperRef = useRef(null);
  const chartRef = useRef(null);
  const textRef = useRef(null);
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    // Ensure refs are available
    if (!sectionRef.current || !chartWrapperRef.current || !textRef.current) {
      return;
    }

    let triggerInstance;
    let ctx;
    let isActive = true;

    const setupAnimation = () => {
      if (!isActive) return;

      ctx = gsap.context(() => {
        const tl = gsap.timeline();

        triggerInstance = ScrollTrigger.create({
          id: "our-team-trigger",
          trigger: sectionRef.current,
          start: "top top",
          end: "+=700",
          scrub: true,
          pin: true,
          anticipatePin: 1,
          animation: tl,
          onRefresh: () => {
            // Ensure the trigger is still valid
            if (!isActive || !sectionRef.current) {
              triggerInstance?.kill();
            }
          }
        });

        tl.to(chartWrapperRef.current, { x: "-20vw", duration: 1 });

        tl.fromTo(
          textRef.current,
          { opacity: 0, x: 100 },
          { opacity: 1, x: 0, duration: 1 },
          "-=0.5"
        );
      }, sectionRef);
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(setupAnimation, 0);

    return () => {
      isActive = false;
      clearTimeout(timer);

      // Kill trigger first
      if (triggerInstance && !triggerInstance._killed) {
        try {
          triggerInstance.kill();
        } catch (error) {
          console.warn("Failed to kill trigger:", error);
        }
      }

      // Then revert context
      if (ctx && typeof ctx.revert === 'function') {
        try {
          ctx.revert();
        } catch (error) {
          console.warn("Failed to revert context:", error);
        }
      }
    };
  }, []);
  

  const pieData = {
    labels: ["Entry Level", "Mid Level", "Senior Level"],
    datasets: [
      {
        data: [21.4, 42.9, 35.7],
        backgroundColor: ["#666", "#f4b183", "#f8cbad"],
        borderWidth: 0,
      },
    ],
  };

  return (
    <section
      ref={sectionRef}
      className="w-full h-[130vh] px-6 py-20 bg-gray-400 overflow-hidden flex items-center justify-center"
    >
      <div className="relative w-full max-w-6xl h-[500px] flex items-center justify-center">
        {/* Chart Block */}
        <div
          ref={chartWrapperRef}
          className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center justify-center text-center"
        >
          <h2 className="text-5xl font-bold mb-6">
            Our Team<span className="text-orange-500">.</span>
          </h2>
          <div ref={chartRef} className="w-[300px] sm:w-[350px] md:w-[400px]">
            <Pie data={pieData} />
          </div>
        </div>

        {/* Text Block */}
        <div
          ref={textRef}
          className="w-full md:w-1/2 opacity-0 ml-auto pl-8"
        >
          <h2 className="text-3xl font-bold mb-4 font-mono">
            Domain Experts<span className="text-orange-500">.</span>
          </h2>
          <p className="text-black mb-4">
          At Dot92, our core strength lies in strategic collaboration. While our advanced RF and microwave technologies are developed in partnership with ChengDu Jiaci in China, our Pakistan-based team manages operations, client relations, and project execution. With junior, mid, and senior-level managers leading different functions, we ensure every project is handled with professionalism, precision, and efficiency.          </p>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
