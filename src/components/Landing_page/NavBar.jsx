import React from 'react'
import logo from '../../assets/logo.jpg'
import { Link, NavLink } from 'react-router'

const  NavBar  = () => {
  return (
    <>
      <>
  <div className='sticky top-0 w-screen h-24 bg-white z-50 shadow-md'>
    <div className='flex justify-around items-center h-full mx-auto px-4'>
      {/* Logo Section */}
      <Link to='/'>
        <div className='flex items-center'>
          <img src={logo} alt='Vision Care logo' className='h-20 w-24'/>
          <div className='hover:text-blue-500'>
            <p className='text-xl font-semibold'>VISION</p>
            <p className='text-lg font-semibold'>CARE</p>
          </div>
        </div>
      </Link>

      {/* Navigation Links */}
      <div className='flex grow justify-evenly'>
        <NavLink to='/ehc'>
          <p className='text-xl font-normal hover:text-blue-500 '>Eye Health & Care</p>
        </NavLink>
        <NavLink to='/visiontest'>
          <p className='text-xl font-normal hover:text-blue-500'>Your Vision</p>
        </NavLink>
        <NavLink to='/about'>
          <p className='text-xl font-normal hover:text-blue-500'>About Us</p>
        </NavLink>
        <NavLink to='/finddoc'>
          <button className='text-lg font-medium text-blue-500 hover:text-blue-700 border-2 border-blue-500 hover:border-blue-600 px-3 py-1 rounded-md'>
            Find a Doctor
          </button>
        </NavLink>
      </div>

      {/* Authentication Buttons */}
      <div className='flex gap-3 items-center'>
        <NavLink to='/signin'>
          <button className='text-lg font-normal text-blue-500 hover:text-blue-600 border-2 border-blue-500 hover:border-blue-700 px-3 py-1 rounded-md'>
            Sign In
          </button>
        </NavLink>
        <span className='text-2xl font-light'>|</span>
        <NavLink to='/login'>
          <button className='text-lg font-normal text-blue-500 hover:text-blue-600 border-2 border-blue-500 hover:border-blue-700 px-3 py-1 rounded-md'>
            Log In
          </button>
        </NavLink>
      </div>
    </div>
  </div>
</>


    </>
  )
}

export default NavBar 
