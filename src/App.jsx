import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import RootLayout from './layout/RootLayout'
import Home from './components/Landing_page/home'
import EHC from './components/Landing_page/EHC'
import About from './components/Landing_page/about'
import YourVision from './components/Landing_page/YourVision'
import EyeTestCards from './components/Landing_page/EyeTestCards'
import VATest from './components/Landing_page/VATest'
import NVTest from './components/Landing_page/NVTest'
import FVTest from './components/Landing_page/FVTest'
import DETest from './components/Landing_page/DETest'
import CVTest from './components/Landing_page/CVTest'
import CSTest from './components/Landing_page/CSTest'
import ATest from './components/Landing_page/ATest'
import AGTest from './components/Landing_page/AGTest'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="ehc" element={<EHC />} />
        <Route path="visiontest" element={<YourVision />}>
          <Route index element={<EyeTestCards />} />
          <Route path="vatest" element={<VATest />} />
          <Route path="nvtest" element={<NVTest />} />
          <Route path="fvtest" element={<FVTest />} />
          <Route path="detest" element={<DETest />} />
          <Route path="cvtest" element={<CVTest />} />
          <Route path="cstest" element={<CSTest />} />
          <Route path="atest" element={<ATest />} />
          <Route path="agtest" element={<AGTest />} />
        </Route>
        <Route path="about" element={<About />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  )
}

export default App

