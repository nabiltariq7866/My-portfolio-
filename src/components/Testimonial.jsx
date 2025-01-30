import React from "react";
import Heading from "./Heading";
import img from "../assets/testimonials-img.jpg";
import TestinmonialsCards from "./TestinmonialsCards";

const Testimonial = () => {
  return (
    <div className="max-w-[1350px] py-40 relative testimonals  md:px-4 flex mx-auto">
      <div className="px-3 lg:max-w-[50%] basis-full max-w-full flex-shrink-0 flex-grow-0 lg:basis-1/2">
        <Heading
          subHeading={"Testimonials"}
          heading={"What People Say"}
          TLeft={true}
        />
        <TestinmonialsCards />
      </div>
      <div className="flex-shrink-0 flex-grow-0 relative max-w-full basis-full lg:basis-2/5 lg:max-w-[40%]  lg:absolute lg:right-[-6%] z-10">
        <img src={img} alt="" className="rounded-2xl z-10" />
      </div>
      <p className="hidden md:block text-[200px] lg:text-[300px] font-jost text-[#f0f7fe] absolute bottom-[-10%] xl:bottom-[-26%] right-[-1.61%]  z-1">
        Testim
      </p>
    </div>
  );
};

export default Testimonial;
