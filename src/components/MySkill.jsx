import React from "react";
import Heading from "./Heading";
import "react-circular-progressbar/dist/styles.css";
import CircularProgresBar from "./CircularProgresBar";
const MySkill = () => {
    let percentage=86;
  return (
    <div className="max-w-[1350px] mx:px-4 h-screen  flex mx-auto ">
      <div className="w-[41%] flex flex-col items-start">
        <Heading subHeading={"My Skill"} heading={"Growing Over Times"} />
        <p className="text-[#4d4d5c] t mt-4 text-xl font-OpenSans leading-7">
          Sed ut perspiciatis unde omnis iste natus Sed ut perspiciatis unde
          omnis iste natus kobita tumi sopno charini hoye khbor nio na sit
          voluptatem accusantium dolore
        </p>
      </div>
      <div className="w-[59%] ">
        <CircularProgresBar/>
             </div>
    </div>
  );
};

export default MySkill;
