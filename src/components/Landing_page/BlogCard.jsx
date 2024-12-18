import React from 'react'

const BlogCard = () => {
  return (
    <div>
      
    </div>
  )
}

export default BlogCard

export const blogLoader = async ()=>{
    const res = await fetch("http://localhost:3000/blogs");
    return res.json();
}