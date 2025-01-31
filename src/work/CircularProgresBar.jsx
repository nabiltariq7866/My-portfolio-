import React from "react";
import { Flat, Heat, Nested } from "@alptugidin/react-circular-progress-bar";
const CircularProgresBar = () => {
  let percentage = 86;
  return (
    <div>
      <div className="md:w-[100px] md:h-[100px] lg:w-full lg:h-full">
        <div style={{ filter: "none !important" }}>
          <Flat
            progress={50}
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
      </div>
      <div>
        <h1 className="font-jost md:text-[16px] lg:text-2xl text-[#2e2e37] mt-4 mb-3 capitalize font-medium">web Developer</h1>
      </div>
    </div>
  );
};

export default CircularProgresBar;
