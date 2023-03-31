import React from 'react'
import homeLogo from '../assets/shared/Logo.svg'
import { Link } from 'react-router-dom'

function Logo() {
  return (
    <div className='logo'>
      <Link to="/">
        <img src={homeLogo} alt="home logo" className='h-10 w-10 block'/>
      </Link>
    </div>
  )
}


export default React.memo(Logo)
