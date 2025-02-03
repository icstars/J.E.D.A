import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SearchBar from './searchBar.jsx'
import LandingPage from './landingPage.jsx'
import LocationsPage from './locationsPage.jsx'
import Signin from './Signin.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LandingPage />
  </StrictMode>,
)
