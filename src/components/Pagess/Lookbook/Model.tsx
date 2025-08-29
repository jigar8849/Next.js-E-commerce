'use client';

import React from 'react';
import Image from 'next/image';
import ModelImage from '../../../../public/assets/category_outerwear.png'; // Adjust path accordingly

const Timeless: React.FC = () => {
  return (
    <section className="bg-[#F7E8E7] py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* Image with red background on left side */}
        <div className="relative w-full md:w-[45%] flex justify-center bg-[#D94F57] px-4 md:px-0">
          <div className="w-[90%] max-w-[400px]">
            <Image
              src={ModelImage}
              alt="Timeless Fashion"
              className="object-cover w-full h-auto"
              width={500}
              height={500}
              priority
            />
          </div>
        </div>

        {/* Right content section */}
        <div className="w-full md:w-[55%] px-8 mt-10 md:mt-0 text-center md:text-left">
          <p className="text-sm uppercase text-[#D94F57] tracking-widest font-semibold">
            Fashion Forward Fitness
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mt-4 leading-snug">
            Timeless Pieces For Every Occasion
          </h2>
          <p className="text-gray-600 mt-6 max-w-xl mx-auto md:mx-0">
            Build a wardrobe that speaks volumes. Explore our collection of timeless essentials,
            perfect for every occasion. From casual chic to formal elegance.
          </p>
          <button className="mt-8 px-6 py-3 border border-black text-sm font-medium rounded-full hover:bg-black hover:text-white transition duration-300">
            DISCOVER NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default Timeless;
