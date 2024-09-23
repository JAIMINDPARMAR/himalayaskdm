
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import './Carousel.css';

// import required modules
import { Autoplay, Grid, Pagination } from 'swiper/modules';
import Swipersliderdiv from './Swipersliderdiv';

export default function Carousel() {
  return (
    <>
    <h1 className='display-5 text-center' style={{fontFamily:'var(--head-font)',color:'var(--secondary-color)'}}>
      -Testinomals-
    </h1>
    <h3 className=' text-center' style={{fontFamily:'var(--head-font)',color:'var(--secondary-color)'}}>
      Reviews by our Valued Customers
    </h3>
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          770: {
            slidesPerView: 2,
          },

          1024: {
            slidesPerView: 3,
          },
        }}
        grid={{
          rows: 1,
        }}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          
        }}
        navigation={true}
        modules={[Autoplay, Grid, Pagination]}
        className="mySwiper p-5"
      >
        <div>
        
          <SwiperSlide id='swiper-slide5'>
            <Swipersliderdiv name='arjun kakade' review='Dream place for your special day
I got married on 1st May 2024 The service, Facilities are worth it. They just made my day more beautiful than expected. The Banquet is Fantastic 😍 and Himalaya Catering Service made food Delicious with love and their staff and services are great I suggested to have this in your special day ❤️🧿' rtime='4 months ago'/>
          </SwiperSlide>   
          <SwiperSlide id='swiper-slide5'><Swipersliderdiv name="
sandesh gajghat" review="I would like to sincerely thank Himalaya Caterers for their service.
Food, service and Staff are outstanding.
Food taste quality is undoubtedly excellent but the ambience they create with their presentation is outstanding.
💯 recommended" rtime="3 months ago"/></SwiperSlide>
          <SwiperSlide id='swiper-slide5'><Swipersliderdiv name="
Arvind Shinde" review="I booked for my wedding and reception the service was top notch food quality was top notch and the owners was supportive and good in nature they gave ous suprise dish also from there side I was really happy with every thing from snakes to food to sweet waffles n all was yummy!! Thank you again for making my marriage a success." rtime="4 months ago"/></SwiperSlide>
          <SwiperSlide id='swiper-slide5'><Swipersliderdiv name="Manish Joshi" review="Thanks to Himalaya Catering Service for such a delicious food. It was very very nice experience. Food was really delicious. Staff was very supportive. Service was good. Thank you so much Ravi ji for making our function very memorable." rtime="5 months ago"/></SwiperSlide>
          <SwiperSlide id='swiper-slide5'><Swipersliderdiv name="mayur jagiasi" review="Damn good service, booked for 3 functions, tasty food, good management, never say no attitude of the gentleman. Surely will give order again. Perfect presentation in Globe business park (Ambernath West) for marriage." rtime="5 months ago"/></SwiperSlide>
          <SwiperSlide id='swiper-slide5'><Swipersliderdiv name="
Jitesh Jagiasi" review="It was really great experience with Himalaya catering service, they are just perfect with food quality, serving and overall service.
I would highly recommend to anyone who is looking for catering assistance for any wedding function(s), trust me you won't regret this decision." rtime="5 months ago"/></SwiperSlide>
          <SwiperSlide id='swiper-slide5'><Swipersliderdiv name="
Karan Talreja" review="Best wedding caterers in the town...special thanks to Mr ravi for managing it so properly...Thanks agian for the food quality, presentation and the service.
Every guest who attended the wedding has appreciated.🙏" rtime="8 months ago"/></SwiperSlide>
          <SwiperSlide id='swiper-slide5'><Swipersliderdiv name="Jitendra Kumar" review="They served us for my wedding event food was so delicious, very nice counters decoration, always recommend,
thank you!" rtime="a month ago"/></SwiperSlide>
          <SwiperSlide id='swiper-slide5'><Swipersliderdiv name="Umesh Dhurandhar" review="The service was really good.
The staff was very polite and humble
The taste of the food was also very good" rtime="5 months ago"/></SwiperSlide>
        </div>
      </Swiper>
    </>
  );
}
