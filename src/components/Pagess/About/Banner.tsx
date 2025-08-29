"use client";
import Image from "next/image";
import img1 from "../../../../public/assets/timeless_elegance_1.png"; // replace with your image
import img2 from "../../../../public/assets/collection2.jpg"

export default function HeroThree() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT TEXT */}
        <div>
          <p className="text-red-500 uppercase tracking-wide font-medium">
            Unleash Your Unique Style
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Timeless Elegance, Modern Flair
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Indulge in the fusion of timeless classics and modern flair. 
            Our curated selection brings you sophistication with a 
            contemporary twist. Shop now to redefine your style.
          </p>
        </div>

        {/* RIGHT IMAGES */}
        <div className="flex gap-6 justify-center pb-20">
          <Image
            src={img1}
            alt="Modern fashion look"
            className="rounded-lg shadow-lg object-cover w-1/2"
          />
          <Image
            src={img2}
            alt="Elegant style look"
            className="rounded-lg shadow-lg  mt-15 object-cover w-1/2"
          />
        </div>
      </div>
    </section>
  );
}
