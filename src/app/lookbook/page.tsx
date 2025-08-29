import Comfort from '@/components/Pagess/Lookbook/Comfort'
import Hero from '@/components/Pagess/Lookbook/Hero'
import Twist from '@/components/Pagess/Lookbook/Twist'
import Model from '@/components/Pagess/Lookbook/Model'
import React from 'react'
import Collections from '@/components/Pagess/Lookbook/Collections'
import BestSeller from '@/components/Pagess/Lookbook/BestSeller'
import FeaturedPicks from '@/components/Pagess/Lookbook/FeaturedPicks'

function page() {
  return (
    <div>
        <main className='mt-15'>
            <Hero />
            <Comfort />
            <Twist />
            <Model />
            <Collections />
            <BestSeller />
            <FeaturedPicks />
        </main>
    </div>
  )
}

export default page