"use client";
import Image from "next/image";
import Link from "next/link";

import Img1 from '../../../../public/assets/category_women.png'
import Img2 from '../../../../public/assets/about1.webp'


// Array of hero sections
const heroData = [
  {
    subtitle: "Fall Into Fashion",
    title: "Upgrade Your Wardrobe for the Season",
    description:
      "Experience the luxury of comfort without compromising on glamour. Our fashion pieces seamlessly blend style and ease, ensuring you feel confident every day.",
    buttonText: "Shop Now",
    buttonLink: "/shop",
    image: Img1,
    reverse: false, // image on RIGHT
  },
  {
    subtitle: "Luxe Comfort, Everyday Glam",
    title: "Style that Speaks Comfort and Glamour",
    description:
      "Experience the luxury of comfort without compromising on glamour. Our fashion pieces seamlessly blend style and ease, ensuring you feel confident every day.",
    buttonText: "Discover Now",
    buttonLink: "/discover",
    image: Img2,
    reverse: true, // image on LEFT
  },
];

const Hero: React.FC = () => {
  return (
    <>
      {heroData.map((item, index) => (
        <section
          key={index}
          className={`flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-white ${
            item.reverse ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Text Section */}
          <div className="flex-1 text-center md:text-left mb-10 md:mb-0">
            <p className="text-sm tracking-widest text-red-500 uppercase mb-2">
              {item.subtitle}
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-snug mb-6">
              {item.title}
            </h1>
            <p className="text-gray-600 mb-6">{item.description}</p>

            {item.buttonLink && (
              <Link
                href={item.buttonLink}
                className="inline-block px-6 py-3 border border-gray-900 rounded-full text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition"
              >
                {item.buttonText}
              </Link>
            )}
          </div>

          {/* Image Section */}
          <div className="flex-1 flex justify-center">
            <Image
              src={item.image}
              alt={item.title}
              width={500}
              height={500}
              className="object-cover rounded-lg"
            />
          </div>
        </section>
      ))}
    </>
  );
};

export default Hero;
