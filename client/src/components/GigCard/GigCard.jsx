import React from "react";
import { Link } from "react-router-dom";

const GigCard = ({ item }) => {
  return (
    <Link to={`/gig/${item._id}`}
      className="link group"> 
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

          {/* Detail Section */}
<div className="px-[20px] py-[10px] flex items-center justify-between">
  <div className="flex flex-col">
    <span className="text-[#999] text-[10px] font-bold uppercase tracking-wider">
      STARTING AT
    </span>
    <h2 className="text-[#555] text-[20px] font-semibold">
      ₹{item.price.toLocaleString('en-IN')}
    </h2>
  </div>
  {/* Optional Heart Icon */}
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
</div>
        </div>

      </div>
    </Link>
  );
};

export default GigCard;