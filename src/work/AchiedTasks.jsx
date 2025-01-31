import React from "react";
import award from "../assets/award-logo1.png";
const AchiedTasks = ({ isFirst=false }) => {
  return (
    <div className="md:pl-3 ">
      {/* this div when i hover image will apear */}
      <div
        className={`pt-12 pb-[38px] px-3 md:px-0 relative ${
          isFirst ? "border-t border-b" : "border-b"
        } flex md:items-center flex-col  md:flex-row   border-[#c8ccd4]`}
      >
        <div className="flex-shrink-0 flex-grow-0 basis-[16.5%] mr-5">
          <img src={award} alt="" />
        </div>
        <div className="md:flex-shrink-0 md:flex-grow-0  md:basis-[20%] lg:basis-[25%]">
          <h3 className="text-[#2e2e37] font-jost mb-2 font-medium text-2xl my-3 md:my-0 md:text-2xl capitalize ">
            Best Developer
          </h3>
          <p className="text-[#9B9DB1] font-OpenSans mb-2 font-medium  my-3 md:my-0 md:text-[18PX]">2022</p>
        </div>
        <div className="md:flex-shrink-0 md:flex-grow-0 md:basis-[20%] lg:basis-[25%]">
          <h3 className="text-[#2e2e37] font-jost mb-2 font-medium text-2xl my-3 md:my-0 md:text-2xl capitalize ">
             Developer  association
          </h3>
          <p className="text-[#9B9DB1] font-OpenSans mb-2 font-medium  my-3 md:my-0 md:text-[18PX] capitalize">Lahore, Pakistan</p>
        </div>
        <p className="text-[#4d4d5c] text-xl font-OpenSans leading-7">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore.
        </p>
      </div>
    </div>
  );
};

export default AchiedTasks;
