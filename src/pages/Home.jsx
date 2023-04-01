import React from 'react'
import { motion } from 'framer-motion'

// components
import Button from '../components/Button'

const containerVariants = {
  hidden: {
    x: '100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring', 
      delay: 0.5, 
    }
  },
  exit: {
    x: '-100vh',
    transition: { ease: 'easeInOut' }
  }
}

export default function Home() {
  return (
    <motion.section className='p-6 pt-[112px] bg-backgroundHome bg-cover bg-center min-h-screen md:bg-backgroundHomeTablet md:pt-[202px] lg:bg-backgroundHomeDesktop lg:flex lg:justify-between lg:items-center lg:px-[8vw] desktop:px-[11.4583vw]'
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      
      <div className='lg:text-left'>
        <h1 className='font-barlowCondensed tracking-[0.16875rem] text-primary uppercase md:text-xl lg:text-[28px] lg:tracking-[4.72px]'>So, you want to travel to 
          <span className='font-bellefair block text-white leading-[100px] text-[80px] mt-[.75rem] mb-4 md:text-[150px] md:my-12 '>Space</span>
        </h1>


        <p className='leading-[25px] mx-auto max-w-[445px] md:leading-7 lg:m-0 lg:leading-[32px] lg:text-lg'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
      </div>

      <Button />
      
    </motion.section>
  )
}
