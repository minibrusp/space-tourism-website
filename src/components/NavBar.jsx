import { useState } from 'react'
import Logo from '../components/Logo'
import Burger from '../components/Burger'
import NavList from './NavList'

export default function NavBar() {
  const [ isBurgerOpen, setBurger] = useState(false) 

  return (
    <nav className='flex justify-between items-center p-6 absolute w-full md:p-0 md:pl-9'>

      <Logo />
      
      <Burger isBurgerOpen={isBurgerOpen} setBurger={setBurger} />
      
      <NavList isBurgerOpen={isBurgerOpen} setBurger={setBurger} />
      
    </nav>
  )
}
