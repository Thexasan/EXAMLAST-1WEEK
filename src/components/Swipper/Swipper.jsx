import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import chel from '../../assets/Rectangle 16.jpg'
import chel2 from '../../assets/Group 29.png'
import chel3 from '../../assets/Rectangle 20.jpg'
import chel5 from '../../assets/Rectangle 19.jpg'
import chel4 from '../../assets/Rectangle 17.jpg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./swip.css"

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function Swipper() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>              
                <img src={chel} alt="" />
        </SwiperSlide>
        <SwiperSlide>              
                <img src={chel2} alt="" />
        </SwiperSlide>
        <SwiperSlide>              
                <img src={chel3} alt="" />
        </SwiperSlide>
        <SwiperSlide>              
                <img src={chel4} alt="" />
        </SwiperSlide>
        <SwiperSlide>              
                <img src={chel5} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
