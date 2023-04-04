import { useState, useEffect } from "react"
import { useLoaderData } from "react-router-dom"
import { motion } from 'framer-motion'

// components 
import Heading from "../components/Heading"
import { HeroCrew } from "../components/Hero"
import { TabCrew } from "../components/Tab"
import { DescriptionCrew } from "../components/Description"


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


export default function Crew() {

  const crews = useLoaderData()
  const [ currentIndex, setCurrentIndex ] = useState(0)
  const [ currentCrew, setCurrentCrew ] = useState('')

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
          if(currentIndex == (crews.length - 1)) return
          setCurrentIndex(prev => prev + 1)
      }
  }

  useEffect(() => {
    setCurrentCrew(crews[currentIndex])
  }, [currentIndex])


  return (
    <motion.section className='bg-backgroundCrew bg-cover bg-center h-full pt-[100px] pb-8 min-h-screen md:bg-backgroundCrewTablet md:pt-[136px] lg:pt-[190px] lg:bg-backgroundCrewDesktop xl:px-[83.2px] desktop:px-[11.5783vw]'
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      
      <Heading title='Meet your crew' order='02' />

      <div className=" md:flex md:justify-s md:items-center md:flex-col-reverse md:gap-10 lg:justify-between lg:flex-row-reverse lg:mx-9 desktop:mx-0 desktop:gap-0" 
        onTouchStart={e => handleTouchStart(e)}
        onTouchMove={e => handleTouchMove(e)}
        onTouchEnd={() => handleTouchEnd()}
      >
        <HeroCrew data={currentCrew} current={currentIndex} />
        <div className="lg:flex lg:justify-center lg:items-start lg:flex-col-reverse lg:gap-6 lg:text-left desktop:gap-[167px]">
          <TabCrew data={crews} currentData={currentCrew} setCurrentDataIndex={setCurrentIndex} />
          <DescriptionCrew currentData={currentCrew} current={currentIndex} />

        </div>
      </div>

      


    </motion.section>
  )
}


// loader function 
// export const CrewLoader = async () => {
//   const res = await fetch('http://localhost:3000/crew')

//   if(!res.ok) {
//     throw Error('Could not find that career')
//   }

//   return res.json()
// }

export const CrewLoader = async () => {
  const res = await fetch(`https://api.jsonbin.io/v3/b/${import.meta.env.VITE_APP_BIN_ID}/latest`, {
    method: 'GET',
    headers: {
      'X-Master-Key': import.meta.env.VITE_MASTER_KEY,
      'Content-Type': 'application/json',
      'X-Bin-Meta': false,
      'X-JSON-Path': '$.crew.*'
      
    }
  })

  if(!res.ok) {
    throw Error(res.status)
  }

  return res.json()
}
