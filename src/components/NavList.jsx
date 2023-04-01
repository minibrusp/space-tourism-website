import React from 'react'
import { NavLink } from 'react-router-dom'

const pages = [
  {
    path: "/",
    text: "Home"
  },
  {
    path: "/destination",
    text: "Destination"
  },
  {
    path: "/crew",
    text: "Crew"
  },
  {
    path: "/technology",
    text: "Technology"
  },
]

export default function NavList({ isBurgerOpen, setBurger }) {
  return (
    
    <div 
      className={`absolute top-0 right-0 w-full h-[100vh] z-[9] ${isBurgerOpen ? '' : 'hidden'} md:block md:h-auto md:relative`} 
      onClick={() => setBurger(false)}
    >
      <ul className='absolute bg-whiteBlur backdrop-blur-xl right-0 top-0 h-screen w-[254px] text-left pl-8 py-[118px] font-barlowCondensed tracking-[2.7px] text-white z-[9] md:relative md:w-full md:p-0 md:flex md:justify-end md:items-center md:py-6 md:pr-10 md:max-w-[450px] md:ml-auto md:gap-[2.2rem] md:h-24 lg:max-w-[630px] xl:max-w-[830px] xl:pr-40 xl:gap-[50px]' onClick={(e) => e.stopPropagation()}>        

        {
          pages.map((page, index) => (
            <li className='relative uppercase mb-7 md:mb-0' key={index}>
              
              <NavLink to={page.path} className="group flex gap-4 md:text-sm lg:gap-3 lg:text-base" onClick={() => setBurger(false)}>
                <span className='font-bold md:hidden lg:block'>0{index}</span>
                <span className='font-light after:absolute after:right-0 after:top-0 after:bg-white after:w-1 after:h-full after:opacity-0 group-[.active]:after:opacity-100 group-hover:after:opacity-[50.21%] md:after:top-[unset] md:after:bottom-[-38px] md:after:left-0 md:after:w-full md:after:h-1 md:after:transition-opacity md:after:duration-500'>{page.text}</span>
                
              </NavLink>
            </li>
          ))
        }
        
        
        
        

      </ul>

    </div>
    
  )
}
