import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { DarkProvider } from './context/darkContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DarkProvider>
      <App />
    </DarkProvider>
  </React.StrictMode>,
)
