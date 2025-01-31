import React, { useRef, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { RxHamburgerMenu } from "react-icons/rx";
import { ImCross } from "react-icons/im";
import logo from "../assets/logo.png";

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Expertise", to: "/expertise" },
  { name: "Projects", to: "/projects" },
  { name: "Timeline", to: "/timeline" },
  { name: "Testimonials", to: "/testimonials" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);

  // Handle sticky navbar behavior
  useEffect(() => {
    const updateStickyNavbar = () => {
      const scrollY = window.scrollY;
  
      if (scrollY > 5) {
        gsap.to(navbarRef.current, {
          position: "fixed",
          top: 0,
          height: "75px",
          backgroundColor: "#25262f", // Set solid background color for sticky state
          zIndex: 1000,
          
          duration: 0.3,
          ease: "power1.out",
        });
      } else {
        gsap.to(navbarRef.current, {
          position: "relative", // Reset to relative when at the top
          height: "100px",
          backgroundColor: "transparent", // Make background transparent// Remove shadow
          zIndex: 1,
          duration: 0.3,
          ease: "power1.out",
        });
      }
    };
  
    window.addEventListener("scroll", updateStickyNavbar);
    return () => window.removeEventListener("scroll", updateStickyNavbar);
  }, []);
  

  // Lock body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <div
      ref={navbarRef}
      className="w-full bg-slider-bg h-[96px] transition-all duration-300"
    >
      <div className="w-full h-full bg-transparent xl:w-[1350px] xl:m-auto">
        <div className="h-full flex px-4 justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center justify-center h-full px-1">
            <img src={logo} alt="Logo" className="w-8 mr-1 mt-[-8px] xl:w-12" />
            <div className="text-3xl text-[#f3f3f3] font-kiwi mt-[-15px] xl:text-5xl">
              abil
            </div>
          </div>

          {/* Navigation Links Section */}
          <div className="h-full w-full flex items-center justify-end">
            {/* Sidebar/Menu for smaller screens */}
            {isOpen && (
              <div className="transition-all duration-300 bg-[#80DB66] h-screen w-[95%] z-50 py-2 px-3 absolute top-0 left-0 md:w-1/2 lg:hidden">
                <div className="absolute right-4 top-4 w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <ImCross
                    color="#80DB66"
                    onClick={() => setIsOpen(false)}
                    className="cursor-pointer"
                  />
                </div>
                <div className="flex flex-col space-y-6 mt-28 ml-7">
                  {navLinks.map(({ name, to }) => (
                    <NavLink
                      key={name}
                      to={to}
                      onClick={() => setIsOpen(false)}
                      className="font-jost font-medium text-[18px] text-[#f3f3f3] leading-6 hover:text-[#25262f] transition duration-200"
                    >
                      {name}
                    </NavLink>
                  ))}
                </div>
              </div>
            )}

            {/* Inline navigation for larger screens */}
            <div className="hidden lg:flex lg:items-center lg:space-x-9">
              {navLinks.map(({ name, to }) => (
                <NavLink
                  key={name}
                  to={to}
                  className="font-jost font-medium text-[18px] text-[#f3f3f3] leading-6 hover:text-[#80DB66] transition duration-200"
                >
                  {name}
                </NavLink>
              ))}
            </div>

            {/* Download CV Section */}
            <div className="w-[181px] pl-12 h-[38px] lg:w-52 lg:h-11">
              <button
                className="w-full h-full py-3 border-2 border-[#80DB66] text-[#f3f3f3] font-semibold rounded uppercase flex items-center justify-center hover:bg-[#80DB66] transition duration-200"
              >
                Download CV
              </button>
            </div>

            {/* Hamburger menu icon for smaller screens */}
            <div
              className="lg:hidden text-3xl ml-3 cursor-pointer"
              onClick={() => setIsOpen(true)}
              aria-expanded={isOpen}
              aria-label="Open navigation menu"
            >
              <RxHamburgerMenu color="#80DB66" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
