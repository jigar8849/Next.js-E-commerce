import React from "react";
import Image from "next/image";

// Import your images from public/assets
import Accessories from "../../../public/assets/category_accessories.png"
import Bag from "../../../public/assets/bag.webp"
import Glasses from '../../../public/assets/glasses.webp'
import Men from "../../../public/assets/category_men.png"
import Outerwear from "../../../public/assets/category_outerwear.png"

interface Category {
  id: number;
  name: string;
  count: number;
  image: any;
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
    <>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-6">
      {categories.map((cat) => (
        <div
          key={cat.id}
          className="flex flex-col items-center rounded-md overflow-hidden shadow hover:shadow-lg transition cursor-pointer"
        >
          <Image
            src={cat.image}
            alt={cat.name}
            className="w-full h-48 object-cover"
          />
          <div className="py-3 text-center">
            <h3 className="text-gray-800 font-medium">
              {cat.name} <span className="text-gray-500">({cat.count})</span>
            </h3>
          </div>
        </div>
      ))}
    </div>
    <hr className="mx-4 text-gray-300" /><br />
    </>
  );
}

export default Stock;
