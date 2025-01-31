import React from 'react'
import logo from "../assets/Subtract.svg"
import FunFectsBox from './FunFectsBox'
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const FunFects = () => {
  const divRef = useRef(null);
  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: divRef.current,
        start: "top 80%",
        end: "top 30%",
        toggleActions: "play none none reverse",
      },
    });
    timeline.fromTo(
      divRef.current,
      { y: "200px", opacity: 0 },
      { y: "0px", opacity: 1, duration: 1, ease: "power3.out" }
    );
  }, []);
  return (
    <div ref={divRef}  className='w-screen lg:h-[70vh] my-36 flex items-center justify-center relative z-10 bg-[#25262f] overflow-hidden'>
      <img src={logo} alt="logo" className='hidden lg:block absolute -top-[30%] -left-[2%] -z-10' />
      <img src={logo} alt="logo" className='hidden lg:block absolute -bottom-[13%] right-0 -z-10'  />
      <div className='w-screen h-2/3 pt-12 pb-10 lg:pt-0 lg:pb-0'>
        <div className='max-w-[540px] flex  items-center lg:flex-row flex-col justify-between md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1350px] m-auto px-[15px] h-full'>
            <div className='md:basis-[100%] mb-4 flex-shrink-0 flex-grow-0 md:max-w-full lg:basis-1/2 lg:max-w-[50%] xl:basis-[41%] xl:max-w-[41%] h-full'>
              <h3 className='uppercase text-[#80DB66] mb-1 font-jost text-xl font-medium tracking-[7px]'>Fun facts</h3>
              <h1 className='mb-7 text-4xl md:text-6xl text-white font-jost leading-[42px]  md:leading-[72px] font-medium'>I Design & Develop with Purpose</h1>
              <p className='font-OpenSans mb-6  text-[18px] leading-[30px] text-[#a0a0bb]'>I specialize in crafting engaging and user-friendly web interfaces that combine functionality with stunning design. By leveraging modern frameworks and responsive techniques, I ensure seamless experiences across devices, turning ideas into visually appealing, interactive digital products.</p>
            </div>
            <div className='flex flex-shrink-0 flex-wrap  flex-grow-0 md:basis-full md:max-w-full lg:basis-1/2 lg:max-w-[50%] xl:ml-[8%] xl:basis-[50%] xl:max-w-[50%]  h-full'>
            <FunFectsBox text={"years of experience"} number={1} />
            <FunFectsBox text={"Numbers of Clients"} number={5}/>
            <FunFectsBox text={"projects completed"} number={8}/>
            <FunFectsBox text={"Digital Products"} number={30}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default FunFects
