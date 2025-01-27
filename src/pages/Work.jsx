import React from 'react'
import Projects from '../components/Projects'
import FunFects from '../components/FunFects'
import Achivements from '../components/Achivements'
import Heading from '../components/Heading'
import WorkExperience from '../components/WorkExperience'

const Work = () => {
  return (
    <>
    <div className='max-w-[1350px] mx:px-4 h-full mx-auto'>
      <Heading subHeading={'Portfolio'} heading={'My Recent Works'}/>
      <div className=' w-full h-full mt-20'>
        <Projects isFirst={true}/>
        <Projects/>
        <Projects/>
        <Projects/>
      </div>
    </div>
    <FunFects/>
    <div className='max-w-[1350px] mx:px-4 h-full mx-auto'>
      <Achivements/>
      <WorkExperience/>
      <WorkExperience/>
    </div>
    </>

  )
}

export default Work
