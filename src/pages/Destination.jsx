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

  useEffect(() => {
    setCurrentDestination(destinations[currentIndex])
  }, [currentIndex])

  



  return (
    <section className='bg-backgroundDestination bg-cover bg-center h-full pt-[100px] min-h-screen md:bg-backgroundDestinationTablet md:pt-[136px] md:pb-[62px]'>
      
      <Heading title='Pick your destination' order='01' />

      <HeroDestination data={currentDestination} />

      <TabDestination data={destinations} currentData={currentDestination} setCurrentDataIndex={setCurrentIndex} />

      <DescriptionDestination currentData={currentDestination} />

      
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
