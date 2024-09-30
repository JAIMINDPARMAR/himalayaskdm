import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import img3 from './images/img3.jpg'
import img4 from './images/img4.jpeg'
import backimg from './images/backimg.jpeg'
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import './Carouselhero.css'
const Carouselhero = () => {
  
  return (
    <>
    <section className="homeSection mt-5" >
        
        <div className='container ' style={{borderRadius: '10px'}}>
        
        
        <Swiper pagination={true} modules={[Pagination,Autoplay]} 
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        className="mySwiper swiperhero">
        <SwiperSlide>
        <div className="image-container">
      <img src={img3} alt="img" className="image" />
      <div className="overlay">
        <h5 className='p-2'>Since 1995</h5>
        <h1 className='p-2 display-1' style={{fontFamily:'var(--head-font)'}}>Himalaya <br/> Catering</h1>
        <h5 className='p-2'>"Your Celebration, Our Passion."</h5>
      </div>
    </div>
          
        </SwiperSlide>
        <SwiperSlide>
        <div className="image-container">
      <img src={img4} alt="img" className="image" />
      <div className="overlay">
        <h5 className='p-2'>Since 1995</h5>
        <h1 className='p-2 display-1' style={{fontFamily:'var(--head-font)'}}>Himalaya <br/> Catering</h1>
        <h5 className='p-2'>"Your Celebration, Our Passion."</h5>
      </div>
    </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="image-container">
      <img src={backimg} alt="img" className="image" />
      <div className="overlay">
        <h5 className='p-2'>Since 1995</h5>
        <h1 className='p-2 display-1' style={{fontFamily:'var(--head-font)'}}>Himalaya <br/> Catering</h1>
        <h5 className='p-2'>"Your Celebration, Our Passion."</h5>
      </div>
    </div>
        </SwiperSlide>
        
      </Swiper>
      <div className="container">
  <nav className="navbar navbar-expand-lg " style={{backgroundColor:'var(--secondary-color)'}}>
    <div className="container-fluid">
      
    </div>
  </nav>
</div>
        </div>
    </section>
    </>
  )
}

export default Carouselhero
