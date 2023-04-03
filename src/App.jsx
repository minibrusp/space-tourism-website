import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

// Pages 
import Home from './pages/Home'
import Destination, { DestinationLoader } from './pages/Destination'
import Crew, { CrewLoader } from './pages/Crew'
import Technology, { TechnologyLoader } from './pages/Technology'
import NotFound from './components/Error'

// Layouts 
import RootLayout from './layouts/RootLayout'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />} errorElement>
      <Route index element={<Home />} />
      <Route path='destination' element={<Destination />} loader={DestinationLoader} />
      <Route path='crew' element={<Crew />} loader={CrewLoader} />
      <Route path='technology' element={<Technology />} loader={TechnologyLoader} />
      <Route path="*" element={<NotFound />} />
    </Route>
   
  )
)

export default function App() {
  return (
    <AnimatePresence mode='sync' >
      <RouterProvider router={router} />
    </AnimatePresence>
  )
}
