import React from 'react'
import EyeTestCards from './EyeTestCards'
import { Outlet } from 'react-router'


const YourVision = () => {
  return (
    <div className='py-10'>
      <h1 className='px-10 text-3xl font-thin'>Your Vision <hr /></h1>
      <div className='container mx-auto py-10'>
      <Outlet />
      </div>
    </div>
  )
}

export default YourVision
