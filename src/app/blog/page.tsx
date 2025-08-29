import BlogCards from '@/components/Blog/BlogCards'
import Hero from '@/components/Blog/Hero'
import React from 'react'

function page() {
  return (
    <div>
        <main className='mt-15'>
            <Hero />
            <BlogCards />
        </main>
    </div>
  )
}

export default page