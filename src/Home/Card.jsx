import React, { useState, useEffect } from "react";
import { Tilt } from "@jdion/tilt-react";

const Card = ({ icon, heading, para, color, mt }) => {
  const [isMdScreen, setIsMdScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)"); // Check if screen width is >= md
    const handleResize = () => setIsMdScreen(mediaQuery.matches);
    handleResize(); // Initial check

    mediaQuery.addEventListener("change", handleResize); // Listen for changes

    return () => mediaQuery.removeEventListener("change", handleResize); // Cleanup
  }, []);

  return (
    <Tilt
      style={{
        marginTop: isMdScreen ? mt : "0px", // Apply `mt` only for md screens or larger
      }}
      options={{
        max: 15, // Control the tilt effect intensity
        perspective: 1000, // Perspective for the 3D effect
        scale: 1, // Ensure no scaling
        speed: 200, // Speed of the tilt effect
        easing: "cubic-bezier(0.03, 0.98, 0.52, 0.99)", // Smooth easing for tilt
      }}
      className="w-[360px] xl:w-[24%] rounded-2xl z-10 pt-[55px] bg-white h-[380px] px-[48px] pb-[35px] mh-full"
    >
      <div className="">
        <img src={icon} alt="" className="mb-4" />
        <div>
          <h1
            className={`text-2xl cursor-pointer mb-4 text-[#2e2e37] font-semibold hover:text-[${color}] transition-colors duration-300`}
          >
            {heading}
          </h1>
          <p className="text-[#4d4d5c] text-[18px] leading-7 font-normal">
            {para}
          </p>
        </div>
      </div>
    </Tilt>
  );
};

export default Card;
