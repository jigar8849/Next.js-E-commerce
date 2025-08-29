'use client';
import Image, { StaticImageData } from 'next/image'; // ✅ Import StaticImageData

import Img1 from "../../../public/assets/filter1.png";
import Img2 from "../../../public/assets/filter2.png";
import Img3 from "../../../public/assets/filter3.png";
import Img4 from "../../../public/assets/filter4.png";
import Img5 from "../../../public/assets/trandingproduct2.png";

// ✅ Update the type of `image` from `string` to `StaticImageData`
interface Product {
  id: number;
  title: string;
  image: StaticImageData;
  price: number;
  oldPrice?: number;
}

export const relatedProducts: Product[] = [
  {
    id: 1,
    title: "Classic Men's Oxford Shirt",
    image: Img1,
    price: 25.0,
    oldPrice: 32.6,
  },
  {
    id: 2,
    title: "Leather Biker Jacket",
    image: Img2,
    price: 89.99,
    oldPrice: 120.0,
  },
  {
    id: 3,
    title: "Slim Fit Chinos",
    image: Img3,
    price: 40.0,
  },
  {
    id: 4,
    title: "Denim Jacket",
    image: Img4,
    price: 65.0,
    oldPrice: 80.0,
  },
  {
    id: 5,
    title: "Casual Sneakers",
    image: Img5,
    price: 55.0,
  },
];

function Related() {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-center mb-8">Related Products</h2>

      <div className="grid grid-cols-1 md:m-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {relatedProducts.map((product, index) => (
          <div
            key={index}
            className="rounded-xl shadow-xl hover:shadow-lg transition-transform duration-300 hover:-translate-y-2 p-4 text-center"
          >
            {/* Product Image */}
            <Image
              src={product.image}
              alt={product.title}
              width={300}
              height={300}
              className="rounded-lg mx-auto"
            />

            {/* Product Title */}
            <h3 className="mt-4 text-lg font-semibold text-gray-800">
              {product.title}
            </h3>

            {/* Product Price */}
            <p className="mt-2 text-xl font-bold text-gray-900">
              ${product.price}
              {product.oldPrice && (
                <span className="ml-2 text-gray-500 line-through text-base">
                  ${product.oldPrice}
                </span>
              )}
            </p>

            {/* Add to Cart */}
            <button className="mt-4 text-blue-600 hover:underline text-base">
              + Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Related;
