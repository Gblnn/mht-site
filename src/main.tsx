import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/style.css'
import './styles/utils.css'
import '../app/globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
