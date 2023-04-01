export function HeroDestination({ data }) {
  return (
    <div className='hero w-fit h-fit mx-auto my-4 flex justify-center items-center mb-[26px] md:mb-[53px]'>
      {
        data 
          ? <img className='w-[170px] h-[170px] mx-auto md:w-[300px] md:h-[300px] lg:w-[445px] lg:h-[445px]' src={data.images.png} alt={`photo of ${data.name}`} />
          : null
      }
    </div>
  )
}

export function HeroCrew({ data }) {
  return (
    <div className="text-center border-b mx-6 border-borderColor mb-9 md:border-none md:mb-0">
      {
        data 
          ? <img className="mx-auto h-[222px] md:h-[532px] desktop:h-[712px]" src={data.images.png} alt={`photo of ${data.name}`} />
          : null
      }
    </div>
  )
}

export function HeroTechnology({ data }) {
  return (
    <div className="text-center mb-9 block w-full md:mb-14">
      {
        data 
          ? <picture>
              <source media="(max-width:1023px)" srcSet={data.images.landscape} />
              <source media="(min-width:1024px)" srcSet={data.images.portrait} />
              <img className="w-full min-h-[170px] md:h-[310px] lg:w-[unset] lg:h-[unset] lg:ml-auto" src={data.images.landscape} alt={`photo of ${data.name}`} />
             </picture>
          : null
      }
    </div>
  )
}
