import Hero from '@/components/Pagess/Contactus/Hero'
import CTA from '@/components/Pagess/Contactus/CTA'
import Faq from '@/components/Pagess/Contactus/Faq'
import Contact from '@/components/Pagess/About/Contact'

import React from 'react'

function page() {
  return (
    <div>
        <main className='mt-15'>
        <Hero />
        <CTA />
        <Contact />
        <Faq />

        </main>
    </div>
  )
}

export default page