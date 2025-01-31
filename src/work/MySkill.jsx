import React from "react";
import Heading from "../components/Heading";
import "react-circular-progressbar/dist/styles.css";
import CircularProgresBar from "./CircularProgresBar";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const MySkill = () => {
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
       { y: "200px", opacity: 0 },
       { y: "0px", opacity: 1, duration: 1.5, ease: "power3.out" }
     );
   }, []);
  return (
    <div className="max-w-[1350px]    px-4 flex mx-auto flex-col  md:flex-row">
      <div className="w-full md:w-[41%] flex flex-col items-start  mt-9 ">
        <Heading TLeft={true} subHeading={"My Skill"} heading={"Growing Over Times"} />
        <p className="text-[#4d4d5c] mt-4 text-xl font-OpenSans leading-7">
          Sed ut perspiciatis unde omnis iste natus Sed ut perspiciatis unde
          omnis iste natus kobita tumi sopno charini hoye khbor nio na sit
          voluptatem accusantium dolore
        </p>
      </div>
      <div ref={divRef} className=" w-full md:w-[50%] lg:pl-8 mt-7 flex flex-wrap gap-5 items-center justify-center md:justify-end">
        <CircularProgresBar />
        <CircularProgresBar />
        <CircularProgresBar />
        <CircularProgresBar />
        <CircularProgresBar />
        <CircularProgresBar />
      </div>
    </div>
  );
};

export default MySkill;
