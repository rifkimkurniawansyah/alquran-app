import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Quran from './components/Quran'
import './tailwind.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Quran />
  </StrictMode>,
)
