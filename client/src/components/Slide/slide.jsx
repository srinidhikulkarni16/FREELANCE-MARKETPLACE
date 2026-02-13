import React from "react";
import "./slide.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Slide = ({ children }) => {
  return (
    <div className="slide">
      <div className="container">
        <Swiper
          slidesPerView={5}
          spaceBetween={20}
          direction="horizontal"
        >
          {React.Children.map(children, (child, index) => (
            <SwiperSlide key={index}>
              {child}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slide;
