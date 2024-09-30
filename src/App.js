import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, createBrowserRouter,Outlet,Route,RouterProvider, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Footeer from './components/Footeer';
import Pagenotfound from './pages/Pagenotfound';
import Serviceparticular from './pages/Serviceparticular';
import Servicedata from './Data/Servicedata';


const App = () => {
  

  // const routee=createBrowserRouter([
    
  //   {
  //     path: "/",
  //     element:<> <Navbar/><Outlet/><Footeer/></>,
  //     children :[
        
  //       {
  //         path: "/",
  //         element:<Home />
  //       },
  //       {
  //         path: "about",
  //         element:<About/>
  //       },
  //       {
  //         path: "services",
  //         element:<Services/>
  //       },
  //       {
  //         path: "gallery",
  //         element:<Gallery/>
  //       },
  //       {
  //         path: "contact",
  //         element:<Contact/>
  //       },
  //       {
  //         path:"serviceparticular",
  //         element:<Serviceparticular/>
  //       },
  //       {
  //         path:'*',
  //         element:<Pagenotfound/>
  //       },   
        
           
  //     ]
  //   }
  // ]);
 
  return (
    // <RouterProvider router={routee} />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<><Navbar/><Outlet/><Footeer/></>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/gallery' element={<Gallery/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='*' element={<Pagenotfound/>}/>
            {Servicedata.map((data)=>(
              
              <Route path={data.slugs} key={data.name} element={<Serviceparticular/>}/>
            ))}
        </Route>
      </Routes>
    </BrowserRouter>
  )
  
}

export default App
