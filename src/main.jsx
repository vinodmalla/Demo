import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import {approuter} from './App.jsx'
import './index.css'
import 'normalize.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={approuter} />
  </StrictMode>,
)
