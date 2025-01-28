import React from 'react'
import Projects from '../components/Projects'
import FunFects from '../components/FunFects'
import Achivements from '../components/Achivements'
import Heading from '../components/Heading'
import WorkExperience from '../components/WorkExperience'
import ScrollingText from '../components/ScrollingText'
import MySkill from '../components/MySkill'

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
      <WorkExperience heading={'Work Experience'} subHeading={'My Experience'}/>
      <WorkExperience heading={'Education'} subHeading={'My Education'} rowReverse={true} />
    </div>
      <ScrollingText/>
      <MySkill/>
    </>

  )
}

export default Work
