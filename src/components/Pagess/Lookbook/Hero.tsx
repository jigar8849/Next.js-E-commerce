"use client";

import Image from "next/image";
import HeroImg1 from "../../../../public/assets/category_women.png"; // replace with your image path
import HeroImg2 from "../../../../public/assets/glasses.webp"; // replace with your image path

export default function Hero() {
  return (
    <section className="py-16 bg-white text-center">
      <div className="max-w-4xl mx-auto px-4">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
          Chase the Seasons in Style
        </h1>

        {/* Subtext */}
        <p className="text-gray-600 text-base md:text-lg mb-12">
          Update your wardrobe with the latest seasonal trends. From cozy knits
          to stylish layers.
        </p>

        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="w-full">
            <Image
              src={HeroImg1}
              alt="Season style 1"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="w-full">
            <Image
              src={HeroImg2}
              alt="Season style 2"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
