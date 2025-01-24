import React from 'react'
import logo from "../assets/Subtract.svg"
const FunFects = () => {
  return (
    <div className='w-screen h-[70vh] my-36 relative bg-[#25262f] overflow-hidden'>
      <img src={logo} alt="logo" className='absolute -top-[30%] -left-[2%]' />
      <img src={logo} alt="logo" className='absolute -bottom-[13%] right-0'  />
    </div>
  )
}

export default FunFects
