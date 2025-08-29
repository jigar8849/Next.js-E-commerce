import React from "react";
import ShopCategories from "@/components/AllCardss/Home/ShopCategories"
import Men from "../../../public/assets/category_men.png";
import Women from "../../../public/assets/category_women.png";
import Accessories from "../../../public/assets/category_accessories.png";
import Outerwear from "../../../public/assets/category_outerwear.png";
import Shoes from "../../../public/assets/category_shoes.png";


function Categories() {
  const categoriesDetails = [
    {
      img: Men,   // ✅ fixed image reference
      title: "Men"
    },
     {
      img: Women,   // ✅ fixed image reference
      title: "Women"
    },
     {
      img: Accessories,   // ✅ fixed image reference
      title: "Accessories"
    },
     {
      img: Outerwear,   // ✅ fixed image reference
      title: "Outerwear"
    },
     {
      img: Shoes,   // ✅ fixed image reference
      title: "Shoes"
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mt-15 text-pink-600 text-lg">
        <p>OUR EXCLUSIVE COLLECTIONS</p>
      </div>

      <div className="text-5xl font-bold mt-4">
        <h1>Shop By Categories</h1>
      </div>

      <div className="flex flex-wrap">
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
