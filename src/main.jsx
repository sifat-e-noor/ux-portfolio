import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Apply saved theme before rendering to avoid flash
try {
  const saved = localStorage.getItem('theme');
  if (saved) document.documentElement.setAttribute('data-theme', saved);
} catch (e) {}

import './styles/layout.css'
import './styles/typography.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
