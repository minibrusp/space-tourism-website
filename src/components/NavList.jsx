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
    isBurgerOpen && (
      <div className='absolute top-0 right-0 w-full h-[100vh] z-[9]' onClick={() => setBurger(false)}>
        <ul className='absolute bg-whiteBlur backdrop-blur-xl right-0 top-0 h-screen w-[254px] text-left pl-8 py-[118px] font-barlowCondensed tracking-[2.7px] text-white z-[9]' onClick={(e) => e.stopPropagation()}>        

          {
            pages.map((page, index) => (
              <li className='relative uppercase mb-7' key={index}>
                
                <NavLink to={page.path} className="group flex gap-4" onClick={() => setBurger(false)}>
                  <span className='font-bold'>0{index}</span>
                  <span className='font-light after:absolute after:right-0 after:top-0 after:bg-white after:w-1 after:h-full after:opacity-0 group-[.active]:after:opacity-100'>{page.text}</span>
                  
                </NavLink>
              </li>
            ))
          }
          
          
          
          

        </ul>

      </div>
    )
  )
}
