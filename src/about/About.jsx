import React, { useEffect, useRef } from "react";
import image from "../assets/nabil3.jpg";
import { Tilt } from "@jdion/tilt-react";
import image1 from "../assets/about.jpg";
import downloadIcon from "../assets/download-icon.png";
import signatutre from "../assets/signature.svg";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);
const About = ({ color }) => {
  const downloadRef = useRef(null);
  const leftSideDev = useRef(null);

  const personalDetails = [
    { label: "Name", value: "Nabil Tariq" },
    { label: "Occupation", value: "Software Engineer" },
    { label: "Age", value: "26 Years" },
    { label: "Nationality", value: "Pakistani" },
    { label: "Phone", value: "03034474859" },
    { label: "Email", value: "nabiltariq7866@gmail.com" },
  ];

  useGSAP(() => {
    gsap.to(downloadRef.current, {
      rotation: "+=360",
      repeat: -1,
      duration: 6,
      ease: "linear",
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: leftSideDev.current,
        scroller: "body",
         start: "top 100%",
        toggleActions: "play none none reverse",
      },
    });

    const children = leftSideDev.current?.children;

    if (children && children.length > 0) {
      const groupOne = [children[1], children[2]]; // 1st and 2nd child
      const remainingChildren = [children[0], ...Array.from(children).slice(3)]; // Including 0th and rest

      if (remainingChildren.length > 0) {
        timeline.fromTo(
          remainingChildren,
          { x: "-200px", opacity: 0 },
          { x: "0px", opacity: 1, duration: 1, ease: "power3.out" }
        );
      }

      if (groupOne.length > 0) {
        timeline.fromTo(
          groupOne,
          { x: "-150px", opacity: 0 },
          { x: "0px", opacity: 1, duration: 1, ease: "power3.out" }
        );
      }
    }
  });

  return (
    <section id="About" className="w-full ">
      <div className="relative mt-[120px] lg:mt-[170px] mb-[110px]">
        <div className="xl:max-w-[1350px] flex lg:flex-row flex-col items-center justify-center mx-auto gap-8 lg:gap-12">
          {/* Left Side */}
          <div className="w-full lg:w-1/2 relative px-3 flex items-center justify-center">
            <div
              ref={leftSideDev}
              className="max-w-[242px] w-full md:max-w-[488px] relative"
            >
              <Tilt
                options={{
                  max: 15,
                  perspective: 1000,
                  scale: 1,
                  speed: 200,
                  easing: "cubic-bezier(0.03, 0.98, 0.52, 0.99)",
                }}
                className="relative w-full"
              >
                <div className="mb-12 relative z-10">
                  <img
                    src={image}
                    alt="Profile"
                    className="rounded-xl w-full h-auto"
                  />
                </div>
              </Tilt>

              {/* Decorative Shapes (Responsive Positioning) */}
              <div className="absolute top-20 -left-6 w-[60px] h-[60px] bg-[#80DB66] "></div>
              <div className="absolute -top-8 -right-6 w-[80px] -z-10 h-[80px] border-4 border-[#80DB66]"></div>
              <div className="absolute bottom-8 right-16 w-[30px] h-[40px] bg-[#80DB66] "></div>
              <div className="absolute top-36 rotate-45 -right-9 ">
                <img src={image1} alt="" className="w-[50px] h-[50px] " />
              </div>

              {/* Download Icon (Responsive Positioning) */}
              <div
                ref={downloadRef}
                className="absolute  bottom-[-40px] left-[-70px] w-[150px] h-[150px] md:w-[200px] md:h-[200px] bg-download bg-cover rotate-45 "
              ></div>
              <img
                src={downloadIcon}
                alt="Download Icon"
                className="absolute bottom-6  -left-[6px] z-20 w-6 md:bottom-12 md:left-5"
              />

              {/* Name Text (Responsive Size & Positioning) */}
              <div className="absolute bottom-1/4 inline-block -rotate-90 -z-10 right-[50%] md:right-[50%] text-[150px] font-jost text-[#e2ecf6] md:text-[300px] ">
                Nabil
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="px-3 w-full lg:w-1/2">
            <div className="mb-10">
              <p className="text-lg font-medium uppercase tracking-widest text-[#80DB66]">
                About me
              </p>
              <h1 className="text-3xl lg:text-5xl font-semibold mt-2 text-[#2e2e37]">
                Software Engineer
              </h1>
            </div>
            <p className="text-base md:text-lg text-[#4d4d5c] leading-relaxed mb-8">
              I am a Frontend Developer and Software Engineer passionate about
              crafting responsive, user-friendly web interfaces. Skilled in
              modern technologies like React.js, JavaScript, and Tailwind CSS, I
              focus on building scalable, visually appealing, and
              high-performing applications while staying updated with industry
              trends.
            </p>
            <div className="py-6 border-t border-b">
              <div className="grid grid-cols-1 lg:grid-cols-2  gap-4">
                {personalDetails.map((detail, index) => (
                  <div key={index} className="flex">
                    <p className="font-medium w-[90px] lg:w-auto text-[#4d4d5c] ">{detail.label}</p>
                    <p className="ml-4 text-[#4d4d5c]">{detail.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 flex items-center">
              <img
                src={signatutre}
                alt="Signature"
                className="w-32 -rotate-12"
                style={{
                  filter:
                    "invert(79%) sepia(30%) saturate(748%) hue-rotate(56deg) brightness(95%) contrast(88%)",
                }}
              />
              <div className="ml-4">
                <h6 className="text-lg font-semibold">Nabil Tariq</h6>
                <span className="text-sm text-[#9b9db1]">
                  Software Engineer, MikroStarTech (SMC-Pvt.) Ltd.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
