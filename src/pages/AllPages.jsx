import React from "react";
import Navbar from "../components/Navbar";
import Home from "./Home";
import About from "./About";
import ScrollingText from "../components/ScrollingText";
import Work from "./Work";
import Service from "./Service";
import TestinmonialsCards from "../components/TestinmonialsCards";

const AllPages = ({ color }) => {
  let str =
    "Website Developer from Pakistan * Passionate about web development and innovation *  ";
  return (
    <div className="relative overflow-x-hidden">
      <Navbar color={color} />
      <Home color={color} />
      <About />
      <ScrollingText />
      <Work />
      <Service />
      <div className="w-screen h-screen">
        <TestinmonialsCards/>
      </div>
    </div>
  );
};

export default AllPages;
