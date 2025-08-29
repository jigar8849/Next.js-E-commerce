'use client'
import Image from 'next/image';

import Img1 from '../../../../public/assets/glasses.webp'
import Img2 from '../../../../public/assets/category_women.png'
import Img3 from '../../../../public/assets/category_men.png'


const featuredItems = [
  {
    title: 'Wardrobe Essentials',
    subtitle: 'Timeless Pieces for Every Occasion',
    image: Img1,
  },
  {
    title: 'Fashion Forward Fitness',
    subtitle: 'Activewear that Moves with You',
    image: Img2,
  },
  {
    title: 'Seasonal Splendor',
    subtitle: 'Fall in Love with Autumn Fashion',
    image: Img3,
  },
];

const FeaturedPicks = () => {
  return (
    <section className="py-16 px-4 text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Picks of the Week</h2>
      <p className="text-gray-600 mb-12">
        Indulge in our carefully curated selection of the week&apos;s finest.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {featuredItems.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-full h-[400px] relative">
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-900">{item.title}</h3>
            <p className="text-gray-600">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedPicks;
