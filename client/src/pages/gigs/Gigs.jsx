import React, { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { gigs } from "../../data";
import GigCard from "../../components/gigCard/GigCard";

function Gigs() {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const category = query.get("cat");

  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const [filteredGigs, setFilteredGigs] = useState(gigs);

  const minRef = useRef();
  const maxRef = useRef();

  // 🔹 Filter by Category
  useEffect(() => {
    let temp = gigs;

    if (category) {
      temp = temp.filter((gig) => gig.cat === category);
    }

    setFilteredGigs(temp);
  }, [category]);

  // 🔹 Sort Function
  const reSort = (type) => {
    setSort(type);
    setOpen(false);

    let sorted = [...filteredGigs];

    if (type === "sales") {
      sorted.sort((a, b) => b.star - a.star);
    } else if (type === "createdAt") {
      sorted.sort((a, b) => b.id - a.id);
    }

    setFilteredGigs(sorted);
  };

  // 🔹 Budget Filter
  const apply = () => {
    let temp = gigs;

    if (category) {
      temp = temp.filter((gig) => gig.cat === category);
    }

    const min = minRef.current.value;
    const max = maxRef.current.value;

    if (min) temp = temp.filter((gig) => gig.price >= min);
    if (max) temp = temp.filter((gig) => gig.price <= max);

    setFilteredGigs(temp);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-[1400px] py-[30px] flex flex-col gap-[15px]">
        <span className="font-light uppercase text-[20px] text-[#555]">
          NYX
        </span>

        <h1 className="text-2xl font-semibold">
          {category ? category.replace("-", " ") : "All Gigs"}
        </h1>

        <p className="text-[#999] text-xl font-light">
          Explore the boundaries of art and technology with NYX's freelancers
        </p>

        {/* MENU */}
        <div className="flex items-center justify-between mb-[20px]">
          {/* LEFT: Budget Filter */}
          <div className="flex items-center gap-[10px] text-[#555] font-light text-xl">
            <span>Budget</span>

            <input
              ref={minRef}
              type="number"
              placeholder="min"
              className="p-[5px] border border-gray-300 rounded-[5px] outline-none"
            />

            <input
              ref={maxRef}
              type="number"
              placeholder="max"
              className="p-[5px] border border-gray-300 rounded-[5px] outline-none"
            />

            <button
              onClick={apply}
              className="px-[10px] py-[5px] bg-[#1a2e2e] text-white font-medium rounded-[5px]"
            >
              Apply
            </button>
          </div>

          {/* RIGHT: Sort Dropdown */}
          <div className="relative flex items-center gap-[10px]">
            <span className="text-[#555] font-light text-xl">Sort by :</span>
            <span className="font-medium">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>

            {/* <img
              src="./img/down.png"
              alt="dropdown"
              className="w-[15px] cursor-pointer"
              onClick={() => setOpen(!open)}
            /> */}

            {open && (
              <div className="absolute top-[30px] right-0 z-[9] p-[20px] bg-white border border-gray-300 rounded-[5px] flex flex-col gap-[20px]">
                <span
                  onClick={() => reSort("sales")}
                  className="cursor-pointer text-xl"
                >
                  Best Selling
                </span>
                <span
                  onClick={() => reSort("createdAt")}
                  className="cursor-pointer text-xl"
                >
                  Newest
                </span>
              </div>
            )}
          </div>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-4 gap-6">
          {filteredGigs.map((gig) => (
            <GigCard key={gig.id} item={gig} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gigs;
