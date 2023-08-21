import './assets/styles/myReset.css'
import './assets/styles/global.scss'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter }
from 'react-router-dom'
import MainLayout from './main-layout/MainLayout' 
import { productsLoader as homeLoader } from '@/utils/loaders/productsLoader'
import Home from './pages/home/Home'
import Sifon from './pages/sifon/Sifon'
import MainLayout_ErrorPage from './pages/errorPages/MainLayout_ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <MainLayout_ErrorPage />,
    children: [
      { 
        index: true,
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: 'sifon',
        element: <Sifon />,
      },
      {
        path: '*',
        element: <MainLayout_ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
		<RouterProvider router={router} />
  </React.StrictMode>,
)
