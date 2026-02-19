import React from "react";
import { Link } from "react-router-dom";
import { StarIcon } from "@heroicons/react/24/solid";

const GigCard = ({ item, hideImage }) => {
  
  const reviews = item.starNumber || item.reviewCount || 0;
  const rating = item.starNumber > 0 
    ? (item.totalStars / item.starNumber).toFixed(1) 
    : (item.star || "5.0");

  return (
    <Link to={`/gig/${item._id || item.id}`} className="group">
      <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full shadow-sm">
        
        {!hideImage && (
          <div className="h-48 overflow-hidden">
            <img 
              src={item.cover || item.img} 
              alt="" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}

        <div className="p-5 flex flex-col gap-3 flex-1">
          <div className="flex items-center gap-2">
            <img 
              src={item.pp || "/img/noavatar.jpg"} 
              className="w-6 h-6 rounded-full object-cover" 
              alt="seller" 
            />
            <span className="text-xs font-bold text-gray-700">{item.username || "Seller"}</span>
          </div>
          
          <p className="text-gray-600 font-semibold text-sm line-clamp-2 leading-snug">
            {item.desc}
          </p>

          <div className="flex items-center gap-1 text-yellow-500 mt-auto">
            <StarIcon className="h-4 w-4" />
            <span className="font-bold text-sm">{rating}</span>
            <span className="text-gray-400 text-xs ml-1">({reviews})</span>
          </div>
        </div>

        <div className="px-5 py-3 border-t border-gray-50 flex justify-between items-center bg-gray-50/50">
          <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Starting at</span>
          <span className="text-lg font-black text-gray-900">₹{item.price.toLocaleString("en-IN")}</span>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;