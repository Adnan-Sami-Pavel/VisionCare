import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import RootLayout from './layout/RootLayout'
import Home from './components/Landing_page/home'
import EHC from './components/Landing_page/EHC'
import About from './components/Landing_page/about'
import YourVision from './components/Landing_page/YourVision'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='ehc' element={<EHC />}/>
        <Route path='visiontest' element={<YourVision />} />
        <Route path='about' element={<About />}/>
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App

