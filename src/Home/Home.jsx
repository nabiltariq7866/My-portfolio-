import React from 'react'
import HeroSection from './HeroSection'
import Softskills from './Softskills'
const Home = ({color}) => {
  return (
    <>
    <section id="Home" className="bg-slider-bg w-screen min-h-screen">
     <HeroSection color={color}/>
     <Softskills color={color}/>
    </section>
     
     </>
  )
}

export default Home
