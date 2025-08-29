'use client'
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

import blogImg1 from "../../../public/assets/blog_post_1.png";
import blogImg2 from "../../../public/assets/blog_post_2.png";
import blogImg3 from "../../../public/assets/blog_post_3.png";

interface FeaturedPost {
  id: number;
  category: string;
  title: string;
  date: string;
  author: string;
  comments: number;
  description: string;
  image: StaticImageData;
  link: string;
}

const featuredPosts: FeaturedPost[] = [
  {
    id: 1,
    category: "Featured Post",
    title: "Fashion Forward Exploring Future Trends",
    date: "November 06, 2023",
    author: "Qodex Web",
    comments: 0,
    description:
      "ANY, MEANING - IT DOESN'T MATTER WHAT COLOR OR PRINT IT IS. IT'LL WORK. Augue ut lectus arcu bibendum at varius vel. Ipsum nunc aliquet bibendum enim facilisis.",
    image: blogImg1,
    link: "/blog/fashion-forward-exploring-future-trends",
  },
  {
    id: 2,
    category: "Featured Post",
    title: "Street Style That Defines 2024",
    date: "December 18, 2023",
    author: "Admin",
    comments: 2,
    description:
      "Streetwear has grown beyond casual comfort to being a global style influence. Explore how sneakers, oversized fits, and bold prints rule this year.",
    image: blogImg2,
    link: "/blog/street-style-2024",
  },
  {
    id: 3,
    category: "Featured Post",
    title: "Minimalist Fashion: Less is More",
    date: "January 10, 2024",
    author: "Fashion Hub",
    comments: 5,
    description:
      "Discover how clean lines, neutral colors, and minimal accessories can create timeless looks that fit every occasion effortlessly.",
    image: blogImg3,
    link: "/blog/minimalist-fashion",
  },
];

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? featuredPosts.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === featuredPosts.length - 1 ? 0 : prev + 1
    );
  };

  const post = featuredPosts[currentIndex];

  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md flex flex-col md:flex-row items-center relative">
      {/* Left Section */}
      <div className="flex-1 md:pr-8 w-full">
        <p className="text-red-600 font-semibold uppercase mb-2">
          {post.category}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-2">
          {post.title}
        </h2>
        <p className="text-gray-500 text-sm mb-4">
          {post.date} | {post.author} | {post.comments} Comments
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">{post.description}</p>
        <a
          href={post.link}
          className="px-6 py-2 border border-black rounded-full hover:bg-black hover:text-white transition inline-flex items-center gap-2"
        >
          Read More →
        </a>
      </div>

      {/* Right Section */}
      <div className="flex-1 mt-6 md:mt-0">
        <Image
          src={post.image}
          alt={post.title}
          className="rounded-lg shadow-md object-cover"
          width={700}
          height={700}
          priority
        />
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white border rounded-full shadow p-2 hover:bg-gray-100"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white border rounded-full shadow p-2 hover:bg-gray-100"
      >
        ›
      </button>
    </div>
  );
};

export default Hero;
