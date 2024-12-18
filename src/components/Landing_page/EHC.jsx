import React, { useEffect, useState } from 'react'

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                {blog.title}
              </h2>
              <p className="text-gray-600 mb-4">{blog.content}</p>
              <p className="text-gray-500 text-sm">
                <strong>Author:</strong> {blog.author}
              </p>
              <p className="text-gray-500 text-sm">
                <strong>Date:</strong> {blog.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default EHC
