import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Nature } from './pages/Nature.jsx';
import { Architeture } from './pages/Architeture.jsx';
import { Sport } from './pages/Sport.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:  <App/>,
  },
  {
    path: "nature",
    element:  <Nature/>,
  },
  {
    path: "architeture",
    element:  <Architeture/>,
  },
  {
    path: "sport",
    element:  <Sport/>,
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
