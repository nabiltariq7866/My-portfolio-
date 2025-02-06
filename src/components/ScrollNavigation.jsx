import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import { useEffect } from "react";
const ScrollNavigation = () => {
    const navigate = useNavigate();
  
    useEffect(() => {
      const handleScroll = () => {
        const sections = document.querySelectorAll("section"); // Assuming each page has a `<section>` tag
        let currentSection = "";
  
        sections.forEach((section) => {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = section.id;
          }
        });
  
        if (currentSection) {
          navigate(`/${currentSection}`);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, [navigate]);
  
    return null; // This component doesn't render anything
  };
  export default ScrollNavigation;