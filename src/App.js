import React from 'react'
import Home from './pages/Home'
import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Footeer from './components/Footeer';
import Pagenotfound from './pages/Pagenotfound';

const App = () => {
  const routee=createBrowserRouter([
    {
      path: "/",
      element:<> <Navbar/><Outlet/><Footeer/></>,
      children :[
        {
          path: "/",
          element:<Home />
        },
        {
          path: "about",
          element:<About/>
        },
        {
          path: "services",
          element:<Services/>
        },
        {
          path: "gallery",
          element:<Gallery/>
        },
        {
          path: "contact",
          element:<Contact/>
        },
        {
          path:'*',
          element:<Pagenotfound/>
        }
      ]
    }
  ]);
  return (
    <RouterProvider router={routee} />
  )
}

export default App
