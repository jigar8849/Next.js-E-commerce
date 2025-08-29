import React from 'react'
import HeroImg from '../../../public/assets/shopBanner.png'
import Image from 'next/image'
function Hero() {
  return (
    <div className='mt-15'>
        <Image 
        src={HeroImg}
        alt='Shop Banner'
        className='w-full object-cover'
        />
    </div>
  )
}

export default Hero