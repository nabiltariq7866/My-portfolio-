import React from "react";
import Heading from "./Heading";
import "react-circular-progressbar/dist/styles.css";
import CircularProgresBar from "./CircularProgresBar";
const MySkill = () => {
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
      <div className="w-full md:w-[50%] lg:pl-8 mt-7 flex flex-wrap gap-5 items-center justify-center md:justify-end">
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
