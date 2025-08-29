import Hero from '@/components/Product/Hero'
import Related from '@/components/Product/Related'
import React from 'react'

function page() {
  return (
    <div className='mt-15'>
        <main>
            <Hero />
            <Related />
        </main>
    </div>
  )
}

export default page