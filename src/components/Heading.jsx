import React from 'react'

const Heading = ({heading,subHeading}) => {
  return (
    <>
      <h5 className="uppercase mb-2 text-center font-jost text-[#80DB66] text-xl tracking-[2px] md:text-2xl  md:tracking-[7px]">
       {subHeading}
      </h5>
      <h1 className="capitalize  text-4xl md:mb-2 text-center md:text-6xl font-jost font-medium text-[#2e2e37]">
        {heading}
      </h1>
    </>
  )
}

export default Heading
