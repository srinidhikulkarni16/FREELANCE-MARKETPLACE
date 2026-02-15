import React from "react";
import { Link } from "react-router-dom";

const GigCard = ({ item }) => {
  return (
    <Link to={`/gig/${item.id}`} className="link group"> {/* Added 'group' here */}
      <div className="w-[324px] min-h-[420px] border border-[#e4e4e4] mb-[40px] flex flex-col justify-between">
        
        <div>
          {/* Main Image */}
          <img
            src={item.img}
            alt=""
            className="w-full h-[180px] object-cover"
          />

          <div className="px-[20px] py-[15px] flex flex-col gap-[15px]">
            
            {/* User */}
            <div className="flex items-center gap-[10px]">
              <img
                src={item.pp || "/img/noavatar.jpg"}
                alt=""
                className="w-[26px] h-[26px] rounded-full object-cover"
              />
              <span className="text-[14px] font-bold text-[#313131]">
                {item.username}
              </span>
            </div>

            {/* Description */}
            <p className="text-[#111] text-[15px] leading-6 line-clamp-2">
              {item.desc}
            </p>

            {/* Star */}
            <div className="flex items-center gap-[5px]">
              <img
                src="./img/star.png"
                alt=""
                className="w-[14px] h-[14px]"
              />
              <span className="text-[14px] font-bold text-[#313131]">
                {item.star}
              </span>
            </div>

            {/* THE MISSING ELEMENT: Animated Bar */}
            <div className="w-10 h-[2px] bg-gray-300 group-hover:bg-[#1a2e2e] group-hover:w-14 transition-all duration-300"></div>
          </div>
        </div>

        <div>
          <hr className="border-[0.5px] border-[#e4e4e4]" />

          {/* Detail */}
          <div className="px-[20px] py-[10px] flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-[#999] text-[10px] font-bold uppercase tracking-wider">
                STARTING AT
              </span>
              <h2 className="text-[#555] text-[18px] font-normal">
                ₹ {item.price}
              </h2>
            </div>
          </div>
        </div>

      </div>
    </Link>
  );
};

export default GigCard;