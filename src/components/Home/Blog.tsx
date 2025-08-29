import React from 'react'
import Image from "next/image";

import blogImg1 from '../../../public/assets/blog_post_1.png'
import blogImg2 from '../../../public/assets/blog_post_2.png'
import blogImg3 from '../../../public/assets/blog_post_3.png'

function Blog() {


  const blogPosts = [
  {
    id: 1,
    image: blogImg1, // put these inside /public/images
    author: "Qodex Web",
    date: "November 06 2023",
    title: "Fashion Forward Exploring Future Trends",
    excerpt: "ANY, MEANING - IT DOESN'T MATTER WHAT COLOR OR PRINT IT IS. IT'LL WORK. AUGUE...",
    href: "#",
  },
  {
    id: 2,
    image: blogImg2,
    author: "Qodex Web",
    date: "November 06 2023",
    title: "Wardrobe Essentials Building a Timeless Collection",
    excerpt: "ANY, MEANING - IT DOESN'T MATTER WHAT COLOR OR PRINT IT IS. IT'LL WORK. AUGUE...",
    href: "#",
  },
  {
    id: 3,
    image: blogImg3,
    author: "Qodex Web",
    date: "November 06 2023",
    title: "Runway to Reality: Adapting Fashion Week Trends",
    excerpt: "ANY, MEANING - IT DOESN'T MATTER WHAT COLOR OR PRINT IT IS. IT'LL WORK. AUGUE...",
    href: "#",
  },
];



  return (
    <div>
       <p className="flex items-center justify-center mt-15 mb-5 text-red-500 sm:text-sm md:pt-10 md:text-xl">
        Explore Our Latest Fashion Insights
      </p>
      <h2 className="flex items-center justify-center text-5xl font-semibold sm:text-2xl md:text-6xl md:font-semibold">
       Blog Posts
      </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 py-10">
      {blogPosts.map((post) => (
        <div
          key={post.id}
          className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
        >
          <Image
            src={post.image}
            alt={post.title}
            width={600}
            height={400}
            className="w-full h-56 object-cover"
          />
          <div className="p-5 flex flex-col flex-grow">
            <p className="text-gray-500 text-sm mb-2">
              By {post.author} | {post.date}
            </p>
            <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
            <p className="text-gray-600 flex-grow">{post.excerpt}</p>
            <a
              href={post.href}
              className="mt-4 inline-block border border-black rounded-full px-5 py-2 text-sm font-medium hover:bg-black hover:text-white transition"
            >
              READ MORE
            </a>
          </div>
        </div>
      ))}
    </div>

    </div>
  )
}

export default Blog