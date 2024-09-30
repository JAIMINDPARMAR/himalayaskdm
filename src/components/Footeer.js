import React from 'react'
import logo from './images/logo.png'
import './Footeer.css'
import { FaInstagram ,FaFacebook,FaGoogle } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import Serviceimgtwo from './images/Serviceimgtwo.jpg'

import mainimgtwo from './images/mainimgtwo.jpeg'

const Footeer = () => {
  return (
    <>
    <div className='container-fluid' style={{backgroundColor:'var(--secondary-color)'}}>
      <div className='container'>
      <div className='row justify-content-evenly' style={{backgroundColor:'var(--secondary-color)',color:'var(--primary-color)'}}>
          <div className='col-12 col-md-12 col-lg-3 col-xlg-3 col-xxlg-3 p-2'>
            <img src={logo} className='mb-2' style={{height:'7vh'}} alt='Himalaya'/> <br/>
            <span> <FaInstagram style={{color:'white',fontSize:'25px'}} /> </span>
            <span> <FaFacebook style={{color:'white',fontSize:'25px'}} /> </span> 
            <span> <FaGoogle  style={{color:'white',fontSize:'25px'}} /> </span>  
          </div>
          <div className='col-12 col-md-12 col-lg-3 col-xlg-3 col-xxlg-3 p-2'>
            <h5 style={{fontFamily:'var(--head-font)'}}>Address</h5>
            <p className='p-1'>
            Shop no.3, Himalaya Catering Service, Station Rd, opp. Ghanshyam medical, Ramayan Nagar, Ulhasnagar, Maharashtra 421003
            </p>
          </div>
          <div className='col-12 col-md-12 col-lg-3 col-xlg-3 col-xxlg-3 p-2'>
          <h5 style={{fontFamily:'var(--head-font)'}}>Contact Us</h5>
           <a href='tel:9822841000' style={{textDecoration:'none',color:'var(--primary-color)'}}> <h6>+91 9822841000</h6></a>
           <a href='mailto:himalayas55@gmail.com' style={{textDecoration:'none',color:'var(--primary-color)'}}> <h6>himalayas55@gmail.com</h6></a>
          </div>
          <div className='col-12 col-md-12 col-lg-3 col-xlg-3 col-xxlg-3 p-2'>
          <h5 style={{fontFamily:'var(--head-font)'}}>Gallery</h5>
          
          {/* small gallery */}
          
          <NavLink to='/gallery'>
            <img src={Serviceimgtwo} alt='img' className='sgallery p-2'/>
          </NavLink>
          <NavLink to='/gallery'>
          <img src={mainimgtwo} alt='img' className='sgallery p-2'/>
          </NavLink>
         
         
          </div>
      </div>
      <div className='row justify-content-evenly' style={{backgroundColor:'rgb(51, 47, 47)',color:'var(--primary-color)'}}>
          <div className='col-12 col-md-12 col-lg-6 col-xlg-6 col-xxlg-6 p-2'>
          <h6 className='text-center  p-1'>Copyright © 2024, All Right Reserved Himalayas Hospitality | Catering
          </h6>
          </div>
          <div className='col-12 col-md-12 col-lg-6 col-xlg-6 col-xxlg-6 p-2'>
            <span><h6 className='text-center p-1'>Designed by Shree krishna digital marketing</h6></span>
          </div>
          </div>
      </div>
    </div>
    </>
  )
}

export default Footeer
