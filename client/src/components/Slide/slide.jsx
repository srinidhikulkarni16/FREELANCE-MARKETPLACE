import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";

const Slide = ({ children }) => {
  return (
    <div className="flex justify-center w-full relative">
      <div className="w-[1200px] relative flex items-center">

        {/* LEFT BUTTON */}
        <div className="custom-prev absolute -left-14 z-10">
          <div className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center cursor-pointer">
            <span className="text-[#1a2e2e] text-xl font-bold">‹</span>
          </div>
        </div>

        {/* SWIPER */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
        >
          {React.Children.map(children, (child, index) => (
            <SwiperSlide key={index}>
              {child}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* RIGHT BUTTON */}
        <div className="custom-next absolute -right-14 z-10">
          <div className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center cursor-pointer">
            <span className="text-[#1a2e2e] text-xl font-bold">›</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Slide;
