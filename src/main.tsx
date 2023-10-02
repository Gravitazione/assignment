import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { router } from './router/index.tsx'
import { RouterProvider } from 'react-router-dom'
import './i18n/index.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
