import React from "react";

import reviewImg1 from "../../../public/assets/review1.png";
import reviewImg2 from "../../../public/assets/review2.png";
import reviewImg3 from "../../../public/assets/review3.png";
import { Star } from "lucide-react";
import Image from "next/image";
function Review() {
  const testimonials = [
    {
      id: 1,
      text: `"I've Shopped At Many Online Fashion Stores, But Rosyz Is Truly Exceptional. Their Quality And Style Are Unmatched. I Keep Coming Back For More!"`,
      subtext: "I keep coming back for more!",
      name: "Emily Johnson",
      role: "Fashion Enthusiast",
      image: reviewImg1,
    },
    {
      id: 2,
      text: `"Rosyz Is My Go-To For The Latest Fashion Trends. Their Collection Is Always Up-To-Date, And The Shopping Experience Is A Breeze. I Recommend Them To All My Friends."`,
      subtext: "I recommend them to all my friends.",
      name: "David Smith",
      role: "Trendsetter",
      image: reviewImg2,
    },
    {
      id: 3,
      text: `"I've Had The Pleasure Of Collaborating With Rosyz Multiple Times. Their Commitment To Style And Quality Is Evident In Every Piece They Offer."`,
      subtext: "It's the perfect fashion store",
      name: "Sarah Anderson",
      role: "Fashion Blogger",
      image: reviewImg3,
    },
  ];

  return (
    <div>
      <p className="flex items-center justify-center mt-10 mb-5 text-red-500 sm:text-sm md:pt-10 md:text-xl">
        SUB TITLE TOP{" "}
      </p>
      <h2 className="flex items-center justify-center text-5xl font-semibold sm:text-2xl md:text-6xl md:font-semibold">
        From The People
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-10">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col"
          >
            {/* Stars */}
            <div className="flex mb-3 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-yellow-500 stroke-yellow-500"
                />
              ))}
            </div>

            {/* Quote */}
            <p className="italic text-gray-700">{t.text}</p>
            <p className="mt-3 text-gray-600">{t.subtext}</p>

            {/* User info */}
            <div className="flex items-center mt-6">
              <Image
                src={t.image}
                alt={t.name}
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
              <div className="ml-3">
                <h4 className="font-semibold">{t.name}</h4>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Review;
