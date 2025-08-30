import React from "react";
import Image from "next/image";
import HeroModelImage from "../../../public/assets/hero_image_2.png";

function Hero() {
  return (
    <div className="w-full bg-[#e6dace] flex flex-col-reverse md:flex-row items-center md:justify-between px-6 md:px-24 py-12 md:py-24">
      
      {/* Left Content */}
      <div className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0">
        <p className="text-red-600 text-sm md:text-base">DISCOVER THE LATEST TRENDS</p>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-gray-700 mt-4">
          Elevate Your Style With Our New Collection
        </h1>
        <p className="mt-6 text-base md:text-lg text-gray-600">
          Get ready to turn heads with our exclusive fashion line. Explore the
          season&apos;s hottest trends.
        </p>
        <button className="mt-7 bg-black text-white py-3 px-8 rounded-full text-sm md:text-base">
          Shop Now →
        </button>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src={HeroModelImage}
          alt="HeroModel"
          className="w-72 md:w-[450px] lg:w-[500px] h-auto"
          priority
        />
      </div>
    </div>
  );
}

export default Hero;
