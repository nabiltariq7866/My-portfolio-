import React from "react";
import image from "../assets/nabil3.jpg";
import Heading from "../components/Heading";
import Cards from "./Cards";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const WorkExperience = ({ rowReverse, heading, subHeading }) => {
  const divRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: divRef.current,
        scroller: "body",
        start: "top 100%",
        toggleActions: "play none none reverse",
      },
    });
    timeline.fromTo(
      divRef.current,
      { x: rowReverse ? "200px" : "-200px", opacity: 0 },
      { x: "0px", opacity: 1, duration: 1, ease: "power3.out" }
    );
  }, []);
  return (
    <div
      className={`max-w-[1350px] flex flex-col lg:flex-row items-center ${
        rowReverse ? "lg:flex-row-reverse" : ""
      }  justify-between mx:px-4   mx-auto`}
    >
      <div ref={divRef} className="px-3 w-full lg:w-1/2">
        <img src={image} alt="our image" className="rounded-2xl " />
      </div>
      <div
        className={`px-3 w-full lg:w-1/2 mt-16 lg:mt-40 lg:mb-12 ${
          rowReverse ? "lg:pr-24" : "lg:pl-24"
        } pb-20  flex flex-col items-start`}
      >
        <Heading subHeading={subHeading} heading={heading} />
        <p className="text-[#4d4d5c] mt-4 text-xl font-OpenSans leading-7">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium dolore.
        </p>
        <div className="pt-6">
          <Cards rowReverse={rowReverse} />
          <Cards rowReverse={rowReverse} />
          <Cards rowReverse={rowReverse} />
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
