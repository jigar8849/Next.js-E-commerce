"use client";

import React from "react";
import Image, { StaticImageData } from "next/image"; // ✅ Import StaticImageData here

import Img1 from "../../../public/assets/blog1.webp";
import Img2 from "../../../public/assets/blog2.webp";
import Img3 from "../../../public/assets/blog3.webp";
import Img4 from "../../../public/assets/blog4.webp";
import Img5 from "../../../public/assets/blog5.webp";
import Img6 from "../../../public/assets/blog3.webp";

interface BlogPost {
  id: number;
  date: string;
  comments: string;
  title: string;
  desc: string;
  img: StaticImageData;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    date: "11-06-2023",
    comments: "0 Comments",
    title: "Fashion Forward Exploring Future Trends",
    desc: "ANY, MEANING - IT DOESN'T MATTER WHAT COLOR OR PRINT IT IS. IT'LL WORK. Augue ut lectus arcu bibendum at..",
    img: Img1,
  },
  {
    id: 2,
    date: "11-06-2023",
    comments: "0 Comments",
    title: "Wardrobe Essentials Building a Timeless Collection",
    desc: "ANY, MEANING - IT DOESN'T MATTER WHAT COLOR OR PRINT IT IS. IT'LL WORK. Augue ut lectus arcu bibendum at..",
    img: Img2,
  },
  {
    id: 3,
    date: "11-06-2023",
    comments: "0 Comments",
    title: "Runway To Reality: Adapting Fashion Week Trends",
    desc: "ANY, MEANING - IT DOESN'T MATTER WHAT COLOR OR PRINT IT IS. IT'LL WORK. Augue ut lectus arcu bibendum at..",
    img: Img3,
  },
  {
    id: 4,
    date: "11-06-2023",
    comments: "0 Comments",
    title: "Chic And Unique Creating Your Signature Style",
    desc: "ANY, MEANING - IT DOESN'T MATTER WHAT COLOR OR PRINT IT IS. IT'LL WORK. Augue ut lectus arcu bibendum at..",
    img: Img4,
  },
  {
    id: 5,
    date: "11-06-2023",
    comments: "0 Comments",
    title: "Behind The Seams The Making Of Fashion's Favorites",
    desc: "ANY, MEANING - IT DOESN'T MATTER WHAT COLOR OR PRINT IT IS. IT'LL WORK. Augue ut lectus arcu bibendum at..",
    img: Img5,
  },
  {
    id: 6,
    date: "11-06-2023",
    comments: "0 Comments",
    title: "Style Spotlight Embracing The Latest Trends",
    desc: "ANY, MEANING - IT DOESN'T MATTER WHAT COLOR OR PRINT IT IS. IT'LL WORK. Augue ut lectus arcu bibendum at..",
    img: Img6,
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
            <div className="relative w-full h-56">
              <Image
                src={post.img}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              {/* Arrow Overlay */}
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white rounded-full w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-opacity-75 transition">
                {/* Right arrow unicode, you can replace with SVG if you want */}
                &#8594;
              </div>
            </div>
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
