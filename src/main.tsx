import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './Router'
import './assets/global-styles/myReset.css'
import './assets/global-styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
