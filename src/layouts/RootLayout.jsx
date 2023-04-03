import { Outlet, useLocation } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'


function RootLayout() {

  // const location = useLocation()

  // console.log(location.pathname)

  

  return (
    <div className="App relative text-primary bg-black bg-backgroundMain bg-repeat">
      <header>
        <NavBar />
      </header>

      <main className='font-barlow text-center'>
        <Outlet />
      </main>
      
      <Footer />

      
    </div>
  )
}

export default RootLayout
