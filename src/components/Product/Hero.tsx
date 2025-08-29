"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import Img1 from "../../../public/assets/filter1.png";
import Img2 from "../../../public/assets/filter4.png";
import Img3 from "../../../public/assets/trandingproduct2.png";
import Img4 from "../../../public/assets/trandingproduct3.png";
import mestroCard from '../../../public/assets/mestroCard.png';
import visaCard from '../../../public/assets/visaCard.jpg';
import masterCard from '../../../public/assets/masterCard.png';

type Product = {
  name: string;
  price: number;
  description: string;
  sizes: string[];
  colors: string[];
  vendor: string;
  type: string;
  available: boolean;
  images: StaticImageData[];  // <-- Use StaticImageData here
};

const product: Product = {
  name: "Boho Floral Maxi Dress",
  price: 25,
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  sizes: ["S", "M", "L"],
  colors: ["#000000", "#1E40AF", "#991B1B", "#DC2626", "#FACC15", "#10B981"],
  vendor: "Bohemian Bliss",
  type: "Dress",
  available: true,
  images: [Img1, Img2, Img3, Img4],
};

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState<StaticImageData>(product.images[0]);
  const [selectedSize, setSelectedSize] = useState<string>("M");
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left: Main Image + Thumbnails */}
        <div>
          <div className="relative w-full h-[800px] rounded-xl overflow-hidden shadow">
            <Image
              src={selectedImage}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3 mt-4">
            {product.images.map((img, i) => (
              <div
                key={i}
                className={`relative w-20 h-20 border rounded overflow-hidden cursor-pointer 
                  ${selectedImage === img ? "border-black" : "border-gray-300"}`}
                onClick={() => setSelectedImage(img)}
              >
                <Image src={img} alt="thumb" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Product Info */}
        <div>
          <h2 className="text-2xl font-bold">{product.name}</h2>
          <p className="text-xl font-semibold mt-2">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-gray-600 mt-2">{product.description}</p>

          {/* Sizes */}
          <div className="mt-4">
            <p className="font-semibold">Size:</p>
            <div className="flex gap-2 mt-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`border px-4 py-2 rounded transition 
                    ${selectedSize === size ? "bg-black text-white" : "hover:bg-gray-200"}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Colors */}
          <div className="mt-4">
            <p className="font-semibold">Color:</p>
            <div className="flex gap-2 mt-2 flex-wrap">
              {product.colors.map((color, idx) => (
                <div
                  key={idx}
                  className="w-8 h-8 rounded-full cursor-pointer border"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          {/* Quantity + Buttons */}
          <div className="mt-6 flex items-center gap-4">
            <div className="flex border rounded">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-3 py-2"
              >
                -
              </button>
              <span className="px-4 py-2">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-3 py-2"
              >
                +
              </button>
            </div>

            <button className="bg-black text-white px-6 py-3 rounded-lg hover:opacity-90">
              BUY IT NOW
            </button>
            <button className="border px-6 py-3 rounded-lg hover:bg-gray-100">
              ADD TO CART
            </button>
          </div>

          {/* Extra Info */}
          <div className="mt-8 text-gray-700 text-base leading-relaxed">
            <p className="text-lg">
              <strong>Vendor:</strong> {product.vendor}
            </p>
            <p className="text-lg">
              <strong>Type:</strong> {product.type}
            </p>
            <p className="text-lg">
              <strong>Available:</strong>{" "}
              {product.available ? "Yes" : "Out of stock"}
            </p>

            <br />
            <hr className="my-5" />

            {/* Extra Info with Icons */}
            <div className="space-y-3">
              <p className="flex items-center gap-3 text-lg">
                <span className="text-xl">🔒</span> Secure payment
                <span className="ml-6">🏅 2 Year Warranty</span>
              </p>
              <p className="flex items-center gap-3 text-lg">
                <span className="text-xl">👥</span> 19 customers are viewing this product
              </p>
              <p className="flex items-center gap-3 text-lg">
                <span className="text-xl">📦</span> 30 SOLD IN LAST 18 HOURS
              </p>
              <p className="flex items-center gap-3 text-lg">
                <span className="text-xl">🚚</span> Spend $1,000.00 for Free Shipping
              </p>
            </div>

            <hr className="my-5" />

            {/* Social Share */}
            <div className="flex gap-8 text-lg font-medium">
              <button className="hover:text-black">📘 Share</button>
              <button className="hover:text-black">🐦 Tweet</button>
              <button className="hover:text-black">📌 Pin it</button>
            </div>

            <hr className="my-5" />

            {/* Safe Checkout */}
            <div className="text-center">
              <p className="font-semibold text-lg mb-3">Guarantee safe checkout</p>
              <div className="flex justify-center gap-6">
                <Image src={visaCard} alt="Visa" width={60} height={40} />
                <Image src={masterCard} alt="Mastercard" width={60} height={40} />
                <Image src={mestroCard} alt="Maestro" width={60} height={40} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
