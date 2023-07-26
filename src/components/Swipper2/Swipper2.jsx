import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import cert from '../../assets/Screen Shot 2023-07-08 at 17.51.55.png'
import cert2 from '../../assets/Screen Shot 2023-07-08 at 17.54.16.png'
import cert3 from '../../assets/Screen Shot 2023-07-08 at 17.56.23.png'
import cert5 from '../../assets/Screen Shot 2023-07-08 at 17.57.03.png'
import cert4 from '../../assets/Screen Shot 2023-07-08 at 17.51.55.png'

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./swiiper2.css"

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function Swipper2() {
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
                <img src={cert} alt="" />
        </SwiperSlide>
        <SwiperSlide>              
                <img src={cert2} alt="" />
        </SwiperSlide>
        <SwiperSlide>              
                <img src={cert3} alt="" />
        </SwiperSlide>
        <SwiperSlide>              
                <img src={cert4} alt="" />
        </SwiperSlide>
        <SwiperSlide>              
                <img src={cert5} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
