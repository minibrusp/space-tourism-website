import { Outlet, useLocation } from 'react-router-dom'
import NavBar from '../components/NavBar'


function RootLayout() {

  // const location = useLocation()

  // console.log(location.pathname)

  

  return (
    <div className="App text-primary bg-black bg-backgroundMain bg-repeat">
      <header>
        <NavBar />
      </header>

      <main className='font-barlow text-center'>
        <Outlet />
      </main>
      

      
    </div>
  )
}

export default RootLayout
