import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import Home from './pages/home/Home.jsx'
import Events from './pages/Events.jsx'
import Workshop from './pages/Workshop.jsx'
import Prakriti from './pages/Prakriti.jsx'
import CA from './pages/CA.jsx'
import PastSponsors from './pages/PastSponsors.jsx'

import { RouterProvider,createBrowserRouter,createRoutesFromElements,Route } from 'react-router-dom'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="events" element={<Events />} />
      <Route path="workshop" element={<Workshop />} />
      <Route path="prakriti" element={<Prakriti />} />
      <Route path="ca" element={<CA />} />
      <Route path="past-sponsors" element={<PastSponsors />} />
      {/* <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} /> */}
    </Route>
  ))


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    {/* <App /> */}
  </StrictMode>,
)
