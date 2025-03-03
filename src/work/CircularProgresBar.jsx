import React from "react";
import { Flat } from "@alptugidin/react-circular-progress-bar";

const CircularProgresBar = ({ percentage, category }) => {
  return (
    <div className="flex flex-col items-center">
      {/* Circular Progress Bar */}
      <div className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] lg:w-[150px] lg:h-[150px]">
        <Flat
          progress={percentage}
          range={{ from: 0, to: 100 }}
          sx={{
            strokeColor: "#80DB66",
            barWidth: 5,
            bgStrokeColor: "#d6d6d6",
            shape: "full",
            strokeLinecap: "butt",
            valueSize: 22,
            valueWeight: "bold",
            valueColor: "#2e2e37",
            valueFamily: "Trebuchet MS",
            textSize: 13,
            textWeight: "bold",
            textColor: "#2e2e37",
            textFamily: "Trebuchet MS",
            loadingTime: 1000,
            miniCircleColor: "#80DB66",
            miniCircleSize: 5,
            valueAnimation: true,
            intersectionEnabled: true,
          }}
        />
      </div>

      {/* Title */}
      <h1 className="font-jost text-lg md:text-xl lg:text-2xl text-[#2e2e37] mt-4 mb-3 capitalize font-medium text-center">
        {category}
      </h1>
    </div>
  );
};

export default CircularProgresBar;
