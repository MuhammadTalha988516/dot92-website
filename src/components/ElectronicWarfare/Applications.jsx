import React, { useLayoutEffect, useRef } from "react";
import { Plane, Radar, Zap, Code, ShieldCheck, TramFront} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { applicationsData } from "../Data/data";

gsap.registerPlugin(ScrollTrigger);

function getIcon(name) {
  const props = { className: "w-16 h-16 text-orange-800" }; // bigger icons
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
      case "tramFront":
        return <TramFront {...props} />;
    default:
      return null;
  }
}

function Applications() {
  const slidesRef = useRef([]);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    if (!slidesRef.current.length) return;
  
    let ctx = gsap.context(() => {
      gsap.set(slidesRef.current, { transformPerspective: 1000 });
  
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 80%",
        onEnter: () => runAnimation(),
        onLeaveBack: () => runAnimation(true), // agar upar se aaye to bhi chale
      });
  
      function runAnimation(isReverse = false) {
        gsap.fromTo(
          slidesRef.current,
          {
            opacity: 0,
            y: isReverse ? -80 : 80, // upar se aane par opposite direction
            rotateY: 70,
            rotateX: 15,
            scale: 0.8,
          },
          {
            opacity: 1,
            y: 0,
            rotateY: 0,
            rotateX: 0,
            scale: 1,
            duration: 1.2,
            ease: "back.out(1.7)",
            stagger: 0.17,
          }
        );
      }
    }, containerRef);


    
  
    return () => ctx.revert();
  }, []);
  


  return (
    <section
      ref={containerRef}
      className="bg-orange-700 text-white py-20 px-4 md:px-20"
    >
      <h2 className="text-3xl font-bold mb-12 text-center">Applications</h2>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => {
          swiper.slides.forEach((slide, idx) => {
            slide.style.transform = "scale(0.85)";
            slide.style.opacity = "0.5";
          });
          const active = swiper.slides[swiper.activeIndex];
          active.style.transform = "scale(1)";
          active.style.opacity = "1";
        }}
      >
        {applicationsData.map((item, index) => (
  <SwiperSlide key={index}>
    <div
      ref={(el) => (slidesRef.current[index] = el)}
      className="relative bg-white text-orange-600 p-6 pt-16 rounded-xl shadow-lg h-[400px] transition-transform duration-300 hover:-translate-y-3 flex flex-col items-center"
    >
      <div className="bg-yellow-500 rounded-full p-4 shadow-md flex justify-center items-center mb-4">
        {getIcon(item.icon)}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-center">
        {item.title}
      </h3>

      {Array.isArray(item.description) ? (
        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 text-left">
          {item.description.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-gray-600 text-center">
          {item.description}
        </p>
      )}
    </div>
  </SwiperSlide>
))}

      </Swiper>
    </section>
  );
}

export default Applications;
