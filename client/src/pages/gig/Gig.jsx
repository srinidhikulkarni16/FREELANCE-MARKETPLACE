import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../Services/NewReq";

const Gig = () => {
  const { id } = useParams();

  // Fetch gig dynamically from backend
  const { data, isLoading, error } = useQuery({
    queryKey: ["gig", id],
    queryFn: () => newRequest.get(`/gigs/single/${id}`).then((res) => res.data),
  });

  // --- UPDATED LOADING AND ERROR STATES ---
  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-40">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0a1b1b]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <div className="bg-red-50 border border-red-200 text-red-600 px-6 py-4 rounded-lg shadow-sm flex flex-col items-center gap-2 max-w-md text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h2 className="font-bold text-lg">Oops! Something went wrong</h2>
          <p className="text-sm opacity-90">
            {error.response?.data || "We couldn't load the gig details. Please verify the link or try again later."}
          </p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-2 text-xs font-semibold underline hover:text-red-800"
          >
            Refresh Page
          </button>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <h2 className="text-xl font-semibold text-gray-600">Gig not found.</h2>
      </div>
    );
  }

  // --- EVERYTHING ELSE REMAINS EXACTLY THE SAME ---
  return (
    <div className="flex justify-center bg-[#f9fafb] py-10">
      <div className="w-[1400px] flex gap-12">
        {/* LEFT SIDE */}
        <div className="flex-[2] flex flex-col gap-8">
          <span className="text-[20px] uppercase tracking-wide text-gray-500">
            {data.cat} 
          </span>

          <h1 className="text-3xl font-semibold text-gray-800">
            {data.desc}
          </h1>

          {/* User Section */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-gray-700">
              {data.username}
            </span>

            <div className="flex items-center gap-1">
              <span className="text-sm font-semibold text-gray-700">
                {data.star} ({data.reviewCount})
              </span>
            </div>
          </div>

          {/* Image */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
            <img
              src={data.img}
              alt=""
              className="max-h-[500px] object-cover w-full"
            />
          </div>

          {/* About */}
          <div className="bg-white p-8 rounded-xl shadow-sm flex flex-col gap-4 border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-800">
              About This Gig
            </h2>
            <p className="text-gray-600 leading-relaxed text-[15px]">
              {data.about || "Delivering high-quality, modern, and brand-focused design solutions tailored to your business goals."}
            </p>
          </div>

          {/* Seller Section */}
          <div className="bg-white p-8 rounded-xl shadow-sm flex flex-col gap-6 border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-800">
              About The Seller
            </h2>
            <div className="flex items-center gap-6">
              <img
                src={data.pp || "/img/noavatar.jpg"}
                alt=""
                className="w-24 h-24 rounded-full object-cover"
              />
              <div className="flex flex-col gap-3">
                <span className="font-medium text-gray-800 text-lg">
                  {data.username}
                </span>

                <div className="flex items-center gap-1">
                  <img src="/img/star.png" alt="" className="w-4 h-4" />
                  <span className="text-sm font-semibold text-[#313131]">
                    {data.star} ({data.reviewCount} Reviews)
                  </span>
                </div>

                <button className="border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition">
                  Contact Me
                </button>
              </div>
            </div>

            <div className="border-t pt-6 text-gray-600 text-sm">
              <div className="flex justify-between mb-4">
                <span className="text-gray-500">From</span>
                <span className="font-medium text-gray-800">{data.location}</span>
              </div>
              <p className="leading-relaxed">
                {data.sellerDescription || "Passionate designer focused on delivering scalable brand identities and creative assets that drive measurable impact."}
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE (Billing) */}
        <div className="flex-1 sticky top-[120px] h-max">
          <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col gap-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium text-gray-700">
                Basic Package
              </h2>
              <h3 className="text-2xl font-bold text-gray-800">
                ₹{data.price}
              </h3>
            </div>
            <p className="text-gray-500 text-sm">
              {data.packageDescription || "Professional logo design tailored to your brand."}
            </p>
            <div className="flex justify-between text-sm text-gray-600">
              <span>{data.deliveryTime || "3 Days Delivery"}</span>
              <span>{data.revisions || "2 Revisions"}</span>
            </div>
            <div className="flex flex-col gap-2 text-sm text-gray-600">
              {data.features?.map((f, idx) => (
                <span key={idx}>✔ {f}</span>
              ))}
            </div>
            <button className="bg-[#0a1b1b] hover:bg-[#1a2e2e] transition py-3 rounded-lg text-white font-semibold text-lg">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gig;