import React, { useRef, useState } from "react";
import { gigs } from "../../data";
import GigCard from "../../components/gigCard/GigCard";

function Gigs() {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const minRef = useRef();
  const maxRef = useRef();

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  const apply = () => {
    console.log(minRef.current.value);
    console.log(maxRef.current.value);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-[1400px] py-[30px] flex flex-col gap-[15px]">

        <span className="font-light uppercase text-[13px] text-[#555]">
          NYX Graphics & Design
        </span>

        <h1 className="text-2xl font-semibold">
          AI Artists
        </h1>

        <p className="text-[#999] font-light">
          Explore the boundaries of art and technology with NYX's AI artists
        </p>

        {/* MENU */}
        <div className="flex items-center justify-between mb-[20px]">

          {/* LEFT */}
          <div className="flex items-center gap-[10px] text-[#555] font-light">
            <span>Budget</span>

            <input
              ref={minRef}
              type="number"
              placeholder="min"
              className="p-[5px] border border-gray-300 rounded-[5px] outline-none placeholder:text-[#999]"
            />

            <input
              ref={maxRef}
              type="number"
              placeholder="max"
              className="p-[5px] border border-gray-300 rounded-[5px] outline-none placeholder:text-[#999]"
            />

            <button
              onClick={apply}
              className="px-[10px] py-[5px] bg-[#1dbf73] text-white font-medium rounded-[5px] cursor-pointer"
            >
              Apply
            </button>
          </div>

          {/* RIGHT */}
          <div className="relative flex items-center gap-[10px]">

            <span className="text-[#555] font-light">
              Sort by
            </span>

            <span className="font-medium">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>

            <img
              src="./img/down.png"
              alt=""
              className="w-[15px] cursor-pointer"
              onClick={() => setOpen(!open)}
            />

            {open && (
              <div className="absolute top-[30px] right-0 z-[9] p-[20px] bg-white border border-gray-300 rounded-[5px] flex flex-col gap-[20px] text-[#555]">

                {sort === "sales" ? (
                  <span
                    onClick={() => reSort("createdAt")}
                    className="cursor-pointer"
                  >
                    Newest
                  </span>
                ) : (
                  <span
                    onClick={() => reSort("sales")}
                    className="cursor-pointer"
                  >
                    Best Selling
                  </span>
                )}

                <span
                  onClick={() => reSort("sales")}
                  className="cursor-pointer"
                >
                  Popular
                </span>

              </div>
            )}
          </div>
        </div>

        {/* CARDS */}
        <div className="flex justify-between flex-wrap">
          {gigs.map((gig) => (
            <GigCard key={gig.id} item={gig} />
          ))}
        </div>

      </div>
    </div>
  );
}

export default Gigs;
