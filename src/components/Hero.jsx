export function HeroDestination({ data }) {
  return (
    <div className='hero w-[170px] h-[170px] mx-auto my-4 flex justify-center items-center mb-[26px]'>
      {
        data 
          ? <img className='w-[170px] h-[170px] mx-auto' src={data.images.png} alt={`photo of ${data.name}`} />
          : null
      }
    </div>
  )
}

export function HeroCrew({ data }) {
  return (
    <div className="text-center border-b mx-6 border-borderColor mb-9">
      {
        data 
          ? <img className="mx-auto h-[222px]" src={data.images.png} alt={`photo of ${data.name}`} />
          : null
      }
    </div>
  )
}

export function HeroTechnology({ data }) {
  return (
    <div className="text-center mb-9 block w-full">
      {
        data 
          ? <img className="w-full min-h-[170px]" src={data.images.landscape} alt={`photo of ${data.name}`} />
          : null
      }
    </div>
  )
}
