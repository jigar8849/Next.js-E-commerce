// Hero.tsx
'use client';

import Image from 'next/image';

const Hero = () => {
  return (
    <section className="flex mt-10 flex-col md:flex-row items-center  bg-gray-100 p-8 md:p-16 max-w-7xl mx-auto">
      {/* Left Image */}
      <div className="w-full md:w-1/2 relative h-80 md:h-[550px]">
        <Image
          src="/assets/contact_hero.png" // replace with your actual image path
          alt="Group of women"
          fill
          className="object-cover rounded-lg"
          priority
        />
      </div>

      {/* Right Text Content */}
      <div className="w-full md:w-1/2 bg-gray-100 px-4 md:px-12 py-8">
        <p className="text-sm uppercase text-pink-500 tracking-widest mb-4">Timeless Elegance, Modern Charm</p>
        <h1 className="text-4xl md:text-5xl font-light leading-tight mb-6 text-gray-900">
          Indulge in Timeless Classics with a Modern Twist
        </h1>
        <p className="text-gray-700 max-w-md">
          Embrace the allure of timeless fashion with our collection of modern classics. From essential basics to statement pieces, redefine elegance with a contemporary touch.
        </p>
      </div>
    </section>
  );
};

export default Hero;
