export function DescriptionDestination({ currentData }) {
  return (
    <div className=' px-6'>
        <div className=' pb-8 border-b border-borderColor max-w-[550px] mx-auto md:pb-[50px]'>
          <h2 className='font-bellefair text-[56px] uppercase text-white md:text-[80px]'>{currentData.name}</h2>
          <p className='text-[15px] leading-[25px] mx-auto md:text-base md:leading-[28px]'>{currentData.description}</p>
        </div>

        <div className='uppercase py-8 md:flex md:justify-center md:items-center md:gap-[50px] md:leading-[1]'>
          <div className=' mb-6 md:mb-0 md:flex md:justify-center md:items-center md:flex-col md:gap-[6px]'>
            <h3 className='font-barlowCondensed text-[14px] text-primary tracking-[2.36px] font-light mb-[5px]'>avg. distance</h3>
            <p className=' font-bellefair text-[28px] text-white md:leading-[28px]'>{currentData.distance}</p>
          </div>
          <div className='md:flex md:justify-center md:items-center md:flex-col md:gap-[6px]'>
            <h3 className='font-barlowCondensed text-[14px] text-primary tracking-[2.36px] font-light mb-[5px]'>est. travel time</h3>
            <p className=' font-bellefair text-[28px] text-white'>{currentData.travel}</p>
          </div>
        </div>
      </div>
  )
}

export function DescriptionCrew({ currentData }) {
  return (
    <div className="mx-6">
      <h3 className="font-bellefair text-white opacity-[49.51%] uppercase md:opacity-[49.94%] md:text-2xl">{currentData.role}</h3>
      <h2 className=" font-bellefair text-[24px] uppercase text-white mb-[14px] md:text-[40px]">{currentData.name}</h2>
      <p className=" text-[15px] leading-[25px] mx-auto max-w-[435px] md:text-base md:leading-[28px]">{currentData.bio}</p>
    </div>
  )
}

export function DescriptionTechonology({ currentData }) {
  return (
    <div className="mx-6">
      <h3 className="font-barlowCondensed text-sm text-primary tracking-[2.36px] uppercase md:text-base md:tracking-[2.7px] md:mb-4">The terminology<span className=" tracking-normal">...</span></h3>
      <h2 className=" font-bellefair text-[24px] uppercase text-white mb-[14px] md:text-[40px]">{currentData.name}</h2>
      <p className=" text-[15px] leading-[25px] mx-auto max-w-[410px] md:text-base md:leading-[28px] md:max-w-[450px]">{currentData.description}</p>
    </div>
  )
}
