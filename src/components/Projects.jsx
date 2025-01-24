import React from "react";
import img from "../assets/port-img1.jpg";
const Projects = () => {
  return (
    <div className="pl-3 ">
        {/* this div when i hover image will apear */}
      <div className="pt-12 pb-[38px] relative border-t border-b flex items-center group border-[#c8ccd4]">
        <div className="flex-shrink-0 flex-grow-0 basis-[16.5%]">
          <span className="uppercase text-[#9b9db1] font-semibold">
            web Design
          </span>
        </div>
        <div className="md:flex-shrink-0 md:flex-grow-0 md:basis-[50%] lg:basis-[41%]">
          <h3 className="text-[#2e2e37] font-jost mb-2 font-medium text-5xl hover:text-[#80DB66] transition duration-500">
            Software Design for eThemeStudio
          </h3>
        </div>
        <div className="flex items-center justify-end w-full relative">
          <img src={img} alt="" className="absolute mb-[10px] group-hover:opacity-100 group-hover:-rotate-12 left-0 opacity-0 w-[280px] transition-all duration-700" />
          <div className="w-24 h-24 hover:bg-[#80DB66] hover:border-[#80DB66] cursor-pointer rounded-full border border-[#bcc7d3] text-[#80DB66] font-semibold font-jost text-2xl flex items-center justify-center hover:text-white transition duration-500">+</div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
