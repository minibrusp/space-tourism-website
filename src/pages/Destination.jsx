import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { motion } from 'framer-motion'

// components
import Heading from '../components/Heading'
import { HeroDestination } from '../components/Hero'
import { DescriptionDestination } from '../components/Description'
import { TabDestination } from '../components/Tab'




const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'linear', 
      delay: 0.5, 
    }
  },
  exit: {
    x: '-100vh',
    transition: { ease: 'easeInOut' }
  }
}


export default function DestinationLayout() {

  const destinations = useLoaderData()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentDestination, setCurrentDestination ] = useState('')

  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    setCurrentDestination(destinations[currentIndex])
  }, [currentIndex])

  function handleTouchStart(e) {
    setTouchStart(e.targetTouches[0].clientX);
}

function handleTouchMove(e) {
    setTouchEnd(e.targetTouches[0].clientX);
}

function handleTouchEnd() {
    if (touchStart - touchEnd > 150) {
        // do your stuff here for left swipe
        // moveSliderRight();
        if(currentIndex == 0) return
        setCurrentIndex(prev => prev - 1)
    }

    if (touchStart - touchEnd < -150) {
        // do your stuff here for right swipe
        // moveSliderLeft();
        if(currentIndex == (destinations.length - 1)) return
        setCurrentIndex(prev => prev + 1)
    }
}

  return (
    <motion.section className='bg-backgroundDestination bg-cover bg-center h-full pt-[100px] min-h-screen md:bg-backgroundDestinationTablet md:pt-[136px] md:pb-[62px] lg:bg-backgroundDestinationDesktop lg:pt-[190px] xl:px-[83.2px] desktop:px-[11.5783vw]'
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    
    >
      
      <Heading title='Pick your destination' order='01' />
      <div 
        onTouchStart={touchStartEvent => handleTouchStart(touchStartEvent)}
        onTouchMove={touchMoveEvent => handleTouchMove(touchMoveEvent)}
        onTouchEnd={() => handleTouchEnd()}
        className='lg:flex lg:justify-center lg:items-center lg:px-6' 
      >

        <HeroDestination data={currentDestination} current={currentIndex} />

        <div className=''>
          <TabDestination data={destinations} currentData={currentDestination} setCurrentDataIndex={setCurrentIndex} />

          <DescriptionDestination currentData={currentDestination} current={currentIndex} />
        </div>



      </div>
      

      
    </motion.section>
  )
}

// loader function 
// export const DestinationLoader = async () => {
//   const res = await fetch('http://localhost:3000/destinations')

//   if(!res.ok) {
//     throw Error('Could not find that career')
//   }

//   return res.json()
// }


export const DestinationLoader = async () => {
  const res = await fetch(`https://api.jsonbin.io/v3/b/${import.meta.env.VITE_APP_BIN_ID}/latest`, {
    method: 'GET',
    headers: {
      'X-Master-Key': import.meta.env.VITE_MASTER_KEY,
      'Content-Type': 'application/json',
      'X-Bin-Meta': false,
      'X-JSON-Path': '$.destinations.*'
      
    }
  })

  if(!res.ok) {
    throw Error('Could not find that career')
  }

  return res.json()
}