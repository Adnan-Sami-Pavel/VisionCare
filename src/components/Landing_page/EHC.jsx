import React, { useEffect, useState } from 'react'
import BlogCard from './BlogCard';

const EHC = () => {
  const [blogs, setBlogs] = useState([]);

  // Fetch JSON data
  useEffect(() => {
    fetch("./blogData.json") // Adjust path if needed
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error loading blog data:", error));
  }, []);

  return (
    <div className='py-10'>
      <h1 className='px-10 text-3xl font-thin'>Eye Health & Care <hr /></h1>
      <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Blog Posts
      </h1>
      <BlogCard/>
    </div>
    </div>
  )
}

export default EHC

