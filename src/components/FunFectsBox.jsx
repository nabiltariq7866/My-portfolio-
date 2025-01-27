import React from 'react'
import CountUp from 'react-countup'

const FunFectsBox = ({text,number}) => {
  return (
    
    <div className='flex-shrink-0 flex-grow-0 basis-full max-w-full md:basis-1/2  md:max-w-[50%] px-3'>
      <div className='py-12 px-[30px] mb-[30px] border-[0.2px] border-gray-50 rounded-xl flex items-center justify-between'>
        <div className='h-full'> 

            <h1 className='text-7xl leading-[28px] font-jost text-[#80DB66] mr-6'><CountUp delay={1} duration={2.75} start={0} end={number}/></h1>
        </div>

            <h1 className='capitalize font-jost text-white text-2xl leading-[35px]'>{text}</h1>
      </div>
    </div>
    
  )
}

export default FunFectsBox
