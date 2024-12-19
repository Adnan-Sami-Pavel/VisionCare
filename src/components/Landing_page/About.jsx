import React from 'react'
import aboutus_stage from '../../assets/aboutus_stage.mp4'
import aboutus_nobodyseeslikeyou from '../../assets/aboutus_nobodyseeslikeyou.mp4'

const About = () => {
  return (
    <div className='py-10'>
      <h1 className='px-10 text-3xl font-thin'>About Vision Care <hr /></h1>
      <div className="relative h-screen w-full bg-white py-10">
              <video
                className=" top-0 left-0 w-full h-3/5 object-cover"
                src={aboutus_stage}
                autoPlay
                loop
                muted
              />
              <div className="mt-28">
                <div className="mx-20 w-3/5 text-gray-700">
                  <h1 className="text-5xl font-sans font-semibold md:text-5xl font-bold"><span className='font-bold'>Your eye health care partner – for life.</span></h1>
                  <p className="mt-4 text-lg font-light md:text-4xl">
                  From prevention to detection, from corrective lenses to refractive surgery: We’ve got your eyes covered for the long run.
                  </p>
                </div>
              </div>
        </div>
        <div className="flex flex-col md:flex-row items-center bg-gray-100 p-8 mb-32">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        
        <video
                className=" top-0 left-0 w-full h-3/5 object-cover"
                src={aboutus_nobodyseeslikeyou}
                autoPlay
                loop
                muted
              />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-8 text-center md:text-left">
        <h2 className="text-5xl font-semibold text-gray-750">
        Nobody sees like you.
        </h2>
        <p className="text-3xl text-gray-600 mt-3">Vision care for individuals.</p>
        <p className="text-lg text-gray-600 mt-3">Seeing is more than just a physical act: When visual information moves past our eyes, each of us has a unique experience. We need our eyes to see clearly and receive the best visual information to inspire and feed our imaginations.</p>
        <p className="text-lg text-gray-600 my-3">Your vision deserves the best care. Because nobody sees like you.</p>
        <p className="text-lg text-gray-600 mt-2">
          We offer tailored vision solutions. Because one-size-fits-all simply won’t do.</p>
      </div>
    </div> 
    </div>
  )
}

export default About
