export function DescriptionDestination({ currentData }) {
  return (
    <div className=' px-6 lg:text-left'>
        <div className=' pb-8 border-b border-borderColor max-w-[550px] mx-auto md:pb-[50px]'>
          <h2 className='font-bellefair text-[56px] uppercase text-white md:text-[80px] xl:text-[100px]'>{currentData?.name}</h2>
          <p className='text-[15px] leading-[25px] mx-auto md:text-base md:leading-[28px] lg:max-w-[385px] xl:text-lg xl:leading-8 desktop:max-w-[445px]'>{currentData?.description}</p>
        </div>

        <div className='uppercase py-8 md:flex md:justify-center md:items-center md:gap-[50px] md:leading-[1] lg:justify-start'>
          <div className=' mb-6 md:mb-0 md:flex md:justify-center md:items-center md:flex-col md:gap-[6px] lg:items-start'>
            <h3 className='font-barlowCondensed text-[14px] text-primary tracking-[2.36px] font-light mb-[5px]'>avg. distance</h3>
            <p className=' font-bellefair text-[28px] text-white md:leading-[28px]'>{currentData?.distance}</p>
          </div>
          <div className='md:flex md:justify-center md:items-center md:flex-col md:gap-[6px] lg:items-start'>
            <h3 className='font-barlowCondensed text-[14px] text-primary tracking-[2.36px] font-light mb-[5px]'>est. travel time</h3>
            <p className=' font-bellefair text-[28px] text-white'>{currentData?.travel}</p>
          </div>
        </div>
      </div>
  )
}

export function DescriptionCrew({ currentData }) {
  return (
    <div className="mx-6 xl:mx-0">
      <h3 className="font-bellefair text-white opacity-[49.51%] uppercase md:opacity-[49.94%] md:text-2xl xl:text-[32px]">{currentData?.role}</h3>
      <h2 className=" font-bellefair text-[24px] uppercase text-white mb-[14px] md:text-[40px] xl:text-[56px] desktop:min-w-[615px]">{currentData?.name}</h2>
      <p className=" text-[15px] leading-[25px] mx-auto max-w-[435px] md:text-base md:leading-[28px] xl:text-lg xl:leading-8 xl:mx-0">{currentData?.bio}</p>
    </div>
  )
}

export function DescriptionTechonology({ currentData }) {
  return (
    <div className="mx-6 lg:text-left lg:ml-9">
      <h3 className="font-barlowCondensed text-sm text-primary tracking-[2.36px] uppercase md:text-base md:tracking-[2.7px] md:mb-4 xl:text-base xl:tracking-[2.37px]">The terminology<span className=" tracking-normal">...</span></h3>
      <h2 className=" font-bellefair text-[24px] uppercase text-white mb-[14px] md:text-[40px] xl:text-[56px] desktop:min-w-[470px]">{currentData?.name}</h2>
      <p className=" text-[15px] leading-[25px] mx-auto max-w-[410px] md:text-base md:leading-[28px] md:max-w-[450px] lg:min-w-[395px] xl:text-lg xl:leading-[32px] xl:min-w-[440px]">{currentData?.description}</p>
    </div>
  )
}
