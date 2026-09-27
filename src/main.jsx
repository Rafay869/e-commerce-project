import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // <-- Yaqeen banayein ke yeh './index.css' hi likha ho
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)