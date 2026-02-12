import React from "react";
import "./slide.css";
import { Swiper, SwiperSlide } from "swiper/react";


const Slide = ({ children, slidesToShow, arrowsScroll }) => {
  return (
    <div className="slide">
      <div className="slide-container">
        <Swiper slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
          {children}
        </Swiper>
      </div>
    </div>
  );
};

export default Slide;