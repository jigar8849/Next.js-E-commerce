import Filter from '@/components/Shop/Filter'
import Hero from '@/components/Shop/Hero'
import Stock from '@/components/Shop/Stock'

import React from 'react'

function page() {
  return (
    <main>
        <Hero />
        <Stock />
        <Filter />
    </main>
  )
}

export default page