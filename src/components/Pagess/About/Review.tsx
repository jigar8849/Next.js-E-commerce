"use client";
import Image from "next/image";

import user1 from "../../../../public/assets/follow1.png"; // replace with your images
import user2 from "../../../../public/assets/review2.png";
import user3 from "../../../../public/assets/review3.png";

const testimonials = [
  {
    img: user1,
    name: "Emily Johnson",
    role: "Fashion Enthusiast",
    rating: 5,
    title: "Perfect !",
    feedback:
      "I've shopped at many online fashion stores, but Rosyz is truly exceptional. Their quality and style are unmatched. I keep coming back for more!",
  },
  {
    img: user2,
    name: "David Smith",
    role: "Trendsetter",
    rating: 5,
    title: "Awesome !",
    feedback:
      "Rosyz is my go-to for the latest fashion trends. Their collection is always up-to-date, and the shopping experience is a breeze. I recommend them to all my friends.",
  },
  {
    img: user3,
    name: "Sarah Anderson",
    role: "Fashion Blogger",
    rating: 5,
    title: "Amazing !",
    feedback:
      "I've had the pleasure of collaborating with Rosyz multiple times. Their commitment to style and quality is evident in every piece they offer.",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex text-yellow-500">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        What Our Customers Say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition"
          >
            <Image
              src={t.img}
              alt={t.name}
              className="w-16 h-16 rounded-full object-cover mb-3"
            />
            <h3 className="font-semibold text-lg">{t.name}</h3>
            <p className="text-sm text-gray-500">{t.role}</p>
            <StarRating count={t.rating} />

            <h4 className="mt-4 font-bold">{t.title}</h4>
            <p className="text-gray-600 italic mt-2">"{t.feedback}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}
