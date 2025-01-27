import React from "react";
import image from "../assets/nabil3.jpg";
import Heading from "./Heading";
import Cards from "./Cards";

const WorkExperience = ({rowReverse,heading,subHeading}) => {
  return (
    <div className={`max-w-[1350px] flex flex-col lg:flex-row items-center ${rowReverse?"lg:flex-row-reverse":""}  justify-between mx:px-4   mx-auto`}>
      <div className="px-3 w-full lg:w-1/2">
        <img src={image} alt="our image" className="rounded-2xl " />
      </div>
      <div className={`px-3 w-full lg:w-1/2 mt-16 lg:mt-40 lg:mb-12 ${rowReverse ?"lg:pr-24":"lg:pl-24"} pb-20  flex flex-col items-start`}>
        <Heading subHeading={subHeading} heading={heading} />
        <p className="text-[#4d4d5c] mt-4 text-xl font-OpenSans leading-7">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium dolore.
        </p>
        <div className="pt-6">
            <Cards rowReverse={rowReverse}/>
            <Cards rowReverse={rowReverse}/>
            <Cards rowReverse={rowReverse}/>

        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
