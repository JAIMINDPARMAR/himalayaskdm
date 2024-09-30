import React from 'react'
import './Pde.css'

import mthree from './images/himalayasm1.JPG'
import mfour from './images/himalayasm3.JPG'

import { NavLink } from 'react-router-dom'
const Pde = () => {
  return (
    <>
     <section className="productDemondSection">
        <div className="container my-5 pdecontainer">
            <div className="sectionFour productDemand">
                <div className="smallTitle mt-2">
                    <h5 style={{textAlign:'center',fontFamily:'var(--para-font)'}} className='pt-5'>For all types of events</h5>
                </div>
                <div className="sectionTitle">
                    <h2 style={{textAlign:'center',fontFamily:'var(--head-font)'}} className='pt-2' >
                      Products in Demand</h2>
                </div>
                <div className="row justify-content-evenly mt-5">
                   {/* <div className='col-12 col-md-12 col-lg-4 col-xlg-4 col-xxlg-4 '>
                        <img src={mone} className='img-fluid p-2 w-100' style={{height:'555px', borderRadius:'25px'}}/>
                   </div>
                   <div className='col-12 col-md-12 col-lg-4 col-xlg-4 col-xxlg-4 '>
                   <img src={mtwo} className='img-fluid p-2 w-100' style={{height:'555px', borderRadius:'25px'}} />
                   </div> */}
                   <div className='col-12 col-md-12 col-lg-4 col-xlg-4 col-xxlg-4 '>
                   <img src={mthree} className='img-fluid p-2 w-100' style={{height:'555px', borderRadius:'25px'}} alt='img'/>
                   </div>
                   <div className='col-12 col-md-12 col-lg-4 col-xlg-4 col-xxlg-4 '>
                   <img src={mfour} className='img-fluid p-2 w-100' style={{height:'555px', borderRadius:'25px'}} alt='img'/>
                   </div>
                   {/* <div className='col-12 col-md-12 col-lg-4 col-xlg-4 col-xxlg-4 '>
                   <img src={mfive} className='img-fluid p-2 w-100' style={{height:'555px', borderRadius:'25px'}} />
                   </div> */}
                   <br/>
                   
                </div>
                <NavLink to='/services'>
                <button className='btn my-2 mb-2' id='km' >Know More</button></NavLink>
                   <br></br>
                </div>
            </div>
        
    </section>

    </>
  )
}

export default Pde
