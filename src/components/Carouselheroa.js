import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import img3 from './images/img3.jpg'
import img4 from './images/img4.jpeg'
import backimg from './images/backimg.jpeg'
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import './Carouselheroa.css'
const Carouselheroa = () => {
  
  return (
    <>
    <section className="homeSection mt-5" >
        
        <div className='container'>
        
        
        <Swiper pagination={true} modules={[Pagination,Autoplay]} 
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        className="mySwiper swiperhero">
        <SwiperSlide>
        <div className="imagec-container">
      <img src={img3} alt="img" className="imagec" />
      <div className="overlaya">
        
        <h1 className='p-2 ' style={{fontSize:'75px',fontFamily:'var(--head-font)'}}>About Us</h1>
    
      </div>
    </div>
          
        </SwiperSlide>
        <SwiperSlide>
        <div className="imagec-container">
      <img src={img4} alt="img" className="imagec" />
      <div className="overlaya">
      <h1 className='p-2 display-1' style={{fontSize:'75px',fontFamily:'var(--head-font)'}}>About Us</h1>
      </div>
    </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="imagec-container">
      <img src={backimg} alt="img" className="imagec" />
      <div className="overlaya">
      <h1 className='p-2  display-1' style={{fontSize:'75px',fontFamily:'var(--head-font)'}}>About Us</h1>
      </div>
    </div>
        </SwiperSlide>
        
      </Swiper>
      <div class="container">
  <nav class="navbar navbar-expand-lg mb-5" style={{backgroundColor:'var(--secondary-color)'}}>
    <div class="container-fluid">
      
    </div>
  </nav>
</div>
        </div>
    </section>
    </>
  )
}

export default Carouselheroa
