import React from 'react'
import HeroSection from '../components/HeroSection'
import Softskills from '../components/Softskills'
const Home = ({color}) => {
  return (
    <>
    <div className="bg-slider-bg w-screen min-h-screen">
     <HeroSection color={color}/>
     <Softskills color={color}/>
    </div>
     
     </>
  )
}

export default Home
