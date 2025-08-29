// ✅ src/components/AllCardss/Home/Categories.tsx

import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface CategoriesProps {
  img: StaticImageData;
  title: string;
}

function Categories({ img, title }: CategoriesProps) {
  return (
    <div className="flex flex-col items-center mt-15 mx-5">
      <div className="w-40 h-40 overflow-hidden rounded-full flex items-center justify-center shadow-lg">
        <Image src={img} alt={title} width={160} height={160} className="object-cover rounded-full" />
      </div>
      <h1 className="mt-4 text-xl text-gray-600 font-bold">{title}</h1>
    </div>
  );
}

export default Categories;
