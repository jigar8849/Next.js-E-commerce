import React from 'react'
import Link from "next/link";
import ProductCard from '../AllCardss/Home/TrandingCard';
import women1 from "../../../public/assets/trandingproduct1.png"
import women2 from "../../../public/assets/trandingproduct2.png"
import { Key } from 'lucide-react';
import { title } from 'process';

function Tranding() {

     const products = [
    {
      image: women1,
      brand: "Rosyz",
      title: "Casual Men’s Shirt",
      price: 49.99,
      href: "/products/mens-shirt",
    },
    {
      image: women2,
      brand: "Rosyz",
      title: "Trendy Women’s Dress",
      price: 79.99,
      href: "/products/womens-dress",
    },
    {
      image: women1,
      brand: "Rosyz",
      title: "Summer Sneakers",
      price: 59.99,
      href: "/products/sneakers",
    },
    {
      image: women2,
      brand: "Rosyz",
      title: "Leather Jacket",
      price: 129.99,
      href: "/products/leather-jacket",
    },
    {
      image: women1,
      brand: "Rosyz",
      title: "Classic Denim Jeans",
      price: 69.99,
      href: "/products/denim-jeans",
    },
    {
      image: women2,
      brand: "Rosyz",
      title: "Elegant Handbag",
      price: 89.99,
      href: "/products/handbag",
    },
    {
      image: women1,
      brand: "Rosyz",
      title: "Sports Hoodie",
      price: 54.99,
      href: "/products/sports-hoodie",
    },
    {
      image: women2,
      brand: "Rosyz",
      title: "Luxury Watch",
      price: 199.99,
      href: "/products/luxury-watch",
    },
    {
      image: women1,
      brand: "Rosyz",
      title: "Sunglasses",
      price: 39.99,
      href: "/products/sunglasses",
    },
    {
      image: women2,
      brand: "Rosyz",
      title: "Formal Blazer",
      price: 149.99,
      href: "/products/formal-blazer",
    },
  ];


  return (
    <div>
        <p className='flex items-center justify-center mt-15 mb-5 text-red-500'>STAY AHEAD OF THE FASHION CURVE</p>
        <h2 className='flex items-center justify-center text-5xl font-bold sm:text-2xl md:text-3xl'>Trending Products</h2>
        <div className='flex items-center justify-center gap-9 mt-11 mb-7 text-xl font-semibold'>
            <Link href={"#"} className='hover:underline'>Featured</Link>
            <Link href={"#"} className='hover:underline'>New Arrival</Link>
            <Link href={"#"} className='hover:underline'>Best Seller</Link>
        </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-6 justify-items-center">
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
  )
}

export default Tranding