import React from 'react'
import './index.css'
import App from './App.jsx'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Sobre from './Pages/Sobre.jsx'

const router = createBrowserRouter([

  {
    path: "/",
    element: <App/>
  },
  {
    path: "/sobre",
    element: <Sobre/>
  }
])

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <RouterProvider router={router}/>
)
