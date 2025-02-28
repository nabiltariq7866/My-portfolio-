import React from "react";
import Heading from "../components/Heading";
import FunFects from "./FunFects";
import Achivements from "./Achivements";
import ScrollingText from "../components/ScrollingText";
import MySkill from "./MySkill";
import Projects from "./Projects"
import WorkExperience from "./WorkExperience";
const Work = () => {
  return (
    <>
      <section id="Work" className="max-w-[1350px] mx:px-4 h-full mx-auto mt-40">
        <Heading subHeading={"Portfolio"} heading={"My Recent Works"} />
        <div className=" w-full h-full mt-20">
          <Projects isFirst={true} />
          <Projects />
          <Projects />
          <Projects />
        </div>
      </section>
      <FunFects />
      <div className="max-w-[1350px] mx:px-4 h-full mx-auto">
        <Achivements />
        <WorkExperience
          heading={"Work Experience"}
          subHeading={"My Experience"}
        />
        <WorkExperience
          heading={"Education"}
          subHeading={"My Education"}
          rowReverse={true}
        />
      </div>
      <ScrollingText />
      <div className=" h-screen flex items-center justify-center relative overflow-hidden">
        <MySkill />
        <p className="hidden md:block text-[200px] lg:text-[300px] font-jost text-[#e2ecf6] absolute bottom-[-10%] xl:bottom-[-19%] left-0  z-0">
          Skills
        </p>
      </div>
    </>
  );
};

export default Work;
