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
    <section className='bg-backgroundCrew bg-cover bg-center h-full pt-[100px] min-h-screen md:bg-backgroundCrewTablet md:pt-[136px] lg:pt-[190px] lg:bg-backgroundCrewDesktop xl:px-[83.2px] desktop:px-[11.5783vw]'>
      
      <Heading title='Meet your crew' order='02' />

      <div className=" md:flex md:justify-s md:items-center md:flex-col-reverse md:gap-10 lg:justify-between lg:flex-row-reverse lg:mx-9 desktop:mx-0 desktop:gap-0" 
        onTouchStart={e => handleTouchStart(e)}
        onTouchMove={e => handleTouchMove(e)}
        onTouchEnd={() => handleTouchEnd()}
      >
        <HeroCrew data={currentCrew} />
        <div className="lg:flex lg:justify-center lg:items-start lg:flex-col-reverse lg:gap-6 lg:text-left desktop:gap-[167px]">
          <TabCrew data={crews} currentData={currentCrew} setCurrentDataIndex={setCurrentIndex} />
          <DescriptionCrew currentData={currentCrew} />

        </div>
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
