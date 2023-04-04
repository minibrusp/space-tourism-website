import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
  useLocation
} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

// Pages 
import Home from './pages/Home'
import Destination, { DestinationLoader } from './pages/Destination'
import Crew, { CrewLoader } from './pages/Crew'
import Technology, { TechnologyLoader } from './pages/Technology'
import Page404 from './pages/Page404'
import Error from './pages/Error'

// Layouts 
import RootLayout from './layouts/RootLayout'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />} >
      <Route index element={<Home />} />
      <Route path='destination' element={<Destination />} loader={DestinationLoader}  errorElement={<Error />} />
      <Route path='crew' element={<Crew />} loader={CrewLoader} errorElement={<Error />} />
      <Route path='technology' element={<Technology />} loader={TechnologyLoader} errorElement={<Error />} />
      <Route path="*" element={<Page404 />} />
    </Route>
   
  )
)

export default function App() {
  return (
    <AnimatePresence mode='wait'>
      <RouterProvider router={router}  />
    </AnimatePresence>
  )
}
