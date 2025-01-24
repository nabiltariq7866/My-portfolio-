import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home'
import { useState } from "react";
import About from "./pages/About"
import AllPages from "./pages/AllPages";
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
