import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <App />
  </StrictMode>,
)
=========
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SearchBar from './searchBar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SearchBar />
  </StrictMode>,
)
>>>>>>>>> Temporary merge branch 2
