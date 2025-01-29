import React from 'react'
import Heading from './Heading'
import img from "../assets/testimonials-img.jpg"
import TestinmonialsCards from './TestinmonialsCards'

const Testimonial = () => {
  return (
    <div  className="max-w-[1350px] py-40 h-screen relative testimonals md:px-4 flex mx-auto">
      <div className='flex-shrink-0 flex-grow-0 basis-[57%] h-full' >
        <Heading subHeading={'Testimonials'} heading={'What People Say'} TLeft={true}/>
      </div>
      <div className='flex-shrink-0 flex-grow-0 basis-1/2 h-full absolute right-[-12%]'>
        <img src={img} alt="" className='rounded-2xl'/>
      </div>
      <p className="hidden md:block text-[200px] lg:text-[300px] font-jost text-[#f0f7fe] absolute bottom-[-10%] xl:bottom-[-20%] right-[-1.61%]  z-0">Testim</p>
    </div>
  )
}

export default Testimonial
