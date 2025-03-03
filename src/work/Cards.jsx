import React from "react";
import brefcase from "../assets/briefcase.png";
import { VscBriefcase } from "react-icons/vsc";
import edu from "../assets/education-img.jpg";
import { LiaGraduationCapSolid } from "react-icons/lia";
const Cards = ({ rowReverse, data }) => {
  return (
    <div className="mb-8 flex ">
      <div className="mr-5">
        <li className="  w-[70px] h-[70px] my-[10px]  border-[rgb(204, 211, 217, 0.2)] border rounded-md bg-[#80DB66] text-white text-4xl flex items-center justify-center  transition-transform duration-500 ease-in-out transform liRotate hover:bg-white hover:text-white hover:border-[#80DB66]">
          {rowReverse ? (
            <LiaGraduationCapSolid className={`fbrotate `} />
          ) : (
            <VscBriefcase className={`fbrotate `} />
          )}
        </li>
      </div>
      <div>
        <h3 className="text-2xl md:text-3xl mb-2 text-[#2e2e37] font-jost font-medium">
          {data.category}
        </h3>
        <h4 className="text-[18px] md:text-xl mb-2 text-[#2e2e37] font-jost">
          {data.company}{" "}
          <span className="font-OpenSans text-[15px] text-[#9B9DB1]">{`(${data.duration})`}</span>{" "}
        </h4>
        <p className="text-[#4d4d5c] mt-4 text-[17px] md:text-xl font-OpenSans leading-7">
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default Cards;
