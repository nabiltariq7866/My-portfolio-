import React from 'react'
import Projects from '../components/Projects'
import FunFects from '../components/FunFects'

const Work = () => {
  return (
    <>
    <div className='max-w-[1350px] px-4 h-screen mx-auto'>
      <div className=''>
        <h5 className='uppercase mb-2 text-center font-jost text-[#80DB66] text-xl tracking-[2px] md:text-2xl  md:tracking-[7px]'>Portfolio</h5>
        <h1 className='capitalize mb-6 text-4xl md:mb-2 text-center md:text-6xl font-jost font-medium text-[#2e2e37]'>My recent work</h1>
      </div>
      <div className=' w-full h-full mt-20'>
        <Projects/>
        <Projects/>
        <Projects/>
        <Projects/>
      </div>
      
    </div>
    <FunFects/>
    </>

  )
}

export default Work
