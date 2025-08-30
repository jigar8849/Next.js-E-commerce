import React from "react";
import Image, { StaticImageData } from "next/image";

// Image imports
import Accessories from "../../../public/assets/category_accessories.png";
import Bag from "../../../public/assets/bag.webp";
import Glasses from "../../../public/assets/glasses.webp";
import Men from "../../../public/assets/category_men.png";
import Outerwear from "../../../public/assets/category_outerwear.png";

interface Category {
  id: number;
  name: string;
  count: number;
  image: StaticImageData;
}

const categories: Category[] = [
  { id: 1, name: "Accessories", count: 10, image: Accessories },
  { id: 2, name: "Bags", count: 10, image: Bag },
  { id: 3, name: "Glasses", count: 10, image: Glasses },
  { id: 4, name: "Men", count: 10, image: Men },
  { id: 5, name: "Outerwear", count: 10, image: Outerwear },
];

function Stock() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Grid Layout */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="flex flex-col items-center bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
          >
            {/* Image with Aspect Ratio Box */}
            <div className="w-full aspect-[4/3] relative">
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Text */}
            <div className="py-3 text-center px-2">
              <h3 className="text-base font-semibold text-gray-800">
                {cat.name}{" "}
                <span className="text-sm text-gray-500">({cat.count})</span>
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <hr className="mt-14 border-t border-gray-200" />
    </div>
  );
}

export default Stock;
