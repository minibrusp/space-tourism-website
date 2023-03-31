export function DescriptionDestination({ currentData }) {
  return (
    <div className=' px-6'>
        <div className=' pb-8 border-b border-borderColor'>
          <h2 className='font-bellefair text-[56px] uppercase text-white'>{currentData.name}</h2>
          <p className='text-[15px] leading-[25px]'>{currentData.description}</p>
        </div>

        <div className='uppercase py-8'>
          <div className=' mb-6'>
            <h3 className='font-barlowCondensed text-[14px] text-primary tracking-[2.36px] font-light mb-[5px]'>avg. distance</h3>
            <p className=' font-bellefair text-[28px] text-white'>{currentData.distance}</p>
          </div>
          <div className=''>
            <h3 className='font-barlowCondensed text-[14px] text-primary tracking-[2.36px] font-light mb-[5px]'>est. travel time</h3>
            <p className=' font-bellefair text-[28px] text-white max-w-[565px] mx-auto'>{currentData.travel}</p>
          </div>
        </div>
      </div>
  )
}

export function DescriptionCrew({ currentData }) {
  return (
    <div className="mx-6">
      <h3 className="font-bellefair text-white opacity-[49.51%] uppercase">{currentData.role}</h3>
      <h2 className=" font-bellefair text-[24px] uppercase text-white mb-[14px]">{currentData.name}</h2>
      <p className=" text-[15px] leading-[25px] mx-auto max-w-[435px]">{currentData.bio}</p>
    </div>
  )
}

export function DescriptionTechonology({ currentData }) {
  return (
    <div className="mx-6">
      <h3 className="font-barlowCondensed text-sm text-primary tracking-[2.36px] uppercase">The terminology<span className=" tracking-normal">...</span></h3>
      <h2 className=" font-bellefair text-[24px] uppercase text-white mb-[14px]">{currentData.name}</h2>
      <p className=" text-[15px] leading-[25px] mx-auto max-w-[410px]">{currentData.description}</p>
    </div>
  )
}
