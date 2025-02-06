import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { RxHamburgerMenu } from "react-icons/rx";
import { ImCross } from "react-icons/im";
import logo from "../assets/logo.png";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const navLinks = [
  { name: "Home", to: "Home" },
  { name: "About", to: "About" },
  { name: "Work", to: "Work" },
  { name: "Service", to: "Service" },
  { name: "Contact", to: "Contact" },
  { name: "Footer", to: "Footer" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home"); // Track active section
  const navbarRef = useRef(null);

  // Handle sticky navbar
  useEffect(() => {
    const updateStickyNavbar = () => {
      const scrollY = window.scrollY;

      if (scrollY > 5) {
        gsap.to(navbarRef.current, {
          position: "fixed",
          top: 0,
          height: "75px",
          backgroundColor: "#25262f",
          zIndex: 1000,
          duration: 0.3,
          ease: "power1.out",
        });
      } else {
        gsap.to(navbarRef.current, {
          position: "relative",
          height: "100px",
          backgroundColor: "transparent",
          zIndex: 1,
          duration: 0.3,
          ease: "power1.out",
        });
      }
    };

    window.addEventListener("scroll", updateStickyNavbar);
    return () => window.removeEventListener("scroll", updateStickyNavbar);
  }, []);

  // GSAP Smooth Scrolling Function
  const handleScroll = (target) => {
    gsap.to(window, {
      duration: 1.2,
      scrollTo: { y: `#${target}`, offsetY: 80 },
      ease: "power3.out",
    });

    setIsOpen(false); // Close menu on click
  };

  // Track Active Section Using ScrollTrigger
  useEffect(() => {
    navLinks.forEach(({ to }) => {
      ScrollTrigger.create({
        trigger: `#${to}`,
        start: "top 90px", // Adjust threshold
        end: "bottom 90px",
        onEnter: () => setActiveSection(to),
        onEnterBack: () => setActiveSection(to),
      });
    });
  }, []);

  return (
    <div ref={navbarRef} className="w-full bg-slider-bg h-[96px] transition-all duration-300">
      <div className="w-full h-full bg-transparent xl:w-[1350px] xl:m-auto">
        <div className="h-full flex px-4 justify-between items-center">
          {/* Logo */}
          <div className="flex items-center justify-center h-full px-1">
            <img src={logo} alt="Logo" className="w-8 mr-1 mt-[-8px] xl:w-12" />
            <div className="text-3xl text-[#f3f3f3] font-kiwi mt-[-15px] xl:text-5xl">
              abil
            </div>
          </div>

          {/* Navigation Links */}
          <div className="h-full w-full flex items-center justify-end">
            {/* Sidebar for Small Screens */}
            {isOpen && (
              <div className="transition-all duration-300 bg-[#80DB66] h-screen w-[95%] z-50 py-2 px-3 absolute top-0 left-0 md:w-1/2 lg:hidden">
                <div className="absolute right-4 top-4 w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <ImCross color="#80DB66" onClick={() => setIsOpen(false)} className="cursor-pointer" />
                </div>
                <div className="flex flex-col space-y-6 mt-28 ml-7">
                  {navLinks.map(({ name, to }) => (
                    <button
                      key={name}
                      onClick={() => handleScroll(to)}
                      className={`font-jost font-medium text-[18px] leading-6 transition duration-200 cursor-pointer bg-transparent ${
                        activeSection === to ? "text-[#80DB66]" : "text-[#f3f3f3]"
                      }`}
                    >
                      {name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:space-x-9">
              {navLinks.map(({ name, to }) => (
                <button
                  key={name}
                  onClick={() => handleScroll(to)}
                  className={`font-jost font-medium text-[18px] leading-6 transition duration-200 cursor-pointer bg-transparent ${
                    activeSection === to ? "text-[#80DB66]" : "text-[#f3f3f3]"
                  }`}
                >
                  {name}
                </button>
              ))}
            </div>

            {/* Download CV */}
            <div className="w-[181px] pl-12 h-[38px] lg:w-52 lg:h-11">
              <button className="w-full h-full py-3 border-2 border-[#80DB66] text-[#f3f3f3] font-semibold rounded uppercase flex items-center justify-center hover:bg-[#80DB66] transition duration-200">
                Download CV
              </button>
            </div>

            {/* Hamburger Icon */}
            <div className="lg:hidden text-3xl ml-3 cursor-pointer" onClick={() => setIsOpen(true)}>
              <RxHamburgerMenu color="#80DB66" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
