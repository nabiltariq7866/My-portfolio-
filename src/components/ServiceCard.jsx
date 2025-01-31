import React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const ServiceCard = ({ title, description, icon }) => {
  const divRef = useRef(null);
  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: divRef.current,
        start: "top 80%",
        end: "top 30%",
        toggleActions: "play none none reverse",
      },
    });
    timeline.fromTo(
      divRef.current,
      { y: "200px", opacity: 0 },
      { y: "0px", opacity: 1, duration: 1, ease: "power3.out" }
    );
  }, []);
  return (
    <div ref={divRef} className="p-3 flex-shrink-0 flex-grow-0 basis-full md:basis-1/2">
      <div className="bg-white px-5 pt-11 pb-7 lg:px-[50px] lg:pt-[65px] lg:pb-[55px] rounded-xl">
        <div className="flex flex-col lg:flex-row">
          <div className="px-3 mb-7 lg:basis-1/4 ml-2 lg:mb-0 lg:ml-0 flex-shrink-0 flex-grow-0 basis-1/3 max-w-[34%]">
            <img src={icon} alt="Services" className="" />
          </div>
          <div className="px-3 ml-2">
            <h1 className="text-[#2e2e37] text-2xl md:text-3xl flex-shrink-0 font-jost font-medium hover:text-[#80DB66] transition duration-200 cursor-pointer">
              {title}
            </h1>
            <p className="text-[#4d4d5c] mt-4 text-[17px] md:text-[19px] font-OpenSans leading-7">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
