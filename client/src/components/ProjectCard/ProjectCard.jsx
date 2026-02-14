import React from "react";

function ProjectCard({ card }) {
  return (
    <div className="w-[300px] h-[300px] rounded-[5px] overflow-hidden cursor-pointer border border-[#e1e1e1]">
      
      {/* Main Image */}
      <img
        src={card.img}
        alt=""
        className="w-full h-[70%] object-cover"
      />

      <div className="flex items-center gap-[20px] p-[15px]">
        
        {/* Profile Image */}
        <img
          src={card.pp}
          alt=""
          className="w-[40px] h-[40px] rounded-full object-cover"
        />

        <div>
          <h2 className="text-[14px] font-medium">
            {card.cat}
          </h2>
          <span className="text-[14px] font-light">
            {card.username}
          </span>
        </div>

      </div>
    </div>
  );
}

export default ProjectCard;
