import iconBurger from '../assets/shared/icon-hamburger.svg'
import iconClose from '../assets/shared/icon-close.svg'

export default function Burger({isBurgerOpen, setBurger}) {
  return (
    <div className="burger-menu cursor-pointer relative z-10" onClick={() => setBurger(!isBurgerOpen)}>
      {              
        isBurgerOpen ?
        <div className='burger-menu-icon-close'>
          <img src={iconClose} alt="icon close" className='block' />
        </div>
        : 
          <div className="burger-menu-icon-burger">
            <img src={ iconBurger} alt="burger icon" className='block' />
          </div>
      }  
    </div>
    
  )
}
