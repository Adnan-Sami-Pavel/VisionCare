import React from 'react'
import NavBar from '../components/Landing_page/NavBar'
import { Outlet } from 'react-router'
import Footer from '../components/Landing_page/footer'

const RootLayout = () => {
  return (
    <>
        <NavBar />
        <div className=''>
          <Outlet />
        </div>
        <Footer />
    </>
  )
}

export default RootLayout
