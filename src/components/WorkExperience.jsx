import React from "react";
import image from "../assets/nabil3.jpg";
import Heading from "./Heading";
import Cards from "./Cards";
const WorkExperience = () => {
  return (
    <div className="max-w-[1350px] flex items-center  justify-between mx:px-4   mx-auto">
      <div className="w-1/2">
        <img src={image} alt="our image" className="rounded-2xl" />
      </div>
      <div className="w-1/2 mt-40 mb-12 pl-24 pb-20  flex flex-col items-start">
        <Heading subHeading={"Work Experience"} heading={"My Experience"} />
        <p className="text-[#4d4d5c] mt-4 text-xl font-OpenSans leading-7">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium dolore.
        </p>
        <div className="pt-6">
            <Cards/>
            <Cards/>
            <Cards/>

        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
