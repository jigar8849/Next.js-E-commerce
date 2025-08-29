import React from "react";
import Image from "next/image";

import followImg1 from '../../../public/assets/follow1.png'
import followImg2 from '../../../public/assets/follow2.png'
import followImg3 from '../../../public/assets/follow3.png'
import followImg4 from '../../../public/assets/follow4.png'
import followImg5 from '../../../public/assets/follow5.png'
import followImg6 from '../../../public/assets/blog_post_3.png'
import followImg7 from '../../../public/assets/trandingproduct3.png'

function Follow() {

    const images = [
        followImg1,
        followImg2,
        followImg3,
        followImg4,
        followImg5,
        followImg6,
        followImg7,

];

  return (
    <div>
      <h2 className="flex items-center justify-center text-5xl font-semibold mt-10 sm:text-2xl md:text-6xl md:font-semibold">
       Follow Us
      </h2>

      <p className="flex items-center justify-center mb-5 text-red-500 sm:text-sm md:pt-10 md:text-xl">
       @JP_Fashion_Store
      </p>

       <div className="overflow-hidden w-full py-6">
      <div className="flex animate-marquee space-x-6">
        {images.concat(images).map((src, i) => ( // duplicate for seamless loop
          <Image
            key={i}
            src={src}
            alt={`Image ${i}`}
            width={200}
            height={200}
            className="rounded-lg object-cover flex-shrink-0"
          />
        ))}
      </div>
    </div>
    </div>
  );
}

export default Follow;
