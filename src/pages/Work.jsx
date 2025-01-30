import React from "react";
import Projects from "../components/Projects";
import FunFects from "../components/FunFects";
import Achivements from "../components/Achivements";
import Heading from "../components/Heading";
import WorkExperience from "../components/WorkExperience";
import ScrollingText from "../components/ScrollingText";
import MySkill from "../components/MySkill";

const Work = () => {
  return (
    <>
      <div className="max-w-[1350px] mx:px-4 h-full mx-auto mt-40">
        <Heading subHeading={"Portfolio"} heading={"My Recent Works"} />
        <div className=" w-full h-full mt-20">
          <Projects isFirst={true} />
          <Projects />
          <Projects />
          <Projects />
        </div>
      </div>
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
