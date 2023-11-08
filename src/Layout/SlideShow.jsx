import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import svg1 from './Group 1000005596 (2).svg'

// Import Swiper styles
import 'swiper/css';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
    <div className='onboarding'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className='card-slide'>  
          <div>
            <img class="w-56 mt-32" src={svg1} />
            <h1 class="mt-6 text-3xl text-white md:text-3xl lg:text-4xl xl:text-5xl">Improve your business with AdMrt!</h1>
            <p class="mt-10 font-light text-white">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, </p>
           </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='card-slide'>  
          <div>
            <img class="w-56 mt-32" src={svg1} />
            <h1 class="mt-6 text-3xl text-white md:text-3xl lg:text-4xl xl:text-5xl">Improve your business with AdMrt!</h1>
            <p class="mt-10 font-light text-white">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, </p>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
         <div className='card-slide'>
          <div> 
            <img class="w-56 mt-32" src={svg1} />
            <h1 class="mt-6 text-3xl text-white md:text-3xl lg:text-4xl xl:text-5xl">Improve your business with AdMrt!</h1>
            <p class="mt-10 font-light text-white">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, </p>
          </div> 
         </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}
