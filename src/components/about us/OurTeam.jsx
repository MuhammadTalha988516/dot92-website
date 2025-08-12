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
  const textRef = useRef(null);
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    if (!sectionRef.current || !chartWrapperRef.current || !textRef.current) {
      return;
    }

    let ctx;
    const mm = gsap.matchMedia();

    mm.add(
      {
        isSmall: "(max-width: 768px)",
        isLarge: "(min-width: 769px)",
      },
      (context) => {
        const { isSmall, isLarge } = context.conditions;
        ctx = gsap.context(() => {
          const tl = gsap.timeline();

          if (isSmall) {
            // Mobile animation: chart stops higher, text below
            ScrollTrigger.create({
              trigger: sectionRef.current,
              start: "top top",
              end: "+=500",
              scrub: true,
              pin: true,
              animation: tl,
            });

            tl.fromTo(
              chartWrapperRef.current,
              { opacity: 0, y: -100 },
              { opacity: 1, y: -80, duration: 1 }
            );

            tl.fromTo(
              textRef.current,
              { opacity: 0, y: 80 },
              { opacity: 1, y: 0, duration: 1 },
              "+=0.3"
            );
          }

          if (isLarge) {
            // Desktop animation unchanged
            ScrollTrigger.create({
              trigger: sectionRef.current,
              start: "top top",
              end: "+=700",
              scrub: true,
              pin: true,
              animation: tl,
            });

            tl.to(chartWrapperRef.current, { x: "-20vw", duration: 1 });
            tl.fromTo(
              textRef.current,
              { opacity: 0, x: 100 },
              { opacity: 1, x: 0, duration: 1 },
              "-=0.5"
            );
          }
        }, sectionRef);
      }
    );

    return () => {
      mm.revert();
      ctx?.revert();
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
      className="w-full h-[190vh] md:h-[90vh] px-6 py-20 bg-gray-400 overflow-hidden flex items-center justify-center"
    >
      <div className="relative w-full max-w-6xl h-auto flex flex-col md:flex-row items-center md:justify-center gap-8">
        
        {/* Chart Block */}
        <div
          ref={chartWrapperRef}
          className="flex flex-col items-center justify-center text-center mb-8 md:mb-0 
                     w-full md:w-auto md:absolute md:left-1/2 md:-translate-x-1/2"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Team<span className="text-orange-500">.</span>
          </h2>
          <div className="w-[280px] sm:w-[320px] md:w-[400px]">
            <Pie data={pieData} />
          </div>
        </div>

        {/* Text Block */}
        <div
          ref={textRef}
          className="w-full md:w-1/2 opacity-0 md:ml-auto md:pl-8 text-center md:text-left"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 font-mono">
            Domain Experts<span className="text-orange-500">.</span>
          </h2>
          <p className="text-black mb-4">
          At Dot92, our core strength lies in strategic collaboration. While our advanced RF and microwave technologies are developed in partnership with ChengDu Jiaci in China, our Pakistan-based team manages operations, client relations, and project execution. With junior, mid, and senior-level managers leading different functions, we ensure every project is handled with professionalism, precision, and efficiency.
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default OurTeam;