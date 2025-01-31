import React from "react";
import Navbar from "../components/Navbar";
import Home from "./Home";
import About from "./About";
import ScrollingText from "../components/ScrollingText";
import Work from "./Work";
import Service from "./Service";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import GoogleMap from "./GoogleMap";

const AllPages = ({ color }) => {
  return (
    <div className="relative overflow-x-hidden">
      <Navbar color={color} />
      <Home color={color} />
      <About />
      <ScrollingText />
      <Work />
      <Service />
      <ContactUs />
      <GoogleMap/>
      <Footer />
        </div>
  );
};

export default AllPages;
