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
    if (!sectionRef.current || !chartWrapperRef.current || !textRef.current) return;

    let ctx;
    ctx = gsap.context(() => {
      const tl = gsap.timeline();

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=700",
        scrub: true,
        pin: true,
        anticipatePin: 1,
        animation: tl,
      });

      tl.to(chartWrapperRef.current, { x: "-10vw", duration: 1 });
      tl.fromTo(
        textRef.current,
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, duration: 1 },
        "-=0.5"
      );
    }, sectionRef);

    return () => ctx?.revert();
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
      className="w-full h-auto md:h-[130vh] px-4 sm:px-6 py-12 sm:py-20 bg-gray-400 overflow-hidden flex items-center justify-center"
    >
      <div className="relative w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-8">
        
        {/* Chart Block */}
        <div
          ref={chartWrapperRef}
          className="flex flex-col items-center justify-center text-center w-full md:w-1/2"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Our Team<span className="text-orange-500">.</span>
          </h2>
          <div className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px]">
            <Pie data={pieData} />
          </div>
        </div>

        {/* Text Block */}
        <div
          ref={textRef}
          className="w-full md:w-1/2 opacity-0 text-left"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-mono">
            Domain Experts<span className="text-orange-500">.</span>
          </h2>
          <p className="text-black mb-4 text-sm sm:text-base lg:text-lg">
            At Dot92, our core strength lies in strategic collaboration. While our advanced RF and microwave technologies are developed in partnership with ChengDu Jiaci in China, our Pakistan-based team manages operations, client relations, and project execution. With junior, mid, and senior-level managers leading different functions, we ensure every project is handled with professionalism, precision, and efficiency.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
