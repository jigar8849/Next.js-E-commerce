'use client'
import Image from 'next/image';
import Link from 'next/link';

import Img1 from '../../../../public/assets/Cbag.jpg'
import Img2 from '../../../../public/assets/Cbag2.jpg'

// Array of collection items
const collections = [
  {
    label: 'ACCESSORIES',
    href: '/collections/accessories',
    image: Img1
  },
  {
    label: 'BAGS',
    href: '/collections/bags',
    image: Img2
  },
  // Add more if needed
];

const Collections = () => {
  return (
    <section className="py-16 px-6 text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-12">Our Collections</h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        {collections.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="relative group w-full max-w-md"
          >
            <Image
              src={item.image}
              alt={item.label}
              width={600}
              height={400}
              className="rounded-lg object-cover w-full h-auto"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white text-xl font-semibold transition-opacity group-hover:bg-opacity-60">
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Collections;
