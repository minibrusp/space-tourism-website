import { useState } from 'react'
import Logo from '../components/Logo'
import Burger from '../components/Burger'
import NavList from './NavList'

export default function NavBar() {
  const [ isBurgerOpen, setBurger] = useState(false) 

  return (
    <nav className='flex justify-between items-center p-6 absolute w-full md:p-0 md:pl-9 lg:mt-10 desktop:pl-[55px]'>

      <Logo />

      <div className=' h-[1px] w-[473px] bg-white opacity-[25.15%] ml-12 hidden desktop:block desktop:absolute desktop:left-[8.4583vw] desktop:z-20'></div>
      
      <Burger isBurgerOpen={isBurgerOpen} setBurger={setBurger} />
      
      <NavList isBurgerOpen={isBurgerOpen} setBurger={setBurger} />
      
    </nav>
  )
}
