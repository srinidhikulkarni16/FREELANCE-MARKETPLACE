import React from "react";

function Featured() {
  return (
    <div className="h-[600px] flex justify-center items-center bg-[#1a2e2e] text-white">
      <div className="flex flex-col items-center gap-[30px] px-10 text-center">

        <h2 className="text-[50px] font-bold text-white">
          Precision-driven{" "}
          <span className="italic font-light text-[50px]">freelancers</span>{" "}
          for forward-thinking brands!
        </h2>

        <div className="bg-white rounded-[25px] flex items-stretch justify-between overflow-hidden w-[800px] h-[70px]">
          <input
            type="text"
            placeholder="Try Building Something!"
            className="w-full border-none outline-none text-black text-[20px] placeholder:text-gray-400 pl-[35px]"
          />

          <button className="w-[180px] rounded-[25px] border-none bg-[#555555] text-white text-[20px] font-bold cursor-pointer hover:bg-[#444d4d] transition-colors">
            Search
          </button>
        </div>
        
        <div className="flex items-center outline-none gap-[10px] flex-wrap justify-center">
          <span className="italic font-semibold text-lg text-white">Popular:</span>
          {["Web Design", "WordPress", "Logo Design", "AI Services"].map(
            (item) => (
              <button
                key={item}
                className="w-max text-white border-2 border-white py-[6px] px-[15px] bg-transparent text-[18px] font-medium rounded-full hover:bg-white hover:text-[#1a2e2e] transition-all duration-300"
              >
                {item}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Featured;
