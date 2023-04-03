import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Heading from '../components/Heading'

// assets
import astronautImg from '../assets/404/mirage-astronaut.png'
import Button from '../components/Button'



const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
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


export default function DestinationLayout() {

  return (
    <motion.section className='bg-backgroundHome bg-cover bg-center h-full pt-[100px] min-h-screen md:bg-backgroundHomeTablet md:pt-[136px] md:pb-[62px] lg:bg-backgroundHomeDesktop lg:pt-[190px] xl:px-[83.2px] desktop:px-[11.5783vw]'
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    
    >
      
    <div className='flex justify-center items-center flex-col'>
      <Heading title='Page not Found' order='404' />

      <img className='pb-4 md:p-0' src={astronautImg} alt="lost astronaut" />

      <Button text="Go Back" destination="/" size="small"/>
      

    </div>

    
    </motion.section>




    )
}
