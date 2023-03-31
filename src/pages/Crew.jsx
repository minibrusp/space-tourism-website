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
    <section className='bg-backgroundCrew bg-cover bg-center h-full pt-[100px] min-h-screen'>
      
      <Heading title='Meet your crew' order='02' />

      <HeroCrew data={currentCrew} />

      <TabCrew data={crews} currentData={currentCrew} setCurrentDataIndex={setCurrentIndex} />
      

      <DescriptionCrew currentData={currentCrew} />

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
