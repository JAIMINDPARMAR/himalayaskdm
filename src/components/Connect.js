import React from 'react'
import aimgone from './images/aimg1.jpeg'
import './Connect.css'
import { NavLink } from 'react-router-dom'
const Connect = () => {
  return (
    <>
    <div className='container mt-5 connectimg'>
        <img src={aimgone} alt='Connect'/>
        <div className='connectoverlay'>
            <h1 className='text-center'>"Let’s Create Unforgettable Moments Together!"</h1>
            <button className='btn btn-danger mt-5'>
                <NavLink  to='/contact'>Connect</NavLink>
                </button>
        </div>
    </div>
    </>
  )
}

export default Connect
