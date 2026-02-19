import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import GigCard from "../../components/GigCard/GigCard";
import newRequest from "../../Services/NewReq";
import { useQuery } from "@tanstack/react-query";
import { gigs as localGigs } from "../../data";

function Gigs() {
  const { search } = useLocation(); 
  const [sort, setSort] = useState("sales");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  const { isLoading, error, data } = useQuery({
    queryKey: ["gigs", search, sort, min, max],
    queryFn: () =>
      newRequest
        .get(`/gigs${search}&min=${min}&max=${max}&sort=${sort}`)
        .then((res) => res.data),
  });

  // Get category from URL to filter local data
  const cat = new URLSearchParams(search).get("cat");

  // If DB returns data, use it. Otherwise, use localGigs filtered by category.
  const displayData = (data && data.length > 0) 
    ? data 
    : localGigs.filter(g => !cat || g.cat === cat);

  return (
    <div className="w-full flex justify-center">
      <div className="w-[1400px] py-[30px] flex flex-col gap-[15px]">
        <span className="text-sm text-gray-400 uppercase tracking-widest">NYX MARKETPLACE</span>
        <h1 className="text-3xl font-bold">{cat || "All Services"}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {displayData.map((gig) => (
            <GigCard key={gig._id || gig.id} item={gig} />
          ))}
        </div>

        {displayData.length === 0 && (
          <div className="text-center py-20 text-gray-500">No services found in this category.</div>
        )}
      </div>
    </div>
  );
}

export default Gigs;