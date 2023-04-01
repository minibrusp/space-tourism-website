export function TabDestination({ data, currentData, setCurrentDataIndex }) {

  const handleFormChange = (e) => {
    setCurrentDataIndex(Number(e.target.value))
  }

  const handleKeyDown = (e) => {   
    if(e.code == 'Space' || e.code == 'Enter' || e.code == 'NumpadEnter') {
      setCurrentDataIndex(Number(e.target.previousSibling.value))
      if(e.code == 'Space') {
        e.preventDefault()
      }
    }
  }

  return (
    <nav className='mb-[34px]'>
        <form 
          className='uppercase text-sm tracking-[2.36px] font-barlowCondensed text-primary flex flex-row justify-center items-center gap-[26px] md:text-base md:tracking-[2.7px] lg:justify-start lg:px-6' 
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
                  className={`cursor-pointer relative after:absolute after:left-0 after:bottom-[-11px] after:h-1 after:w-full after:bg-white after:block after:opacity-0 hover:after:opacity-[50%] after:transition-opacity after:duration-500 peer-checked:text-white peer-checked:after:opacity-100`}
                  tabIndex="0"
                  onKeyDown={handleKeyDown}
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

  const handleKeyDown = (e) => {   
    if(e.code == 'Space' || e.code == 'Enter' || e.code == 'NumpadEnter') {
      setCurrentDataIndex(Number(e.target.previousSibling.value))
      if(e.code == 'Space') {
        e.preventDefault()
      }
    }
  }

  return (
    <nav className='mb-[26px]'>
      <form 
        className='uppercase text-sm tracking-[2.36px] font-barlowCondensed text-primary flex flex-row justify-center items-center gap-4 lg:ml-6 xl:ml-0'
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
                className={`cursor-pointer relative flex w-[10px] h-[10px] bg-white opacity-[17.44%] hover:opacity-[50.01%] focus-visible:opacity-[50.01%] focus-visible:outline-none rounded-full peer-checked:opacity-100 desktop:w-[15px] desktop:h-[15px]`}
                tabIndex="0"
                onKeyDown={handleKeyDown}
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

  const handleKeyDown = (e) => {   
    if(e.code == 'Space' || e.code == 'Enter' || e.code == 'NumpadEnter') {
      setCurrentDataIndex(Number(e.target.previousSibling.value))
      if(e.code == 'Space') {
        e.preventDefault()
      }
    }
  }

  return (
    <nav className='mb-[25px]'>
        <form 
          className='uppercase tracking-[1px] font-bellefair text-primary flex flex-row justify-center items-center gap-[16px] lg:flex-col desktop:gap-[32px]' 
        >

          {
            data ? data.map((technology, index) => (
              <label 
                key={technology.name} 
                className=" w-[40px] h-[40px] cursor-pointer md:w-[60px] md:h-[60px] desktop:h-[80px] desktop:w-[80px]"
              >
                <input 
                  type="radio" 
                  name="technology" 
                  id={technology.name} 
                  value={index} 
                  className="peer hidden" 
                  checked={currentData.name == technology.name ? true : false}
                  onChange={handleFormChange}
                  onTouchStart={(e) => e.stopPropagation()}
                  onTouchMove={(e) => e.stopPropagation()}
                  onTouchEnd={(e) => e.stopPropagation()}
                />
                <label 
                  htmlFor={technology.name} 
                  className={`cursor-pointer border border-white/25 hover:border-white relative w-full h-full flex justify-center items-center rounded-[100%] peer-checked:bg-white/100 peer-checked:text-secondary md:text-2xl md:tracking-[1.5px] desktop:h-[80px] desktop:w-[80px]`}
                  tabIndex="0"
                  onKeyDown={handleKeyDown}
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
