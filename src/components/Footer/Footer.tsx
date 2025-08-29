"use client";
import { Facebook, Twitter, Instagram, ChevronUp } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#121a26] text-white">
      {/* Newsletter Section */}
      <div className="text-center py-12 px-6">
        <h2 className="text-3xl font-semibold mb-6">
          Fashion Forward: Stay In The Know <br /> With Our Newsletter
        </h2>
        <div className="flex justify-center max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow px-4 py-3 rounded-l-lg text-black bg-white outline-none"
          />
          <button className="bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded-r-lg font-semibold">
            SUBSCRIBE
          </button>
        </div>
      </div>

      {/* Footer Links */}
      <div className="border-t border-gray-700 py-12 px-6 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Get in Touch */}
        <div>
          <h3 className="text-red-500 font-bold mb-4">GET IN TOUCH</h3>
          <p className="text-gray-300">T: +(08) 9055 0269</p>
          <p className="text-gray-300">E: example@example.com</p>
          <p className="text-gray-300 mt-2">
            50 Parana Place, West Casuarinas, <br />
            Western Australia, Australia.
          </p>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-red-500 font-bold mb-4">CATEGORIES</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Accessories</li>
            <li>Bags</li>
            <li>Glasses</li>
            <li>Men</li>
            <li>Outerwear</li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="text-red-500 font-bold mb-4">INFORMATION</h3>
          <ul className="space-y-2 text-gray-300">
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Returns Policy</li>
            <li>Shipping Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-red-500 font-bold mb-4">QUICK LINKS</h3>
          <ul className="space-y-2 text-gray-300">
            <li>My Account</li>
            <li>My Cart</li>
            <li>Size Chart</li>
            <li>Wishlist</li>
            <li>Gift Card</li>
          </ul>
        </div>

        {/* Logo / About */}
        <div>
          <h3 className="text-3xl font-bold mb-4">Rosyz.</h3>
          <p className="text-gray-300 text-sm mb-4">
            Rosyz Shopify is a dynamic and innovative online retail platform
            that offers a wide range of products to customers worldwide.
          </p>
          <div className="flex space-x-4">
            <a href="#"><Facebook className="w-5 h-5" /></a>
            <a href="#"><Twitter className="w-5 h-5" /></a>
            <a href="#"><Instagram className="w-5 h-5" /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 px-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
        {/* Currency Selector */}
        <select className="bg-[#1a2232] text-white px-3 py-2 rounded mb-3 md:mb-0">
          <option>🇸🇬 Singapore (USD $)</option>
          <option>🇮🇳 India (INR ₹)</option>
          <option>🇺🇸 USA (USD $)</option>
          <option>🇬🇧 UK (GBP £)</option>
        </select>

        {/* Copyright */}
        <p className="mb-3 md:mb-0">
          Copyright © 2025 <span className="text-white font-semibold">JP&apos;s Fashion.</span> All rights reserved
        </p>

       

        {/* Scroll to Top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-white text-black p-2 rounded-full shadow hover:scale-110 transition"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      </div>
    </footer>
  );
}
