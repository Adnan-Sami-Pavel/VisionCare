import React from 'react'
import eyevideo from '../../assets/eyevideo.mp4'
import e_chart from '../../assets/e_chart.webp'
import home_img from '../../assets/home_img.jpg'




const Home = () => {
  return (
    <div className='container h-auto w-full mx-auto bg-lightMint'>
      <div className="relative h-screen w-full bg-white">
        <video
          className=" top-0 left-0 w-full h-3/5 object-cover"
          src={eyevideo}
          autoPlay
          loop
          muted
        />
        <div className="mt-6">
          <div className="text-center text-gray-800">
            <p className="text-base font-semibold md:text-base font-semibold">WELCOME TO VISION CARE</p>
            <h1 className="text-6xl font-sans font-semibold md:text-6xl font-bold"><span className='font-bold'>YOUR</span> visual world is unique.</h1>
            <p className="mt-4 text-lg md:text-4xl">
            Let’s unlock it.
            </p>
            <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
              Join Us
            </button>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row items-center bg-gray-100 p-8">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={home_img} // Replace with your image source
          alt=""
          className="max-w-full rounded-md shadow-2xl"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-8 text-center md:text-left">
        <h2 className="text-3xl font-semibold text-gray-800">
          ZEISS Optical Inserts for Apple Vision Pro.
        </h2>
        <p className="text-lg text-gray-600 mt-2">A perfect match.</p>
        <a
          href="#"
          className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-800 text-lg font-medium"
        >
          Discover more
        </a>
      </div>
    </div>
    <div className="flex flex-col md:flex-row items-center bg-gray-100 p-8">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
      <img
              src={e_chart}
              className="max-w-sm rounded-lg shadow-2xl" />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-8 text-center md:text-left">
        <h2 className="text-3xl font-semibold text-gray-800">
          ZEISS Optical Inserts for Apple Vision Pro.
        </h2>
        <p className="text-lg text-gray-600 mt-2">A perfect match.</p>
        <a
          href="#"
          className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-800 text-lg font-medium"
        >
          Discover more
        </a>
      </div>
    </div>
    
    <div className="bg-gradient-to-b from-white to-purple-50 py-16">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading Section */}
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
          Choose the right plan for you
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Choose an affordable plan that’s packed with the best features for
          engaging your audience, creating customer loyalty, and driving sales.
        </p>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Personal Plan */}
          <div className="bg-white shadow-lg rounded-lg p-6 border">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              Personal
            </h3>
            <div className="text-4xl font-bold text-gray-800 mb-2">
              $29<span className="text-lg font-medium">/month</span>
            </div>
            <p className="text-gray-600 mb-6">
              The perfect plan if you’re just getting started with our product.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>✔ 25 products</li>
              <li>✔ Up to 10,000 subscribers</li>
              <li>✔ Audience segmentation</li>
              <li>✔ Advanced analytics</li>
              <li>✔ Email support</li>
              <li>✔ Marketing automations</li>
            </ul>
            <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
              Get started today
            </button>
          </div>

          {/* Team Plan */}
          <div className="bg-white shadow-lg rounded-lg p-6 border">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Team</h3>
            <div className="text-4xl font-bold text-gray-800 mb-2">
              $99<span className="text-lg font-medium">/month</span>
            </div>
            <p className="text-gray-600 mb-6">
              A plan that scales with your rapidly growing business.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>✔ Priority support</li>
              <li>✔ Single sign-on</li>
              <li>✔ Enterprise integrations</li>
              <li>✔ Custom reporting tools</li>
            </ul>
            <button className="mt-6 w-full border-2 border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-50">
              Get started today
            </button>
          </div>
        </div>
      </div>
    </div>
    
    


    </div>
  )
}

export default Home