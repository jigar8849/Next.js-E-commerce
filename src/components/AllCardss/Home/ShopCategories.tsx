import React from 'react'
import Image from "next/image";

function Categories({img, title}) {
  return (
    <div className='flex flex-col items-center mt-15 mx-5'>
      <div className="w-40 h-40 overflow-hidden rounded-full flex items-center justify-center shadow-lg">
        <Image src={img} alt="images" />
        
      </div>
      <h1 className='mt-4 text-xl text-gray-600 font-bold'>{title}</h1>
    </div>
  )
}

export default Categories