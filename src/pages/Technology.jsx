import { useLoaderData } from "react-router-dom"
import { useState, useEffect } from "react"

// components
import Heading from "../components/Heading"
import { HeroTechnology } from "../components/Hero"
import { TabTechnology } from "../components/Tab"
import { DescriptionTechonology } from "../components/Description"

export default function Technology() {
  const technology = useLoaderData()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentTechnology, setCurrentTechnology ] = useState('')


  useEffect(() => {
    setCurrentTechnology(technology[currentIndex])
  }, [currentIndex])

  return (
    <section className='bg-backgroundTechnology bg-cover bg-center h-full pt-[100px] min-h-screen md:bg-backgroundTechnologyTablet md:pt-[136px] md:pb-[97px]'>
      
      <Heading title='Space launch 101' order='03' />
      <HeroTechnology data={currentTechnology} />
      
      <TabTechnology data={technology} currentData={currentTechnology} setCurrentDataIndex={setCurrentIndex} />

      <DescriptionTechonology currentData={currentTechnology} />

    </section>
  )
}

export const TechnologyLoader = async () => {
  const res = await fetch('http://localhost:3000/technology')

  if(!res.ok) {
    throw Error('Could not find that career')
  }

  return res.json()
}
