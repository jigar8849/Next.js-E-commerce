"use client";

import React from "react";

// import Img1 from '../../../public/assets/blog_post_1.png'
// import Img2 from '../../../public/assets/blog_post_2.png'
// import Img3 from '../../../public/assets/blog_post_3.png'
// import Img4 from '../../../public/assets/blog_post_4.png'
// import Img5 from '../../../public/assets/blog_post_5.png'
// import Img6 from '../../../public/assets/blog_post_6.png'


interface BlogPost {
  id: number;
  date: string;
  comments: string;
  title: string;
  desc: string;
  img: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    date: "11-06-2023",
    comments: "0 Comments",
    title: "Fashion Forward Exploring Future Trends",
    desc: "ANY, MEANING - IT DOESN'T MATTER WHAT COLOR OR PRINT IT IS. IT'LL WORK. Augue ut lectus arcu bibendum at..",
    img: "https://images.pexels.com/photos/6625914/pexels-photo-6625914.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    date: "11-06-2023",
    comments: "0 Comments",
    title: "Wardrobe Essentials Building a Timeless Collection",
    desc: "ANY, MEANING - IT DOESN'T MATTER WHAT COLOR OR PRINT IT IS. IT'LL WORK. Augue ut lectus arcu bibendum at..",
    img: "https://images.pexels.com/photos/7679468/pexels-photo-7679468.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    date: "11-06-2023",
    comments: "0 Comments",
    title: "Runway To Reality: Adapting Fashion Week Trends",
    desc: "ANY, MEANING - IT DOESN'T MATTER WHAT COLOR OR PRINT IT IS. IT'LL WORK. Augue ut lectus arcu bibendum at..",
    img: "https://images.pexels.com/photos/5325581/pexels-photo-5325581.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    date: "11-06-2023",
    comments: "0 Comments",
    title: "Chic And Unique Creating Your Signature Style",
    desc: "ANY, MEANING - IT DOESN'T MATTER WHAT COLOR OR PRINT IT IS. IT'LL WORK. Augue ut lectus arcu bibendum at..",
    img: "https://images.pexels.com/photos/5965903/pexels-photo-5965903.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 5,
    date: "11-06-2023",
    comments: "0 Comments",
    title: "Behind The Seams The Making Of Fashion's Favorites",
    desc: "ANY, MEANING - IT DOESN'T MATTER WHAT COLOR OR PRINT IT IS. IT'LL WORK. Augue ut lectus arcu bibendum at..",
    img: "https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 6,
    date: "11-06-2023",
    comments: "0 Comments",
    title: "Style Spotlight Embracing The Latest Trends",
    desc: "ANY, MEANING - IT DOESN'T MATTER WHAT COLOR OR PRINT IT IS. IT'LL WORK. Augue ut lectus arcu bibendum at..",
    img: "https://images.pexels.com/photos/125047/pexels-photo-125047.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

export default function BlogCards() {
  return (
    <section className="py-10 px-6">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={post.img}
              alt={post.title}
              className="h-56 w-full object-cover"
            />
            <div className="p-5">
              <p className="text-sm text-gray-500">
                {post.date} | {post.comments}
              </p>
              <h3 className="text-lg font-semibold mt-2">{post.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{post.desc}</p>
              <button className="mt-4 px-4 py-2 border border-black rounded-full text-sm font-medium hover:bg-black hover:text-white transition">
                READ MORE →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
