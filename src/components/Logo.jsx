import React from 'react'
import homeLogo from '../assets/shared/Logo.svg'
import { Link } from 'react-router-dom'

function Logo() {
  return (
    <div className='logo'>
      <Link to="/">
        <img src={homeLogo} alt="home logo" className='h-10 w-10 block md:h-12 md:w-12 md:max-w-none' />
      </Link>
    </div>
  )
}


export default React.memo(Logo)
