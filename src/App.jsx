import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useEffect } from "react";
import AllPages from "./all Pages/AllPages";
import Home from "./Home/Home";
import About from "./About/About";
import Work from "./work/Work";
import ContactUs from "./contactUs/ContactUs";
import Footer from "./footer/Footer";
import Service from "./service/Service";
import Loader from "./components/Loader"; // Create this component

function App() {
  const [colors, setColors] = useState("#80DB66");
  const [isLoading, setIsLoading] = useState(true);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AllPages color={colors} />,
    },
    // Uncomment other routes as needed
  ]);

  useEffect(() => {
    const handleContentLoad = async () => {
      // Wait for images
      const images = Array.from(document.querySelectorAll("img"));
      const imagePromises = images.map((img) => {
        if (img.complete) return Promise.resolve();
        return new Promise((resolve) => {
          img.addEventListener("load", resolve);
          img.addEventListener("error", resolve); // Handle broken images
        });
      });

      // Wait for API calls (add your own if needed)
      const apiPromises = [
        // Add your API fetch calls here
        // fetch('https://api.example.com/data').then(res => res.json())
      ];

      await Promise.all([...imagePromises, ...apiPromises]);
      setIsLoading(false);
    };

    // Initial check
    handleContentLoad();

    // Fallback timeout
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
