"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

import Img1 from "../../../../public/assets/trandingproduct1.png";
import Img2 from "../../../../public/assets/trandingproduct3.png";
import Img3 from "../../../../public/assets/filter1.png";
import Img4 from "../../../../public/assets/filter2.png";

interface Product {
  id: number;
  title: string;
  subtitle: string;
  price: string;
  image: StaticImageData;
}

const products: Product[] = [
  {
    id: 1,
    title: "Quilted Puffer Jacket",
    subtitle: "WinterWonder Co",
    price: "$20.00",
    image: Img1,
  },
  {
    id: 2,
    title: "Classic Men's Oxford Shirt",
    subtitle: "The Gentleman's Choice",
    price: "$25.00",
    image: Img2,
  },
  {
    id: 3,
    title: "Leather Biker Jacket",
    subtitle: "Rebel Rider",
    price: "$25.00",
    image: Img3,
  },
  {
    id: 4,
    title: "Boho Floral Maxi Dress",
    subtitle: "Bohemian Bliss",
    price: "$25.00",
    image: Img4,
  },
];

// const tabs = ["Bag", "Glasses", "Trending"];

const Twist: React.FC = () => {
  // const [activeTab, setActiveTab] = useState("Bag");

  return (
    <section className="py-16 text-center">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-6xl font-semibold text-gray-900">Best Seller</h2>
        <p className="text-gray-600 text-2xl mt-4 mb-8">
          Discover Wellness in a Tropical Yoga Paradise
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
          {products.map((product) => (
            <div key={product.id} className="text-center relative">
              {/* Wishlist icon */}
              <div className="absolute top-3 right-3 bg-white p-1 rounded-full shadow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.015-4.5-4.5-4.5S12 5.765 12 8.25 9.985 3.75 7.5 3.75 3 5.765 3 8.25c0 3.577 3.402 6.016 8.55 11.264a1.125 1.125 0 001.597 0C17.598 14.266 21 11.827 21 8.25z"
                  />
                </svg>
              </div>

              {/* Corrected Image rendering */}
              <Image
                src={product.image}
                alt={product.title}
                className="w-full h-[300px] object-cover rounded"
                width={300}
                height={300}
              />

              <div className="mt-3">
                <p className="text-sm text-gray-600">{product.subtitle}</p>
                <h3 className="font-semibold text-lg mt-1">{product.title}</h3>
                <p className="text-blue-800 font-bold mt-1">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          <span className="h-2 w-2 bg-gray-300 rounded-full"></span>
          <span className="h-2 w-2 bg-gray-300 rounded-full"></span>
          <span className="h-2 w-2 bg-blue-400 rounded-full"></span>
        </div>
      </div>
    </section>
  );
};

export default Twist;
