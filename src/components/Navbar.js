import React from 'react'
import '../components/Navbar.css'
import { NavLink } from 'react-router-dom';
import { CiMenuFries } from "react-icons/ci";
import img from './images/logo.png'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg " style={{backgroundColor:'var(--secondary-color)',height:'5vh'}}>
  <div className="container-fluid">
  <NavLink to='tel:9822841000'  style={{textDecoration:'none',color:'var(--primary-color)'}}>
     <h6  className='text-center my-1'>+91 9822841000</h6>
     </NavLink>
  <NavLink to='mailto:himalayas55@gmail.com' style={{textDecoration:'none',color:'var(--primary-color)'}}> 
    <h6 className='text-center my-1'>himalayas55@gmail.com</h6>
    </NavLink>
  </div>
</nav>
     <nav className="navbar navbar-expand-lg justify-content-center " >
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/" style={{paddingLeft:'25%'}}><img src={img} className='logo' alt='Himalayas'/></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className=""><CiMenuFries />
      </span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav justify-content-center">
        <NavLink className="nav-link text-center p-2" aria-current="page" to="/" 
        style={({isActive})=>({ 
          textUnderlineOffset:'5px', 
          textDecoration: isActive ? 'underline' : 'none' ,
          color:'var(--secondary-color)' ,    
      })}
        >
        <h5>Home</h5></NavLink>
        <NavLink className="nav-link text-center p-2" aria-current="page" to="/about"
         style={({isActive})=>({ 
          textUnderlineOffset:'5px', 
          textDecoration: isActive ? 'underline' : 'none' ,
          color:'var(--secondary-color)' ,    
      })}><h5>About</h5></NavLink>
        <NavLink className="nav-link text-center p-2" aria-current="page" to="/gallery"
         style={({isActive})=>({ 
          textUnderlineOffset:'5px', 
          textDecoration: isActive ? 'underline' : 'none' ,
          color:'var(--secondary-color)' ,    
      })}><h5>Gallery</h5></NavLink>
        <NavLink className="nav-link text-center p-2" aria-current="page" to="/services"
         style={({isActive})=>({ 
          textUnderlineOffset:'5px', 
          textDecoration: isActive ? 'underline' : 'none' ,
          color:'var(--secondary-color)' ,    
      })}><h5>Services</h5></NavLink>
        <NavLink className="nav-link text-center p-2" aria-current="page" to="/contact"
         style={({isActive})=>({ 
          textUnderlineOffset:'5px', 
          textDecoration: isActive ? 'underline' : 'none' ,
          color:'var(--secondary-color)' ,    
      })}><h5>Contact Us</h5></NavLink>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
