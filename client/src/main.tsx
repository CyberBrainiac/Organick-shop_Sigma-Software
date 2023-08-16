import './assets/styles/myReset.css'
import './assets/styles/global.scss'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route}
from 'react-router-dom'
import MainLayout from './main-layout/MainLayout'
import Home from './pages/home/Home'
import Sifon from './pages/sifon/Sifon'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
					<Route index element={<Home />}/>
					<Route path="/sifon" element={<Sifon />}/>

          {/* <Route path="admin" element={<AdminLayout />}> */}
            {/* <Route path="dashboard" element={<Dashboard />} /> */}
            {/* <Route path="users" element={<Users />} /> */}
          {/* </Route> */}
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
)
