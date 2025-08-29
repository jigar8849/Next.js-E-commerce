import Hero from '@/components/Pagess/About/Hero'
import Offers from '@/components/Pagess/About/Offers'
import Banner from '@/components/Pagess/About/Banner'
import Review from '@/components/Pagess/About/Review'
import React from 'react'
import Contact from '@/components/Pagess/About/Contact'

function page() {
  return (
    <div>
        <main className='mt-15'>
            <Hero />
            <Offers />
            <Banner />
            <Review />
            <Contact />
        </main>
    </div>
  )
}

export default page