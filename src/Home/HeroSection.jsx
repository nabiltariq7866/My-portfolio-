import React, { useEffect, useRef } from "react";
import image from "../assets/nabil2.png";
import shape1 from "../assets/shape1.png";
import shape2 from "../assets/shape2.png";
import shape4 from "../assets/shape4.png";
import gsap from "gsap";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import Button from "../components/Button";

const HeroSection = ({ color }) => {
  const circleRef = useRef(null);
  const shapesRef = useRef(null);

  useEffect(() => {
    gsap.to(circleRef.current, {
      scale: 1.3,
      repeat: -1,
      yoyo: true,
      duration: 3,
      ease: "power1.inOut",
    });

    const handleMouseMove = (e) => {
      const { clientX } = e;
      const { innerWidth } = window;
      const moveAmount = (clientX / innerWidth - 0.1) * 40;
      gsap.to(shapesRef.current, {
        x: -moveAmount,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const socialIcons = [
    { id: "facebook", icon: <FaFacebookF />, color: "#3b5998" },
    { id: "twitter", icon: <FaTwitter />, color: "#1DA1F2" },
    { id: "linkedin", icon: <FaLinkedinIn />, color: "#0077b5" },
    { id: "youtube", icon: <FaYoutube />, color: "#FF0000" },
  ];

  return (
    <div className="w-screen lg:h-screen relative overflow-hidden ">
      <div className="h-full flex flex-col lg:flex-row justify-center items-center px-4 md:px-11 lg:px-0 xl:max-w-[1350px] mx-auto">
        {/* Text Section */}
        <div className="text-center lg:text-left lg:ml-12 lg:max-w-[45%] xl:max-w-[40%] lg:mt-0 mt-12 md:mt-0">
          <p className="font-semibold text-xl lg:text-2xl text-[#80DB66]">
            Hello I'm
          </p>
          <h1 className="text-7xl md:text-6xl lg:text-[144px] text-white font-semibold leading-tight">
            Nabil <br /> <span className="lg:ml-11">Tariq</span>
          </h1>
          <h2 className="text-xl md:text-2xl leading-loose text-white mt-3 mb-10">
            A Passionate
            <span
              className={`block mt-4 text-2xl md:text-4xl font-bold text-[${color}] lg:text-4xl`}
            >
              <Typewriter
                words={[
                  "Web Designer",
                  "Software Engineer",
                  "FrontEnd Developer",
                ]}
                loop
                cursor
                cursorStyle="_"
                cursorBlinking
              />
            </span>
          </h2>
          {/* <button
            className={`py-[10px] hidden lg:block lg:py-[14px] px-10 text-[#f3f3f3] border-2 border-[${color}] font-semibold rounded uppercase flex items-center justify-center hover:bg-[${color}] transition duration-200`}
          >
            Contact US
          </button> */}
          <Button>Contact US</Button>
        </div>

        {/* Image and Circle Section */}
        <div className="relative flex justify-center items-center mt-10 lg:mt-0 lg:ml-10">
          {/* Background Circle */}
          <div
            ref={circleRef}
            className="absolute top-0 inset-0 flex items-center justify-center"
          >
            <div className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] xl:w-[600px] xl:h-[600px] rounded-full bg-[#393a42] opacity-50"></div>
          </div>

          {/* Profile Image */}
          <img
            src={image}
            alt="Nabil Tariq"
            className="w-full  md:w-[63%] lg:w-[80%] xl:w-[65%] lg:object-bottom lg:self-end lg:mb-0 xl:mt-[65px] z-[5]"
          />
        </div>
      </div>

      {/* Shapes Section */}
      <div
        ref={shapesRef}
        className="hidden xl:block absolute h-full w-[60%] top-[19%] right-[7%]"
      >
        <div className="hidden lg:flex h-3/5 w-4/5 m-auto mr-7 relative">
          <img src={shape1} alt="Shape 1" className="absolute top-0 right-0" />
          <img
            src={shape2}
            alt="Shape 2"
            className="absolute bottom-0 right-0 z-10"
          />
          <img src={shape4} alt="Shape 4" className="absolute top-0 left-0" />
        </div>
      </div>

      {/* Social Media Icons */}
      <ul className="pr-3 md:pr-9 lg:pr-3 xl:pr-16 absolute top-[30%] right-0">
        {socialIcons.map(({ id, icon, color }) => (
          <li
            key={id}
            className="w-9 h-9  lg:w-[55px] lg:h-[54px] my-[10px] border-[rgb(204, 211, 217, 0.2)] border rounded-md text-white text-xl flex items-center justify-center cursor-pointer transition-transform duration-500 ease-in-out transform liRotate hover:bg-[#80DB66] hover:border-[#80DB66]"
          >
            <span className={`fbrotate`}>{icon}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeroSection;
