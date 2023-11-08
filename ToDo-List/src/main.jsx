import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import  Home  from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import  Contact  from './pages/Contact.jsx'
import Menu from './components/Menu.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home /> ,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Menu></Menu>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
