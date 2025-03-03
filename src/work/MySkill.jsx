import React, { useEffect, useRef } from "react";
import Heading from "../components/Heading";
import "react-circular-progressbar/dist/styles.css";
import CircularProgresBar from "./CircularProgresBar";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const skills = [
  { percentage: 86, category: "HTML" },
  { percentage: 90, category: "JavaScript" },
  { percentage: 85, category: "React.js" },
  { percentage: 80, category: "TypeScript" },
  { percentage: 75, category: "Tailwind CSS" },
  { percentage: 70, category: "MUI" },
];

const MySkill = () => {
  const divRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: divRef.current,
        scroller: "body",
        start: "top 80%", // Adjusted for better visibility
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
    <div className="max-w-[1350px] px-4 mx-auto flex flex-col md:flex-row py-12">
      {/* Left Section (Text) */}
      <div className="w-full md:w-[41%] flex flex-col items-start mt-9">
        <Heading
          TLeft={true}
          subHeading={"My Skill"}
          heading={"Growing Over Times"}
        />
        <p className="text-[#4d4d5c] mt-4 text-lg md:text-xl font-OpenSans leading-7">
          I am passionate about continuous learning, constantly evolving in the
          ever-changing tech landscape. From mastering JavaScript and React.js
          to exploring TypeScript, Redux, and MUI, my journey reflects
          consistent growth. Each project has deepened my expertise, enhanced
          problem-solving, and strengthened my commitment to delivering
          high-quality solutions.
        </p>
      </div>

      {/* Right Section (Circular Progress Bars) */}
      <div
        ref={divRef}
        className="w-full md:w-[50%] lg:pl-8 mt-7 flex flex-wrap gap-5 items-center justify-center md:justify-end"
      >
        {skills.map((skill, index) => (
          <CircularProgresBar
            key={index}
            percentage={skill.percentage}
            category={skill.category}
          />
        ))}
      </div>
    </div>
  );
};

export default MySkill;
