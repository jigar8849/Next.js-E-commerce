"use client";
import React from "react";
import Link from "next/link";
import { FaSearch, FaUser, FaShoppingBag } from "react-icons/fa";

function Navbar() {
  return (
    <div className="flex justify-between items-center h-15 fixed top-0 left-0 w-full shadow-md bg-white z-50 px-6">
      <div className="title text-2xl font-bold">JP&apos;s Fashions</div>

      {/* Navigation Links */}
      <div className="nav-routes flex gap-6 text-xl font-bold text-gray-600 relative">
        <Link href="/">Home</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/product">Product</Link>
        <Link href="/blog">Blog</Link>

        {/* Dropdown for Pages */}
        <div className="relative group">
          <button className="cursor-pointer">Pages</button>

          {/* Dropdown - stays open while hovering */}
          <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg overflow-hidden hidden group-hover:block">
            <li className="px-4 py-2 hover:bg-gray-100">
              <Link href="/about">About</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100">
              <Link href="/faqs">FAQS</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100">
              <Link href="/lookbook">Lookbook</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100">
              <Link href="/contact">Contact Us</Link>
            </li>
            
          </ul>
        </div>

        <Link href="/buy">Buy Now</Link>
      </div>

      {/* Features */}
      <div className="features flex gap-5 text-xl text-gray-700">
        <select
          name="currency"
          className="border rounded px-1 py-0.5"
        >
          <option value="INR">INR ₹</option>
          <option value="USD">USD $</option>
          <option value="EUR">EUR €</option>
          <option value="SGD">SGD S$</option>
        </select>
        <FaSearch className="cursor-pointer" />
        <FaUser className="cursor-pointer" />
        <FaShoppingBag className="cursor-pointer" />
      </div>
    </div>
  );
}

export default Navbar;
