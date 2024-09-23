import React from 'react'
import './Expertise.css'
import { NavLink } from 'react-router-dom'
import imgone from './images/mainimgone.jpeg'
import imgtwo from './images/expone.jpg'
import imgthree from './images/exptwo.jpg'
const Expertise = () => {
  return (
    <>
         <section class="homeSection">
        <div class="container my-5 expertisecontainer" >
            <div class="homeSec sectservice">
                <div class="row maragin">
                    <div class="col-md-6">
                        <div class="galleryLink">
                            <div class="gallContent">
                                <h6 className=' p-3 Ep'>Expertise in</h6>
                                <h1 className=' px-2 Eh'>Catering Service | <br/>Hospitality Service </h1>
                                <p className=' px-2 mt-5 lead Et'>
                                Custom Menus: We work closely with clients to design personalized menus that reflect their tastes and dietary preferences, from elegant hors d'oeuvres to lavish multi-course meals.
                                     </p>
                                <p className=' px-2 lead Et'>
                                High-Quality Ingredients: We prioritize freshness and quality, sourcing local ingredients whenever possible to create dishes that are not only delicious but also visually stunning.
                                </p>
                                <p className=' px-2 lead Et'>
                                Setup and Cleanup: Our team takes care of all logistical aspects, including setup, service, and cleanup, so you can focus on enjoying your event.
                                </p>
                                <p className=' px-2 lead Et'>
                                Professional Staffing: Our  team is experienced and professional, ensuring that every interaction reflects our commitment to excellence. 
                                </p>
                                <p className=' px-2 lead Et'>
                                Event Coordination: Our event coordinators work with you to plan every detail, ensuring that your vision comes to life seamlessly.
                                </p>

                                <NavLink to='/gallery'>
                <button className='btn my-2 mb-2' id='km' >Know More</button></NavLink>
                   <br></br>
                            </div>
                            <div class=''>
                                <img className='img-expertise' src={imgone} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="img-expertise"><img className='img-expertise' src={imgtwo} alt=""/></div>
                        <div class="img-expertise"><img className='img-expertise' src={imgthree} alt=""/></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Expertise
