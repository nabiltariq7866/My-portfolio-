import React from "react";
import Button from "../components/Button";
const PriceCards = ({ pricingPlans }) => {
 
  return (
    <div  className="px-3  flex-shrink-0 flex-grow-0 bg-white basis-full md:basis-1/2 z-0 lg:basis-[30%]  lg:max-w-[33.5%] hover:shadow-md hover:-translate-y-3 rounded-md transition-all duration-500 ">
      <div className="selects mb-[30px] rounded-xl  px-11 pb-12 pt-11 ">
        <h1 className=" capitalize pb-6 border-b mb-2 text-3xl font-jost font-medium border-[#bcc7d3] ">
          {pricingPlans.heading}
        </h1>
        <p className="mt-5 mb-[10px] text-[18px] capitalize text-[#2e2e37] font-OpenSans font-medium">
          <span className="pr-3 text-[#80DB66] text-6xl font-medium font-jost">
            {pricingPlans.price}
          </span>{" "}
          / per hour
        </p>
        <ul className="mt-4 space-y-2">
          {pricingPlans.facilities.map((facility, idx) => (
            <li key={idx} className="flex items-center mb-2">
              <span
                className={`${
                  facility.provided ? "text-[#80DB66]" : "text-[#ccd2d3]"
                } font-semibold`}
              >
                {facility.provided ? "✓" : "✘"}
              </span>
              <span className="ml-5 text-[18px]  text-[#4d4d5c] font-OpenSans leading-5">
                {facility.name}
              </span>
            </li>
          ))}
        </ul>
        <Button>Start now</Button>
      </div>
    </div>
  );
};

export default PriceCards;
