import React from "react";
import Image from "next/image";
import HeroModelImage from "../../../public/assets/hero_image_2.png"

function Hero() {
  return (
    <div className=" w-full h-full flex bg-[#e6dace]">
      <div className="left w-160  mt-35 ms-40">
        <p className="text-red-600 mt-5">DISCOVER THE LATEST TRENDS</p>
        <h1 className="text-6xl text-gray-600 mt-5">
          Elevate Your Style With Our New Collection
        </h1>
        <p className="mt-4 text-xl text-gray-600 mt-10">
          Get ready to turn heads with our exclusive fashion line. Explore the
          season&apos;s hottest trends.
        </p>
        <button className="mt-7 bg-black text-white p-5 rounded-4xl px-11">Shot Now →</button>
      </div>
      <div className="right ms-20">
        {/* <img src={HeroModelImage} alt="hero" className="h-170" /> */}
        <Image src={HeroModelImage} alt="HeroModel" className="mt-15 h-160 w-fit"/>
      </div>
    </div>
  );
}

export default Hero;
