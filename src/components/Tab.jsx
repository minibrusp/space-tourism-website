export function TabDestination({ data, currentData, setCurrentDataIndex }) {

  const handleFormChange = (e) => {
    setCurrentDataIndex(Number(e.target.value))
  }

  return (
    <nav className='mb-[34px]'>
        <form 
          className='uppercase text-sm tracking-[2.36px] font-barlowCondensed text-primary flex flex-row justify-center items-center gap-[26px] md:text-base md:tracking-[2.7px]' 
        >

          {
            data ? data.map((destination, index) => (
              <div key={destination.name}>
                <input 
                  type="radio" 
                  name="destination" 
                  id={destination.name} 
                  value={index} 
                  className="peer hidden" 
                  checked={currentData.name == destination.name ? true : false}
                  onChange={handleFormChange}
                  onTouchStart={(e) => e.stopPropagation()}
                  onTouchMove={(e) => e.stopPropagation()}
                  onTouchEnd={(e) => e.stopPropagation()} 
                />
                <label 
                  htmlFor={destination.name} 
                  className={`cursor-pointer relative after:absolute after:left-0 after:bottom-[-11px] after:h-1 after:w-full after:bg-white after:block after:opacity-0 peer-checked:text-white peer-checked:after:opacity-100`}
                >{destination.name}
                </label>
              </div>
  
            )) : null
          }


        </form>
      </nav>
  )
}


export function TabCrew({ data, currentData, setCurrentDataIndex }) {

  const handleFormChange = (e) => {
    setCurrentDataIndex(Number(e.target.value))
  }

  return (
    <nav className='mb-[26px]'>
      <form 
        className='uppercase text-sm tracking-[2.36px] font-barlowCondensed text-primary flex flex-row justify-center items-center gap-4' 
      >

        {
          data ? data.map((crew, index) => (
            <div key={crew.name}>
              <input 
                type="radio" 
                name="crew" 
                id={crew.name} 
                value={index} 
                className="peer hidden" 
                checked={currentData.name == crew.name ? true : false}
                onChange={handleFormChange} 
                onTouchStart={(e) => e.stopPropagation()}
                onTouchMove={(e) => e.stopPropagation()}
                onTouchEnd={(e) => e.stopPropagation()} 
              />
              <label 
                htmlFor={crew.name} 
                className={`cursor-pointer relative flex w-[10px] h-[10px] bg-white opacity-[17.44%] rounded-full peer-checked:opacity-100`}
              />
            </div>

          )) : null
        }


      </form>
    </nav>
  )
}

export function TabTechnology({ data, currentData, setCurrentDataIndex}) {

  const handleFormChange = (e) => {
    setCurrentDataIndex(Number(e.target.value))
  }

  return (
    <nav className='mb-[25px]'>
        <form 
          className='uppercase tracking-[1px] font-bellefair text-primary flex flex-row justify-center items-center gap-[16px]' 
        >

          {
            data ? data.map((destination, index) => (
              <label 
                key={destination.name} 
                className=" w-[40px] h-[40px] cursor-pointer md:w-[60px] md:h-[60px]"
              >
                <input 
                  type="radio" 
                  name="destination" 
                  id={destination.name} 
                  value={index} 
                  className="peer hidden" 
                  checked={currentData.name == destination.name ? true : false}
                  onChange={handleFormChange}
                  onTouchStart={(e) => e.stopPropagation()}
                  onTouchMove={(e) => e.stopPropagation()}
                  onTouchEnd={(e) => e.stopPropagation()}
                />
                <label 
                  htmlFor={destination.name} 
                  className={`cursor-pointer border border-white/25 relative w-full h-full flex justify-center items-center rounded-[100%] peer-checked:bg-white/100 peer-checked:text-secondary md:text-2xl md:tracking-[1.5px]`}
                >
                  {index + 1}
                </label>
              </label>
  
            )) : null
          }


        </form>
      </nav>
  )
}
