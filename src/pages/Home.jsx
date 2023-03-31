import React from 'react'

// components
import Button from '../components/Button'

export default function Home() {
  return (
    <section className='p-6 pt-[112px] bg-backgroundHome bg-cover bg-center h-[100vh]'>
      <h1 className='font-barlowCondensed tracking-[0.16875rem] text-primary uppercase'>So, you want to travel to 
        <span className='font-bellefair block text-white leading-[100px] text-[80px] mt-[.75rem] mb-4'>Space</span>
      </h1>


      <p className='leading-[25px] mx-auto max-w-[445px]'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>

      <Button />
      
    </section>
  )
}
