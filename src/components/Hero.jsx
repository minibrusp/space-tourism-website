import { motion } from 'framer-motion'
import { useEffect, useMemo } from 'react'

// images 
// destination 
import moonImg from '../assets/destination/image-moon.webp'
import marsImg from '../assets/destination/image-mars.webp'
import europaImg from '../assets/destination/image-europa.webp'
import titanImg from '../assets/destination/image-titan.webp'
// crew
import douglasImg from '../assets/crew/image-douglas-hurley.webp'
import markImg from '../assets/crew/image-mark-shuttleworth.webp'
import victorImg from '../assets/crew/image-victor-glover.webp'
import ansariImg from '../assets/crew/image-anousheh-ansari.webp'
// technology 
import launchVehiclePortraitImg from '../assets/technology/image-launch-vehicle-portrait.jpg'
import launchVehicleLandscapeImg from '../assets/technology/image-launch-vehicle-landscape.jpg'
import spacePortPortraitImg from '../assets/technology/image-spaceport-portrait.jpg'
import spacePortLandscapeImg from '../assets/technology/image-spaceport-landscape.jpg'
import spaceCapsulePortraitImg from '../assets/technology/image-space-capsule-portrait.jpg'
import spaceCapsuleLandscapeImg from '../assets/technology/image-space-capsule-landscape.jpg'

export function HeroDestination({ data, current }) {

  const images = useMemo(() => {
    return [
      moonImg,
      marsImg,
      europaImg,
      titanImg
    ]
  }, [])

  const imgContainerVariants = {
    initial: {
      scale: 0,
    },
    animate: {
      scale: 1,
      transition: { delay: .5, duration: 3 }
    },
    exit: {
      x: '-100vh',
      transition: { ease: 'easeInOut' }
    }
  }

  const imgVariants = {
    initial: {
      rotate: 10,
    },
    animate: {
      rotate: 0,
      transition: { delay: 2.5, duration: 5 }
    },
    exit: {
      x: '-100vh',
      transition: { ease: 'easeInOut' }
    }
  }

  return (
    <motion.div className='hero w-fit h-fit mx-auto my-4 flex justify-center items-center mb-[26px] md:mb-[53px]'
      variants={imgContainerVariants}
      initial="initial"
      animate="animate"
    >
      {
        data ? <motion.img 
              className='w-[170px] h-[170px] mx-auto md:w-[300px] md:h-[300px] lg:w-[445px] lg:h-[445px]' 
              // src={data.images.png} 
              src={images[current]} 
              alt={`photo of ${data.name}`}
              variants={imgVariants}
              initial="initial"
              animate="animate"
              exit="exit" 
            />
          : null
      }
    </motion.div>
  )
}

export function HeroCrew({ data, current }) {

  const images = useMemo(() => {
    return [
      douglasImg,
      markImg,
      victorImg,
      ansariImg
    ]
  }, [])

  return (
    <div className="text-center border-b mx-6 border-borderColor mb-9 md:border-none md:mb-0">
      {
        data 
          // ? <img className="mx-auto h-[222px] md:h-[532px] desktop:h-[712px]" src={data.images.png} alt={`photo of ${data.name}`} />
          ? <img className="mx-auto h-[222px] md:h-[532px] desktop:h-[712px]" src={images[current]} alt={`photo of ${data.name}`} />
          : null
      }
    </div>
  )
}

export function HeroTechnology({ data, current }) {

  const images = useMemo(() => {
    return [
      {
        portrait: launchVehiclePortraitImg,
        landscape: launchVehicleLandscapeImg
      },
      {
        portrait: spacePortPortraitImg,
        landscape: spacePortLandscapeImg
      },
      {
        portrait: spaceCapsulePortraitImg,
        landscape: spaceCapsuleLandscapeImg
      },
    ]
  }, [])

  return (
    <div className="text-center mb-9 block w-full md:mb-14">
      {
        data 
          ? <picture>
              {/* <source media="(max-width:1023px)" srcSet={data.images.landscape} />
              <source media="(min-width:1024px)" srcSet={data.images.portrait} /> */}
              <source media="(max-width:1023px)" srcSet={images[current]?.landscape} />
              <source media="(min-width:1024px)" srcSet={images[current]?.portrait} />
              <img className="w-full min-h-[170px] md:h-[310px] lg:w-[unset] lg:h-[unset] lg:ml-auto" src={images[current]?.landscape} alt={`photo of ${data.name}`} />
             </picture>
          : null
      }
    </div>
  )
}
