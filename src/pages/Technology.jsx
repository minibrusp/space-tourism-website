import { useLoaderData } from "react-router-dom"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

// components
import Heading from "../components/Heading"
import { HeroTechnology } from "../components/Hero"
import { TabTechnology } from "../components/Tab"
import { DescriptionTechonology } from "../components/Description"

const containerVariants = {
  hidden: {
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


export default function Technology() {
  const technology = useLoaderData()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentTechnology, setCurrentTechnology ] = useState('')

  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

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
        if(currentIndex == (technology.length - 1)) return
        setCurrentIndex(prev => prev + 1)
    }
}


  useEffect(() => {
    setCurrentTechnology(technology[currentIndex])
  }, [currentIndex])

  return (
    <motion.section className='bg-backgroundTechnology bg-cover bg-center h-full pt-[100px] pb-8 min-h-screen md:bg-backgroundTechnologyTablet md:pt-[136px] md:pb-[97px] lg:bg-backgroundTechnologyDesktop lg:pb-0 lg:pt-[190px] xl:pl-[83.2px] '
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      
      <Heading title='Space launch 101' order='03' />

      <div
        onTouchStart={touchStartEvent => handleTouchStart(touchStartEvent)}
        onTouchMove={touchMoveEvent => handleTouchMove(touchMoveEvent)}
        onTouchEnd={() => handleTouchEnd()}
        className="lg:flex lg:justify-center lg:items-center lg:flex-row-reverse lg:ml-9"
      >
        <HeroTechnology data={currentTechnology} current={currentIndex} />
        
        <div className="lg:flex lg:justify-center lg:items-center lg:flex-row">
          <TabTechnology data={technology} currentData={currentTechnology} setCurrentDataIndex={setCurrentIndex} />

          <DescriptionTechonology currentData={currentTechnology} current={currentIndex} />
        </div>
      </div>

    </motion.section>
  )
}

// loader function 
// export const TechnologyLoader = async () => {
//   const res = await fetch('http://localhost:3000/technology')

//   if(!res.ok) {
//     throw Error('Could not find that career')
//   }

//   return res.json()
// }

export const TechnologyLoader = async () => {
  const res = await fetch(`https://api.jsonbin.io/v3/b/${import.meta.env.VITE_APP_BIN_ID}/latest1`, {
    method: 'GET',
    headers: {
      'X-Master-Key': import.meta.env.VITE_MASTER_KEY,
      'Content-Type': 'application/json',
      'X-Bin-Meta': false,
      'X-JSON-Path': '$.technology.*'
      
    }
  })

  if(!res.ok) {
    throw Error(res.status)
  }

  return res.json()
}
