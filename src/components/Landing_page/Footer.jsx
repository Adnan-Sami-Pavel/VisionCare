import React from 'react'
import logo from '../../assets/logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    // <div className='container h-auto w-full mx-auto bg-white' >
    //     <div className='flex w-full h-96 justify-around items-center'>
    //       <div>
    //         <div className='flex items-center'>
    //           <img src={logo} alt='Vision Care logo' className=' h-20 w-24'/>
    //           <div className=' hover:text-blue-500'>
    //             <p className=' text-xl font-semibold'>VISION</p>
    //             <p className=' text-lg font-semibold'>CARE</p>
    //           </div>
    //         </div>
    //       </div>
    //       <div>
    //         <p className=' text-xl font-semibold'>About VisionCare</p>
    //         <div className='text-lg'>
    //           <p className='mt-3 mb-3'>About us</p>
    //           <p className='mt-3 mb-3'>Contact</p>
    //           <p className='mt-3 mb-3'>Blog</p>
    //         </div>
    //       </div>
    //       <div>
    //         <p className=' text-xl font-semibold'>Social Media</p>
    //         <div > 
    //           <div className='flex gap-2 mt-3 mb-3'>
    //             <div>
    //               <FontAwesomeIcon icon={faFacebook} size="2x" className='text-blue-600' />
    //             </div>
    //             <div className='text-lg'>
    //               <p>Facebook</p>
    //             </div>
    //           </div>
    //           <div className='flex gap-2  mt-3 mb-3'>
    //             <div>
    //               <FontAwesomeIcon icon={faYoutube} size="2x" className='text-red-600' />
    //             </div>
    //             <div className='text-lg'>
    //               <p>Youtube</p>
    //             </div>
    //           </div>
    //           <div className='flex gap-2  mt-3 mb-3'>
    //             <div>
    //               <FontAwesomeIcon icon={faTwitter} size="2x" className='text-blue-600' />
    //             </div>
    //             <div className='text-lg'>
    //               <p>Twitter</p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <p className='text-lg text-center font-extralight p-10'>© 2024 Vision Care. All Rights Reserved.
    //     Empowering clearer vision, one eye at a time.</p>
    // </div>
    <>
      <div className="bg-gray-900 text-gray-300">
      
      <div className="text-center py-12">
        <h1 className="text-3xl md:text-5xl font-bold text-white">
        Enhance your vision.<br />
        Experience better eye care today.
        </h1>
        <p className="mt-4 text-lg">
        Get personalized eye care solutions tailored to your needs, ensuring better vision and healthier eyes every day.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
          Get started
        </button>
      </div>

      
      <div className="container mx-auto px-4 py-8 border-t  border-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
         
          <div className="col-span-1">
            <div className="flex items-center space-x-2">
              <div className=" rounded-full">
              <img src={logo} alt='Vision Care logo' className='w-14 h-13 rounded-full' />
              </div>
              <p className="text-white font-bold text-lg">VisionCare</p>
            </div>
          </div>

          
          <div>
            <p className="text-lg font-semibold text-white mb-4">Solutions</p>
            <ul className="space-y-2">
              <li>VA Test</li>
              <li>Color Blindness</li>
              <li>Sight Problem</li>
            </ul>
          </div>

     
          <div>
            <p className="text-lg font-semibold text-white mb-4">Support</p>
            <ul className="space-y-2">
              <li>Contact</li>
              <li>Guides</li>
            </ul>
          </div>

          
          <div>
            <p className="text-lg font-semibold text-white mb-4">Company</p>
            <ul className="space-y-2">
              <li>About</li>
              <li>Blog</li>
            </ul>
          </div>

       
          <div>
            <p className="text-lg font-semibold text-white mb-4">Legal</p>
            <ul className="space-y-2">
              <li>Terms of service</li>
              <li>Privacy policy</li>
              <li>License</li>
            </ul>
          </div>
        </div>

        
        <div className="mt-8 flex justify-between items-center text-sm border-t  border-gray-700">
          <p>© 2024 Your Company, Inc. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="facebook.com" className="hover:text-blue-400">Facebook</a>
            <a href="x.com" className="hover:text-blue-400">Twitter</a>
            <a href="github.com" className="hover:text-blue-400">GitHub</a>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer
