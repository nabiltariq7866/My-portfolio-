import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Input = ({ type, name, placeholder }) => {
  const divRef = useRef(null);
  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: divRef.current,
        scroller: "body",
        start: "top 100%",
        toggleActions: "play none none none",
      },
    });
    timeline.fromTo(
      divRef.current,
      { y: "200px", opacity: 0 },
      { y: "0px", opacity: 1, duration: 1.5, ease: "power3.out" }
    );
  }, []);
  return (
    <div ref={divRef} className="md:basis-[48.9%] overflow-hidden xl:basis-[49%] lg:basis-[48.6%]  w-full ">
      <input
        id="inputName"
        type={type}
        name={name}
        placeholder={placeholder}
        maxlength="400"
        class="w-full border border-[#c8ccd4] text-[#9b9db1] text-lg font-OpenSans rounded-md px-5 py-4 focus:outline-none focus:ring-[1px] focus:ring-[#80DB66]"
      />
    </div>
  );
};

export default Input;
