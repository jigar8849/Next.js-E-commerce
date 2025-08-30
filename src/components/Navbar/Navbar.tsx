"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaSearch, FaUser, FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex justify-between items-center h-16 px-6">
        <div className="text-2xl font-bold">JP&apos;s Fashions</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 text-lg font-bold text-gray-600 items-center">
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/product">Product</Link>
          <Link href="/blog">Blog</Link>

          {/* Dropdown for Pages */}
          <div className="relative group">
            <button className="cursor-pointer">Pages</button>
            <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg overflow-hidden hidden group-hover:block z-50">
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
        <div className="hidden md:flex gap-5 text-xl text-gray-700 items-center">
          <select name="currency" className="border rounded px-1 py-0.5">
            <option value="INR">INR ₹</option>
            <option value="USD">USD $</option>
            <option value="EUR">EUR €</option>
            <option value="SGD">SGD S$</option>
          </select>
          <FaSearch className="cursor-pointer" />
          <FaUser className="cursor-pointer" />
          <FaShoppingBag className="cursor-pointer" />
        </div>

        {/* Hamburger Button (Mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md z-40">
          <div className="flex flex-col gap-4 text-lg font-semibold text-gray-700 px-6 py-4">
            <Link href="/" onClick={closeMenu}>Home</Link>
            <Link href="/shop" onClick={closeMenu}>Shop</Link>
            <Link href="/product" onClick={closeMenu}>Product</Link>
            <Link href="/blog" onClick={closeMenu}>Blog</Link>

            {/* Pages dropdown simplified for mobile */}
            <details className="group">
              <summary className="cursor-pointer">Pages</summary>
              <div className="pl-4 mt-2 flex flex-col gap-2">
                <Link href="/about" onClick={closeMenu}>About</Link>
                <Link href="/faqs" onClick={closeMenu}>FAQS</Link>
                <Link href="/lookbook" onClick={closeMenu}>Lookbook</Link>
                <Link href="/contact" onClick={closeMenu}>Contact Us</Link>
              </div>
            </details>

            <Link href="/buy" onClick={closeMenu}>Buy Now</Link>

            {/* Mobile Features */}
            <div className="flex gap-4 items-center mt-4">
              <select name="currency" className="border rounded px-2 py-1">
                <option value="INR">INR ₹</option>
                <option value="USD">USD $</option>
                <option value="EUR">EUR €</option>
                <option value="SGD">SGD S$</option>
              </select>
              <FaSearch />
              <FaUser />
              <FaShoppingBag />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
