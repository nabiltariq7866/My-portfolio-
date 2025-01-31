import React from "react";
import PriceCards from "./PriceCards";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Heading from "../components/Heading";
gsap.registerPlugin(ScrollTrigger);
const PricePlaning = () => {
  const divRef =useRef()
  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: divRef.current,
        scroller: "body",
        start: "top 100%",
        toggleActions: "play none none reverse",
      },
    });
    timeline.fromTo(
      divRef.current,
      { y: "200px", opacity: 0 },
      { y: "0px", opacity: 1, duration: 1.5, ease: "power3.out" }
    );
  }, []);
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
    <div  className="max-w-[1350px] my-32 h-full   md:px-4 flex mx-auto flex-col">
      <Heading subHeading={"Let's start Work"} heading={"Pricing Plans"} />
      <div ref={divRef} className="mt-20 flex ov flex-wrap gap-4 items-center justify-center">
    
    {  pricingPlans.map((item,index)=><PriceCards key={index} pricingPlans={item}/>)  }
      </div>
    </div>
  );
};

export default PricePlaning;
