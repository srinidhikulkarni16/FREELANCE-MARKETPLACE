import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import GigCard from "../../components/GigCard/GigCard";
import newRequest from "../../Services/NewReq";
import { useQuery } from "@tanstack/react-query";

function Gigs() {
  const { search } = useLocation(); 
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  // Build query parameters safely
  const fetchGigs = async () => {
    const params = new URLSearchParams();

    // Category from URL
    const cat = new URLSearchParams(search).get("cat");
    const searchParam = new URLSearchParams(search).get("search"); // ADD THIS

    if (cat) params.append("cat", cat);
    if (searchParam) params.append("search", searchParam); // ADD THIS

    // Min/Max filters
    if (min) params.append("min", min);
    if (max) params.append("max", max);

    // Sort
    params.append("sort", sort);

    const url = `/gigs?${params.toString()}`;
    console.log("Fetching:", url); 
    const res = await newRequest.get(url);
    return res.data;
  };

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["gigs", search, sort, min, max],
    queryFn: fetchGigs,
    keepPreviousData: true,
  });

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  const applyFilters = () => {
    refetch(); // triggers fetch with updated min/max
  };

  const categoryName = new URLSearchParams(search).get("cat") || "All Gigs";

  return (
    <div className="w-full flex justify-center">
      <div className="w-[1400px] py-[30px] flex flex-col gap-[15px]">
        <span className="font-light uppercase text-[20px] text-[#555]">NYX</span>
        <h1 className="text-2xl font-semibold">{categoryName}</h1>
        <p className="text-[#999] text-xl font-light">
          Explore the boundaries of art and technology with NYX's freelancers
        </p>

        {/* MENU */}
        <div className="flex items-center justify-between mb-[20px]">
          <div className="flex items-center gap-[10px] text-[#555] font-light text-xl">
            <span>Budget</span>
            <input
              type="number"
              placeholder="min"
              value={min}
              onChange={(e) => setMin(e.target.value)}
              className="p-[5px] border border-gray-300 rounded-[5px] outline-none"
            />
            <input
              type="number"
              placeholder="max"
              value={max}
              onChange={(e) => setMax(e.target.value)}
              className="p-[5px] border border-gray-300 rounded-[5px] outline-none"
            />
            <button
              onClick={applyFilters}
              className="px-[10px] py-[5px] bg-[#1a2e2e] text-white font-medium rounded-[5px]"
            >
              Apply
            </button>
          </div>

          <div className="relative flex items-center gap-[10px]">
            <span className="text-[#555] font-light text-xl">Sort by :</span>
            <span
              className="font-medium cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
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

        {/* CARDS SECTION */}
        <div className="grid grid-cols-4 gap-6">
          {isLoading ? (
            <p>Loading gigs...</p>
          ) : error ? (
            <p>Something went wrong!</p>
          ) : data?.length > 0 ? (
            data.map((gig) => <GigCard key={gig._id} item={gig} />)
          ) : (
            <p className="text-gray-500">No gigs found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Gigs;
