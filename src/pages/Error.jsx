import { useRouteError } from "react-router-dom"
import { motion } from "framer-motion"

import Heading from "../components/Heading"
import { Button404 } from "../components/Button"

import ErrorImg from "../assets/shared/astronauterror.png"


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

export default function Error() {
  const error = useRouteError()
  console.error(error)

  
  return (

    <motion.section className='bg-backgroundHome bg-cover bg-center h-full pt-[100px] min-h-screen md:bg-backgroundHomeTablet md:pt-[136px] md:pb-[62px] lg:bg-backgroundHomeDesktop lg:pt-[190px] xl:px-[83.2px] desktop:px-[11.5783vw]'
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    exit="exit"

    >
      <div className='flex justify-center items-center flex-col'>
        <Heading title={error.message} order="Error" />
        <h2 
        className=" font-bellefair text-[24px] uppercase text-white mb-[14px] md:text-[40px] xl:text-[56px] desktop:min-w-[470px]">Bad Request error</h2>
        <img className='pb-4 w-[200px] md:p-0' src={ErrorImg} alt="astronaut error" />
        <Button404 text="Go Back" destination="/" />

      </div>



    </motion.section>
  )
}