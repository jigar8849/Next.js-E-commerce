import React from 'react';
import Link from "next/link";
import ProductCard from '../AllCardss/Home/TrandingCard';
import women1 from "../../../public/assets/trandingproduct1.png";
import women2 from "../../../public/assets/trandingproduct2.png";

function Tranding() {
  const products = [
    { image: women1, brand: "Rosyz", title: "Casual Mens Shirt", price: 49.99, href: "/products/mens-shirt" },
    { image: women2, brand: "Rosyz", title: "Trendy Womens Dress", price: 79.99, href: "/products/womens-dress" },
    { image: women1, brand: "Rosyz", title: "Summer Sneakers", price: 59.99, href: "/products/sneakers" },
    { image: women2, brand: "Rosyz", title: "Leather Jacket", price: 129.99, href: "/products/leather-jacket" },
    { image: women1, brand: "Rosyz", title: "Classic Denim Jeans", price: 69.99, href: "/products/denim-jeans" },
    { image: women2, brand: "Rosyz", title: "Elegant Handbag", price: 89.99, href: "/products/handbag" },
    { image: women1, brand: "Rosyz", title: "Sports Hoodie", price: 54.99, href: "/products/sports-hoodie" },
    { image: women2, brand: "Rosyz", title: "Luxury Watch", price: 199.99, href: "/products/luxury-watch" },
    { image: women1, brand: "Rosyz", title: "Sunglasses", price: 39.99, href: "/products/sunglasses" },
    { image: women2, brand: "Rosyz", title: "Formal Blazer", price: 149.99, href: "/products/formal-blazer" },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      
      {/* Subheading */}
      <p className="text-center text-sm md:text-base text-red-500 uppercase tracking-widest">
        Stay Ahead Of The Fashion Curve
      </p>

      {/* Main Heading */}
      <h2 className="text-center text-3xl md:text-4xl font-bold mt-3">
        Trending Products
      </h2>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-6 mt-8 text-lg font-medium text-gray-700">
        <Link href="#" className="hover:underline transition">Featured</Link>
        <Link href="#" className="hover:underline transition">New Arrival</Link>
        <Link href="#" className="hover:underline transition">Best Seller</Link>
      </div>

      {/* Product Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            brand={product.brand}
            title={product.title}
            price={product.price}
            href={product.href}
          />
        ))}
      </div>
    </div>
  );
}

export default Tranding;
