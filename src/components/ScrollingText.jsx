import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const ScrollingText = ({ second = true }) => {
  const leftToRightRef = useRef(null);
  const rightToLeftRef = useRef(null);

  useEffect(() => {
    // Left-to-Right Scrolling (No Duplication)
    const leftToRightContainer = leftToRightRef.current;
    const parentWidthLTR = leftToRightContainer.parentElement.offsetWidth;

    // Duplicate the text content for seamless scrolling
    leftToRightContainer.innerHTML += leftToRightContainer.innerHTML;

    // Calculate the total scrollable width
    const totalWidthLTR = leftToRightContainer.scrollWidth;

    // Animate the scrolling
    gsap.fromTo(
      leftToRightContainer,
      { x: -`${totalWidthLTR / 2}` }, // Start off-screen (left)
      {
        x: -`${totalWidthLTR / 2}px`, // Move off-screen (right)
        duration: 80, // Adjust for speed
        ease: "none",
        repeat: -1,
      }
    );

    // Right-to-Left Scrolling (With Duplication)
    const rightToLeftContainer = rightToLeftRef.current;
    rightToLeftContainer.innerHTML += rightToLeftContainer.innerHTML; // Duplicate content
    const totalWidthRTL = rightToLeftContainer.scrollWidth;

    gsap.to(rightToLeftContainer, {
      x: `-${totalWidthRTL / 2}px`, // Move leftward
      duration: 60, // Adjust for speed
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <div className={`${second ? "mt-32" : ""}`}>
      {/* Left-to-Right Scrolling (No Duplication) */}
      <div className="overflow-hidden w-full  flex items-center mb-3">
        <div
          ref={leftToRightRef}
          className="text-8xl uppercase font-semibold font-jost text-[rgb(33, 37, 41)] whitespace-nowrap"
        >
          Software Engineer from Pakistan * Passionate about web development and
          innovation *
        </div>
      </div>

      {/* Right-to-Left Scrolling (With Duplication) */}
      <div className="overflow-hidden w-full flex items-center">
        <div
          ref={rightToLeftRef}
          className="textstroke opacity-70 text-8xl uppercase font-semibold font-OpenSans  whitespace-nowrap"
        >
          I’m Open for new projects * Let’s Work Together.
        </div>
      </div>
    </div>
  );
};

export default ScrollingText;
