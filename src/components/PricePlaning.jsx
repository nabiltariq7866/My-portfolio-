import React from "react";
import Heading from "./Heading";
import PriceCards from "./PriceCards";

const PricePlaning = () => {
  const pricingPlans = [
    {
      heading: "Hourly",
      price: "$99",
      facilities: [
        { name: "One time contract", provided: true },
        { name: "Flexible Contract", provided: true },
        { name: "Source Files", provided: true },
        { name: "Support", provided: false },
        { name: "Updates", provided: false },
      ],
    },
    {
      heading: "Hourly",
      price: "$69",
      facilities: [
        { name: "One time contract", provided: true },
        { name: "Flexible Contract", provided: true },
        { name: "Source Files", provided: true },
        { name: "Support", provided: true },
        { name: "Updates", provided: false },
      ],
    },
    {
      heading: "Hourly",
      price: "$39",
      facilities: [
        { name: "One time contract", provided: true },
        { name: "Flexible Contract", provided: true },
        { name: "Source Files", provided: true },
        { name: "Support", provided: true },
        { name: "Updates", provided: true },
      ],
    },
  ];
  return (
    <div className="max-w-[1350px] my-32 h-full   md:px-4 flex mx-auto flex-col">
      <Heading subHeading={"Let's start Work"} heading={"Pricing Plans"} />
      <div className="mt-20 flex flex-wrap gap-4 items-center justify-center">
    
    {  pricingPlans.map((item,index)=><PriceCards key={index} pricingPlans={item}/>)  }
      </div>
    </div>
  );
};

export default PricePlaning;
