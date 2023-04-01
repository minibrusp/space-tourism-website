import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

// components
import Heading from '../components/Heading'
import { HeroDestination } from '../components/Hero'
import { DescriptionDestination } from '../components/Description'
import { TabDestination } from '../components/Tab'

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
    <section className='bg-backgroundDestination bg-cover bg-center h-full pt-[100px] min-h-screen md:bg-backgroundDestinationTablet md:pt-[136px] md:pb-[62px]'>
      
        <Heading title='Pick your destination' order='01' />
      <div 
        onTouchStart={touchStartEvent => handleTouchStart(touchStartEvent)}
        onTouchMove={touchMoveEvent => handleTouchMove(touchMoveEvent)}
        onTouchEnd={() => handleTouchEnd()}
      >

        <HeroDestination data={currentDestination} />

        <TabDestination data={destinations} currentData={currentDestination} setCurrentDataIndex={setCurrentIndex} />

        <DescriptionDestination currentData={currentDestination} />


      </div>
      

      
    </section>
  )
}

// loader function 
export const DestinationLoader = async () => {
  const res = await fetch('http://localhost:3000/destinations')

  if(!res.ok) {
    throw Error('Could not find that career')
  }

  return res.json()
}
