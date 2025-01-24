import React from 'react'
import Navbar from '../components/Navbar'
import Home from './Home'
import About from './About'

const AllPages = ({color}) => {
  return (
    <div className='relative '>
      <Navbar color={color}/>
      <Home color={color}/>
      <About />
      <div className='w-screen h-screen'>

      </div>
    </div>
  )
}

export default AllPages
