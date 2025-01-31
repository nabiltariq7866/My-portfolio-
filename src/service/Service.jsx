import React from "react";
import s1 from "../assets/ser-icon1.png";
import s2 from "../assets/ser-icon2.png";
import s3 from "../assets/ser-icon3.png";
import s4 from "../assets/ser-icon4.png";
import Heading from "../components/Heading";
import PricePlaning from "./PricePlaning";
import Testimonial from "./Testimonial";
import ServiceCard from "./ServiceCard";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const services = [
  {
    title: "Responsive Web Design",
    description:
      "Creating visually stunning, mobile-friendly layouts that adapt seamlessly across all screen sizes.",
    icon: s1,
  },
  {
    title: "Performance Optimization",
    description:
      "Enhancing website speed and efficiency to ensure a smooth, fast, and seamless user experience.",
    icon: s2,
  },
  {
    title: "UI/UX Development",
    description:
      "Designing intuitive, engaging interfaces that improve usability and enhance user interaction.",
    icon: s3,
  },
  {
    title: "JS & React Development",
    description:
      "Building dynamic and interactive web applications using modern JavaScript frameworks and React.",
    icon: s4,
  },
  {
    title: "Advanced Web API Integration",
    description:
      "Connecting frontend with backend services seamlessly for smooth data exchange and real-time updates.",
    icon: s1,
  },
  {
    title: "Cross-Browser Compatibility",
    description:
      "Ensuring websites work consistently across all major browsers for a flawless, error-free experience.",
    icon: s2,
  },
];

const Service = () => {
  
  return (
    <>
      <div  className="w-screen  bg-[#25262f] py-40">
        <div className="max-w-[1350px]  h-full   md:px-4 flex mx-auto flex-col">
          <Heading
            subHeading={"service"}
            heading={"what i offer"}
            white={true}
          />
          <div  className="mt-20 flex flex-wrap">
            {services.map(({ title, description, icon }) => (
              <ServiceCard
                title={title}
                description={description}
                icon={icon}
              />
            ))}
          </div>
        </div>
      </div>
      <PricePlaning />
      <div className="lg:overflow-hidden">
        <Testimonial />
      </div>
    </>
  );
};

export default Service;
