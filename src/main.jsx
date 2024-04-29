import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import router from './router/index.jsx'
import { RouterProvider } from 'react-router-dom'
import MyState from './state/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <MyState>
    <RouterProvider router={router} />
  </MyState>
)
