import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import AllPages from "./all Pages/AllPages";
import Home from "./Home/Home";
import About from "./About/About";
import Work from "./work/Work";
import ContactUs from "./contactUs/ContactUs";
import Footer from "./footer/Footer";
import Service from "./service/Service";
function App() {
  const [color, setColor] = useState('#80DB66');
  const [colors, setColors] = useState('#80DB66');
const router=createBrowserRouter([
  {
    path:"/",
    element:<AllPages color={colors}/>
  },
  // {
  //   path:"/home",
  //   element:<Home color={colors}/>
  // },
  // {
  //   path:"/about",
  //   element:<About color={color} />
  // },
  // {
  //   path:"/work",
  //   element:<Work color={color} />
  // },
  // {
  //   path:"/service",
  //   element:<Service color={color} />
  // },
  // {
  //   path:"/contact",
  //   element:<ContactUs color={color} />
  // },
  // {
  //   path:"/footer",
  //   element:<Footer color={color} />
  // }
])

  return (
    <RouterProvider router={router} />
  )
}

export default App
