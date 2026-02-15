import React from "react";
import { Link } from "react-router-dom";

function CategoryCard({ card }) {
  return (
    <Link to={`/gigs?cat=${card.cat}`}>

      <div className="w-[252px] h-[344px] text-white rounded-md relative cursor-pointer overflow-hidden px-2">
        <img
          className="w-full h-full object-cover"
          src={card.img}
          alt=""
        />
        <span className="absolute top-4 left-4 font-light text-sm">
          {card.desc}
        </span>
        <span className="absolute top-10 left-4 text-2xl font-medium">
          {card.title}
        </span>
      </div>
    </Link>
  );
}

export default CategoryCard;
