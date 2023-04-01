import { useState, useEffect } from "react"
import { useLoaderData } from "react-router-dom"

// components 
import Heading from "../components/Heading"
import { HeroCrew } from "../components/Hero"
import { TabCrew } from "../components/Tab"
import { DescriptionCrew } from "../components/Description"

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
    <section className='bg-backgroundCrew bg-cover bg-center h-full pt-[100px] min-h-screen md:bg-backgroundCrewTablet md:pt-[136px]'>
      
      <Heading title='Meet your crew' order='02' />

      <div className=" md:flex md:justify-center md:items-center md:flex-col-reverse md:gap-10" 
        onTouchStart={e => handleTouchStart(e)}
        onTouchMove={e => handleTouchMove(e)}
        onTouchEnd={() => handleTouchEnd()}
      >
        <HeroCrew data={currentCrew} />
        <TabCrew data={crews} currentData={currentCrew} setCurrentDataIndex={setCurrentIndex} />
        <DescriptionCrew currentData={currentCrew} />
      </div>

      


    </section>
  )
}


// loader function 
export const CrewLoader = async () => {
  const res = await fetch('http://localhost:3000/crew')

  if(!res.ok) {
    throw Error('Could not find that career')
  }

  return res.json()
}
