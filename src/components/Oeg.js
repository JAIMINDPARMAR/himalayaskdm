import React from 'react'
import { NavLink } from 'react-router-dom'

const Oeg = () => {
  return (
    <>
    <section class="galleryHome">
        <div class="container my-5" style={{backgroundColor:'var(--secondary-color)'}}>
            <div class="container pt-5 p-5" style={{backgroundColor:'white'}}>
                <div class="row">
                    <div class="col-md-6 col-sm-12">
                        <h6 style={{color:'var(--secondary-color)',
                            fontFamily:'var(--para-font)'
                        }}>OUR EVENT GALLERY</h6>
                        <h1 className='display-5' style={{color:'var(--secondary-color)',
                            fontFamily:'var(--head-font)'
                        }}>
                            Our <br />
                            Events & <br />
                            Parties
                        </h1>
                    </div>
                    <div class="col-md-6 d-none d-md-block">
                        <br />
                        <p className='lead ' style={{color:'gray',
                            fontFamily:'var(--para-font)'
                        }}>
                            A place where you will find all our successful events are captured. You will come accross
                            all our work done and get an idea of what what we do.
                        </p>
                        <div >
                            <NavLink to="/services"><button class="btn my-2 mb-2"  style={
                                {
                                    backgroundColor:'var(--secondary-color)',
                                    color:'var(--primary-color)'
                                }
                            }>Our Process</button></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    </>
      
    
  )
}

export default Oeg
