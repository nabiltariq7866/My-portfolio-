import React, { useEffect, useRef } from 'react'
import gsap from "gsap";
import Card from "./Card";
import icon1 from "../assets/dedication.png";
import icon2 from "../assets/smart.png";
import icon3 from "../assets/collaboration.png";
import icon4 from "../assets/techonlogy.png";
import shape2 from "../assets/content-shape1.png"
const Softskills = ({color}) => {
    const shapeRef = useRef(null);
    useEffect(() => {
        // GSAP animation for scaling the shape image
        gsap.to(shapeRef.current, {
          scale: 1.3,
          repeat: -1, // Infinite loop
          yoyo: true, // Reverse animation back to original scale
          duration: 2, // Time for one scale cycle
          ease: "power1.inOut", // Smooth easing
        });
      }, []);
  const obj = [
    {
      icon: icon1,
      heading: "Dedication",
      para: "Grateful for the continuous growth, creativity, and innovation in web development, and for the support and inspiration along the way.",
      mt:"0px"
    },
    {
      icon: icon2,
      heading: "Smart Work",
      para: "Focused on smart work, using creativity and innovation to achieve impactful results with precision.",
      mt:"100px"
    },
    {
      icon: icon3,
      heading: "Collaboration",
      para: "Leveraging collaboration to create impactful solutions and build better together.",
      mt:"0px"
    },
    {
      icon: icon4,
      heading: "Technology",
      para:"Crafting seamless, user-centric web solutions with a focus on innovation, efficiency, and scalability.",
      mt:"100px"
    },
  ];
  return (
    <div className="bg-[#e2ecf6] w-full py-[140px] relative overflow-y-hidden">
      <div className="xl:max-w-[1350px] h-full m-auto px-4">
        <div className="flex  items-center justify-evenly gap-8 md:gap-0 flex-wrap h-full">
          {obj.map((item) => (
            <Card key={item.heading} icon={item.icon} heading={item.heading} para={item.para} color={color} mt={item.mt}/>
          ))}
        </div>
      </div>
      <p className="hidden md:block text-[200px] lg:text-[300px] font-jost text-[#f0f7fe] absolute bottom-[-10%] xl:bottom-[-25%] right-[2%]  z-0">Nabil</p>
      <img
        ref={shapeRef} // Reference to the shape for animation
        src={shape2}
        alt="shape"
        className="absolute top-20 left-7 2xl:top-[22%] hidden md:block 2xl:left-[8%] transform"
      />
    </div>
  );
};

export default Softskills;
