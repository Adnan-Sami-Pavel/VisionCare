import React from 'react'
// Sample JSON Data
const blogsData = {
  "blogs": [
      {
          "id": 1,
          "img": "https://www.allentownoptical.com/wp-content/uploads/2023/04/Womens-eye-health-1000x563.png",
          "title": "Understanding Vision Health",
          "content": "Learn about the importance of maintaining good eye health and how it impacts overall well-being.",
          "author": "Alice Brown"
      },
      {
          "id": 2,
          "img": "https://www.silkvision.net/sites/default/files/2021-09/shutterstock_141556504.jpg",
          "title": "How Screen Time Affects Vision",
          "content": "Discover the effects of prolonged screen time on your eyes and tips to reduce digital eye strain.",
          "author": "John Smith"
      },
      {
          "id": 3,
          "img": "https://www.ophtalmo-zwillinger.com/wp-content/uploads/2022/04/Maladies-des-yeux-1-1024x683.webp",
          "title": "Common Eye Conditions in Children",
          "content": "Explore the most common eye conditions affecting children and how to manage them.",
          "author": "Emily Davis"
      },
      {
          "id": 4,
          "img": "https://www.vagahospitals.com/wp-content/uploads/2024/07/Nutrition-and-Your-Eyes.webp",
          "title": "The Role of Nutrition in Eye Health",
          "content": "Understand the role of vitamins and minerals in maintaining healthy vision.",
          "author": "Michael Johnson"
      },
      {
          "id": 5,
          "img": "https://images.ctfassets.net/u4vv676b8z52/34I5XzpvEQYfjUdq3jILW1/7dd772b3ba4a3d1c298eef29bc5e2690/myopia_types_hero.jpeg?fm=jpg&q=80",
          "title": "Early Signs of Myopia",
          "content": "Learn to identify the early signs of nearsightedness and the best approaches for treatment.",
          "author": "Sarah Lee"
      },
      {
          "id": 6,
          "img": "https://comptoneye.com/wp-content/uploads/2024/02/eye-health-tips-compton-eye-associates-768x512.jpg",
          "title": "Best Practices for Eye Care",
          "content": "A comprehensive guide to maintaining your eye health through daily practices.",
          "author": "Karen Miller"
      },
      {
          "id": 7,
          "img": "https://www.theleader.com.au/images/transform/v1/crop/frm/rosie.ryan%40fairfaxmedia.com.au/ab214df1-90d2-447b-9c22-07970f916bc3.jpg/r31_0_969_527_w1200_h678_fmax.webp",
          "title": "Advances in Vision Correction Technology",
          "content": "Explore the latest technologies in vision correction and how they can benefit you.",
          "author": "Robert Wilson"
      },
      {
          "id": 8,
          "img": "https://gv-brxm.imgix.net/binaries/_ht_1628068671697/content/gallery/gb-visionexpress/content-pages/eye-health/eye-health-2021/13-uv-damage/2021_uv_damage_intro_d.jpg?fit=fillmax&w=1370&auto=format",
          "title": "The Impact of UV Light on Eyes",
          "content": "Understand the effects of UV exposure on your eyes and how to protect them.",
          "author": "Laura Martinez"
      },
      {
          "id": 9,
          "img": "https://www.swisscoat.eu/wp-content/uploads/2017/10/elderly-vision-eye-768x476.jpg",
          "title": "Vision and Aging",
          "content": "Learn how vision changes with age and what you can do to preserve your sight.",
          "author": "James Taylor"
      },
      {
          "id": 10,
          "img": "https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2018/9/shutterstock_747207076.jpg",
          "title": "The Importance of Regular Eye Exams",
          "content": "Discover why regular eye exams are essential for maintaining healthy vision.",
          "author": "Jessica Anderson"
      },
      {
          "id": 11,
          "img": "https://ampath.com/category/1708497713.jpg",
          "title": "Vision Care for Diabetics",
          "content": "Tips and best practices for managing eye health if you have diabetes.",
          "author": "Daniel Harris"
      },
      {
          "id": 12,
          "img": "https://columbiaeye.com/wp-content/uploads/2019/08/kids-sports-eyeglasses.jpg",
          "title": "Eye Protection in Sports",
          "content": "Learn about the importance of eye protection during sports and recreational activities.",
          "author": "Sophia Moore"
      },
      {
          "id": 13,
          "img": "https://floridaeye.org/wp-content/uploads/Picture1-min.jpg",
          "title": "Understanding Cataracts",
          "content": "An overview of cataracts, their symptoms, and available treatments.",
          "author": "William Thomas"
      },
      {
          "id": 14,
          "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9-Oga9D1wJbk-1V6k2hYKaQLnJudHwFEyjw&s",
          "title": "Dry Eye Syndrome: Causes and Remedies",
          "content": "Identify the causes of dry eye syndrome and effective treatments to relieve discomfort.",
          "author": "Mia Jackson"
      },
      {
          "id": 15,
          "img": "https://lh5.googleusercontent.com/proxy/Vw8sACKtq8h_-ACVYaNz1e3FFX9dup3ApJ0LfXaSugqCkQ05d0wB0HjnGyQ1Mty2tMSTAQwsmJM874blAPhmANJCYvXnfuTxB-NzfTgAvXdsTIO51ZF_Bw",
          "title": "The Connection Between Sleep and Vision",
          "content": "How sleep quality affects your eye health and overall vision.",
          "author": "Liam White"
      }
      
  ]
}

const BlogCard = () => {
  return (
    <div className="bg-gray-100 p-6">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogsData.blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={blog.img}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {blog.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                {blog.content.length > 100
                  ? `${blog.content.substring(0, 100)}...`
                  : blog.content}
              </p>
              <p className="text-blue-500 text-sm font-semibold">
                By {blog.author}
              </p>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
