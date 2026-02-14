import React from "react";
import { Link } from "react-router-dom";

const GigCard = ({ item }) => {
  return (
    <Link to="/gig/123" className="link">
      <div className="w-[324px] h-[400px] border border-[#e4e4e4] mb-[40px]">
        
        {/* Main Image */}
        <img
          src={item.img}
          alt=""
          className="w-full h-1/2 object-cover"
        />

        <div className="px-[20px] py-[10px] flex flex-col gap-[20px]">
          
          {/* User */}
          <div className="flex items-center gap-[10px]">
            <img
              src={item.pp}
              alt=""
              className="w-[26px] h-[26px] rounded-full object-cover"
            />
            <span className="text-[14px] font-bold text-[#ffc108]">
              {item.username}
            </span>
          </div>

          {/* Description */}
          <p className="text-[#111]">
            {item.desc}
          </p>

          {/* Star */}
          <div className="flex items-center gap-[5px]">
            <img
              src="./img/star.png"
              alt=""
              className="w-[14px] h-[14px]"
            />
            <span className="text-[14px] font-bold text-[#ffc108]">
              {item.star}
            </span>
          </div>
        </div>

        <hr className="border-[0.5px] border-[#e4e4e4]" />

        {/* Detail */}
        <div className="px-[20px] py-[10px] flex items-center justify-between">
          <img
            src="./img/heart.png"
            alt=""
            className="w-[16px] h-[16px] object-cover cursor-pointer"
          />

          <div>
            <span className="text-[#999] text-[12px]">
              STARTING AT
            </span>

            <h2 className="text-[#555] text-[18px] font-normal text-end">
              $ {item.price}
              <sup className="text-[12px] font-light">
                99
              </sup>
            </h2>
          </div>
        </div>

      </div>
    </Link>
  );
};

export default GigCard;
