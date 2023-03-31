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

  

  useEffect(() => {
    setCurrentCrew(crews[currentIndex])
  }, [currentIndex])


  return (
    <section className='bg-backgroundCrew bg-cover bg-center h-full pt-[100px] min-h-screen md:bg-backgroundCrewTablet md:pt-[136px]'>
      
      <Heading title='Meet your crew' order='02' />

      <div className=" md:flex md:justify-center md:items-center md:flex-col-reverse md:gap-10" 
        
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
