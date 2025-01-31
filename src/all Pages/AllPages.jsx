import React from "react";
import Navbar from "./Navbar";
import GoogleMap from "./GoogleMap";
import ScrollingText from "../components/ScrollingText";
import Home from "../Home/Home";
import Work from "../work/Work";
import Service from "../service/Service";
import ContactUs from "../contactUs/ContactUs";
import About from "../About/About";
import Footer from "../footer/Footer";



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
