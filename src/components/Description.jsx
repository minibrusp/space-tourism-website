import { motion, stagger } from 'framer-motion'



export function DescriptionDestination({ currentData, current }) {
  const NameVariant = {
    initial: {
      y: "-100%",
    },
    animate: {
      y: 0,
      transition: { delay: .5, duration: 1 }
    },
    exit: {
      x: "-100%",
      transition: { ease: 'easeInOut' }
    }
  }
  const DescriptionVariant = {
    initial: {
      y: "150%",
    },
    animate: {
      y: 0,
      transition: { delay: .5, duration: 1 }
    },
    exit: {
      x: "100%",
      transition: { ease: 'easeInOut' }
    }
  }
  
  const MetaVariant = {
    initial: {
      x: "-100%",
    },
    animate: {
      x: 0,
      transition: { delay: .5, duration: 1 }
    },
    exit: {
      x: "100%",
      transition: { ease: 'easeInOut' }
    }
  }
  
  const Meta2Variant = {
    initial: {
      x: "150%",
    },
    animate: {
      x: 0,
      transition: { delay: .5, duration: 1 }
    },
    exit: {
      x: "100%",
      transition: { ease: 'easeInOut' }
    }
  }
  

  return (
    <motion.div className=' px-6 lg:text-left' key={current}>
        <div className=' pb-8 border-b border-borderColor max-w-[550px] mx-auto md:pb-[50px] overflow-hidden'>
          <motion.h2 
            className='font-bellefair text-[56px] uppercase text-white md:text-[80px] xl:text-[100px]'
            variants={NameVariant}
            initial="initial"
            animate="animate"
          >{currentData?.name}</motion.h2>
          <motion.p 
            className='text-[15px] leading-[25px] mx-auto md:text-base md:leading-[28px] lg:max-w-[385px] xl:text-lg xl:leading-8 desktop:max-w-[445px]'
            variants={DescriptionVariant}
            initial="initial"
            animate="animate"
          >{currentData?.description}</motion.p>
        </div>

        <div className='uppercase py-8 md:flex md:justify-center md:items-center md:gap-[50px] md:leading-[1] lg:justify-start'>
          <div className=' mb-6 md:mb-0 md:flex md:justify-center md:items-center md:flex-col md:gap-[6px] lg:items-start overflow-hidden'>
            <h3 className='font-barlowCondensed text-[14px] text-primary tracking-[2.36px] font-light mb-[5px]'>avg. distance</h3>
            <motion.p 
              className=' font-bellefair text-[28px] text-white md:leading-[28px]'
              variants={MetaVariant}
              initial="initial"
              animate="animate"
            >{currentData?.distance}</motion.p>
          </div>
          <div className='md:flex md:justify-center md:items-center md:flex-col md:gap-[6px] lg:items-start overflow-hidden'>
            <h3 className='font-barlowCondensed text-[14px] text-primary tracking-[2.36px] font-light mb-[5px]'>est. travel time</h3>
            <motion.p 
              className=' font-bellefair text-[28px] text-white'
              variants={Meta2Variant}
              initial="initial"
              animate="animate"
            >{currentData?.travel}</motion.p>
          </div>
        </div>
      </motion.div>
  )
}

export function DescriptionCrew({ currentData, current }) {

  const NameVariant = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: { delay: 0.5, duration: 1 }
    },
    exit: {
      x: "-100%",
      transition: { ease: 'easeInOut' }
    }
  }
  const DescriptionVariant = {
    initial: {
      y: "150%",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: { delay: .5, duration: 1 }
    },
    exit: {
      x: "100%",
      transition: { ease: 'easeInOut' }
    }
  }
  
  const roleVariant = {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: { delay: .5, duration: 1 }
    },
    exit: {
      x: "100%",
      transition: { ease: 'easeInOut' }
    }
  }
  


  return (
    <motion.div className="mx-6 xl:mx-0 overflow-hidden" key={current}>
      <motion.h3 
        className="font-bellefair text-white opacity-[49.51%] uppercase md:opacity-[49.94%] md:text-2xl xl:text-[32px]"
        variants={roleVariant}
        initial="initial"
        animate="animate"
      >{currentData?.role}</motion.h3>
      <motion.h2 
        className=" font-bellefair text-[24px] uppercase text-white mb-[14px] md:text-[40px] xl:text-[56px] desktop:min-w-[615px]"
        variants={NameVariant}
        initial="initial"
        animate="animate"
      >{currentData?.name}</motion.h2>
      <motion.p 
        className=" text-[15px] leading-[25px] mx-auto max-w-[435px] md:text-base md:leading-[28px] xl:text-lg xl:leading-8 xl:mx-0"
        variants={DescriptionVariant}
        initial="initial"
        animate="animate"
      >{currentData?.bio}</motion.p>
    </motion.div>
  )
}

export function DescriptionTechonology({ currentData, current }) {

  const NameVariant = {
    initial: {
      opacity: 0,
      x: '-100%',
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: { delay: 0.5, duration: 1 }
    },
    exit: {
      x: "-100%",
      transition: { ease: 'easeInOut' }
    }
  }
  const DescriptionVariant = {
    initial: {
      y: "150%",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: { delay: .5, duration: 1 }
    },
    exit: {
      x: "100%",
      transition: { ease: 'easeInOut' }
    }
  }

  return (
    <motion.div className="mx-6 lg:text-left lg:ml-9 overflow-hidden" key={current}>
      <h3 className="font-barlowCondensed text-sm text-primary tracking-[2.36px] uppercase md:text-base md:tracking-[2.7px] md:mb-4 xl:text-base xl:tracking-[2.37px]">The terminology<span className=" tracking-normal">...</span></h3>
      <motion.h2 
        className=" font-bellefair text-[24px] uppercase text-white mb-[14px] md:text-[40px] xl:text-[56px] desktop:min-w-[470px]"
        variants={NameVariant}
        initial="initial"
        animate="animate"
      >{currentData?.name}</motion.h2>
      <motion.p 
        className=" text-[15px] leading-[25px] mx-auto max-w-[410px] md:text-base md:leading-[28px] md:max-w-[450px] lg:min-w-[395px] xl:text-lg xl:leading-[32px] xl:min-w-[440px]"
        variants={DescriptionVariant}
        initial="initial"
        animate="animate"
      >{currentData?.description}</motion.p>
    </motion.div>
  )
}
