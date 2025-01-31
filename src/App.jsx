import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import AllPages from "./all Pages/AllPages";
import Home from "./Home/Home";
import About from "./About/About";
function App() {
  const [color, setColor] = useState('#80DB66');
  const [colors, setColors] = useState('#80DB66');
const router=createBrowserRouter([
  {
    path:"/",
    element:<AllPages color={colors}/>
  },
  {
    path:"/Home",
    element:<Home color={colors}/>
  },
  {
    path:"/about",
    element:<About color={color} />
  }
])

  return (
    <RouterProvider router={router} />
  )
}

export default App
