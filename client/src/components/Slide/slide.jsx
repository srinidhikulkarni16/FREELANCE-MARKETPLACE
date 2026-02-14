import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Slide = ({ children }) => {
  return (
    <div className="flex justify-center">
      <div className="w-[1200px]">
        <Swiper
          slidesPerView={5}
          spaceBetween={20}
          direction="horizontal"
        >
          {React.Children.map(children, (child, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center h-[200px]"
            >
              {child}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slide;
