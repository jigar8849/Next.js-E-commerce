"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp, Grid, List } from "lucide-react";
import Image from "next/image";

import Img1 from "../../../public/assets/filter1.png"
import Img2 from "../../../public/assets/filter2.png"
import Img3 from "../../../public/assets/filter3.png"
import Img4 from "../../../public/assets/filter4.png"
import Img5 from "../../../public/assets/trandingproduct2.png"
import Img6 from "../../../public/assets/trandingproduct3.png"

const filtersData = [
  {
    id: "availability",
    title: "Availability",
    options: [
      { label: "In stock", count: 5 },
      { label: "Out of stock", count: 4 },
    ],
  },
  {
    id: "price",
    title: "Price",
    options: [
      { label: "$29", count: 0 },
      { label: "$22", count: 0 },
    ],
  },
  {
    id: "size",
    title: "Size",
    options: [
      { label: "Small", count: 0 },
      { label: "Medium", count: 0 },
      { label: "Large", count: 0 },
      { label: "XL", count: 0 },
    ],
  },
  {
    id: "productType",
    title: "Product type",
    options: [
      { label: "Blouse", count: 0 },
      { label: "Boots", count: 1 },
      { label: "Cardigan", count: 0 },
      { label: "Dress", count: 0 },
      { label: "Handbag", count: 1 },
      { label: "Jacket", count: 1 },
      { label: "Jeans", count: 1 },
      { label: "Pants", count: 1 },
      { label: "Scarf", count: 1 },
      { label: "Shirt", count: 0 },
      { label: "Shorts", count: 0 },
      { label: "Suit", count: 0 },
    ],
  },
  {
    id: "brand",
    title: "Brand",
    options: [
      { label: "ActiveLife Gear", count: 0 },
      { label: "Beach Paradise", count: 0 },
      { label: "Black Tie Affairs", count: 0 },
      { label: "Bohemian Bliss", count: 0 },
      { label: "Boho Chic Boutique", count: 1 },
      { label: "Cashmere Cozy", count: 0 },
      { label: "Chic Couture", count: 0 },
      { label: "Coastal Trends", count: 0 },
      { label: "Cozy Knits Co", count: 0 },
      { label: "Dapper Styles", count: 0 },
      { label: "Denim Delight", count: 1 },
      { label: "Modern Man", count: 1 },
      { label: "+ Show more", count: 0 },
    ],
  },
  {
    id: "color",
    title: "Color",
    options: [
      { label: "Red", count: 4 },
      { label: "Black", count: 6 },
      { label: "Blue", count: 3 },
    ],
  },
  {
    id: "moreFilters",
    title: "More filters",
    options: [
      { label: "Accessory", count: 1 },
      { label: "Beach", count: 0 },
      { label: "Beachy", count: 0 },
      { label: "Bohemian", count: 0 },
      { label: "Boho", count: 1 },
      { label: "Boots", count: 1 },
      { label: "Business Casual", count: 0 },
      { label: "Button-down", count: 0 },
      { label: "Cashmere", count: 0 },
      { label: "Casual", count: 2 },
      { label: "Chelsea", count: 1 },
      { label: "Chinos", count: 1 },
      { label: "+ Show more", count: 0 },
    ],
  },
  {
    id: "material",
    title: "Material",
    options: [
      { label: "Cotton", count: 0 },
      { label: "Linen", count: 0 },
      { label: "Satin", count: 0 },
      { label: "Silk", count: 0 },
    ],
  },
];

const products = [
  {
    id: 1,
    title: "Denim Skinny Jeans",
    brand: "Denim Delight",
    price: 21.0,
    image: Img1,
  },
  {
    id: 2,
    title: "Fringe Boho Bag",
    brand: "Boho Chic Boutique",
    price: 15.0,
    image: Img2,
  },
  {
    id: 3,
    title: "Luxury Silk Scarf",
    brand: "Silk Elegance",
    price: 21.0,
    image: Img3,
  },
  {
    id: 4,
    title: "Men's Classic Chino Pants",
    brand: "Modern Man",
    price: 15.0,
    image: Img4,
  },
  {
    id: 5,
    title: "Men's Leather Chelsea Boots",
    brand: "Urban Rugged",
    price: 15.0,
    image: Img5,
  },
  {
    id: 6,
    title: "Quilted Puffer Jacket",
    brand: "WinterWonder Co",
    price: 20.0,
    image: Img6,
  },
];


function Filter() {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>(
    {}
  );

  const toggleSection = (id: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const [view, setView] = useState("grid");
  const [sort, setSort] = useState("az");

  const totalProducts = 17;
  const showing = 6;

  return (
    <div className="flex ">
      <div className="w-[20%] ms-3 p-6 space-y-6 bg-white rounded shadow-2xl">
        {filtersData.map((filter) => (
          <div key={filter.id} className="border-b pb-2">
            {/* Section Header */}
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection(filter.id)}
            >
              <h3 className="font-bold text-xl text-gray-800">
                {filter.title}
              </h3>
              {openSections[filter.id] ? (
                <ChevronUp className="w-5 h-5 text-gray-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-600" />
              )}
            </div>

            {/* Options */}
            {openSections[filter.id] && (
              <div className="mt-3 space-y-2">
                {filter.options.map((option, idx) => (
                  <label
                    key={idx}
                    className="flex items-center space-x-2 text-sm text-black"
                  >
                    <input type="checkbox" className="form-checkbox" />
                    <span>
                      {option.label}{" "}
                      <span className="text-black">({option.count})</span>
                    </span>
                  </label>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="right w-[80%]">
        <div className="flex flex-wrap items-center justify-between gap-4  m-4 shadow-2xl h-20 p-2 rounded-md">
          {/* View Toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setView("grid")}
              className={`p-2 rounded ${
                view === "grid"
                  ? "bg-black text-white"
                  : "text-gray-400 hover:text-black"
              }`}
            >
              <Grid size={18} />
            </button>
            <button
              onClick={() => setView("list")}
              className={`p-2 rounded ${
                view === "list"
                  ? "bg-black text-white"
                  : "text-gray-400 hover:text-black"
              }`}
            >
              <List size={18} />
            </button>
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-sm">Sort By:</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border px-2 py-1 text-sm rounded"
            >
              <option value="az">Alphabetically, A-Z</option>
              <option value="za">Alphabetically, Z-A</option>
              <option value="low-high">Price, Low to High</option>
              <option value="high-low">Price, High to Low</option>
              <option value="new">Newest First</option>
            </select>
          </div>

          {/* Product Count */}
          <div className="text-sm text-gray-600">
            {showing} of {totalProducts} Products
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto p-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-3"
            >
              {/* Product Image */}
              <div className="relative w-full h-80 rounded-lg overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover "
                />
                <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-gray-100">
                  ❤️
                </button>
              </div>

              {/* Product Info */}
              <div className="text-center mt-3">
                <p className="text-sm text-gray-500">{product.brand}</p>
                <h3 className="font-semibold text-lg">{product.title}</h3>
                <p className="text-black font-bold">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Filter;
