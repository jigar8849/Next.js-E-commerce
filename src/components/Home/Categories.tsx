import React from "react";
import ShopCategories from "@/components/AllCardss/Home/ShopCategories";
import Men from "../../../public/assets/category_men.png";
import Women from "../../../public/assets/category_women.png";
import Accessories from "../../../public/assets/category_accessories.png";
import Outerwear from "../../../public/assets/category_outerwear.png";
import Shoes from "../../../public/assets/category_shoes.png";

function Categories() {
  const categoriesDetails = [
    { img: Men, title: "Men" },
    { img: Women, title: "Women" },
    { img: Accessories, title: "Accessories" },
    { img: Outerwear, title: "Outerwear" },
    { img: Shoes, title: "Shoes" },
  ];

  return (
    <div className="w-full px-6 py-16 flex flex-col justify-center items-center bg-white">
      {/* Section Title */}
      <p className="text-pink-600 text-sm md:text-base tracking-widest uppercase">
        Our Exclusive Collections
      </p>
      <h1 className="text-3xl md:text-5xl font-bold text-center mt-3">
        Shop By Categories
      </h1>

      {/* Responsive Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-full max-w-7xl">
        {categoriesDetails.map((category, index) => (
          <ShopCategories
            key={index}
            img={category.img}
            title={category.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Categories;
