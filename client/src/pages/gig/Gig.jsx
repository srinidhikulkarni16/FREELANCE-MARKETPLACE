import React from "react";
import { useParams } from "react-router-dom";
import { gigs } from "../../data"; 

const Gig = () => {
  const { id } = useParams();
  
  // Find the specific gig based on the ID in the URL
  const data = gigs.find((g) => g.id === Number(id));

  // Safety check if data isn't found
  if (!data) {
    return <div className="p-10 text-center">Gig not found.</div>;
  }

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

          {/* User Section - Dynamic Star and Review Count */}
          <div className="flex items-center gap-3">
            <img
              src={data.pp || "/img/noavatar.jpg"}
              alt=""
              className="w-9 h-9 rounded-full object-cover"
            />
            <span className="text-sm font-medium text-gray-700">
              {data.username}
            </span>

            <div className="flex items-center gap-1">
              <img src="/img/star.png" alt="" className="w-4 h-4" />
              <span className="text-sm font-semibold text-gray-700">
                {data.star} ({data.reviewCount})
              </span>
            </div>
          </div>

          {/* Image - Dynamic */}
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
              Delivering high-quality, modern, and brand-focused design solutions
              tailored to your business goals. Every project is handled with
              attention to detail and strategic thinking.
            </p>
          </div>

          {/* Seller Section - Dynamic */}
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
                {/* DYNAMIC LOCATION HERE */}
                <span className="font-medium text-gray-800">{data.location}</span>
              </div>

              <p className="leading-relaxed">
                Passionate designer focused on delivering scalable brand
                identities and creative assets that drive measurable impact.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE (BILLING SECTION) */}
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
              Professional logo design tailored to your brand.
            </p>

            <div className="flex justify-between text-sm text-gray-600">
              <span>3 Days Delivery</span>
              <span>2 Revisions</span>
            </div>

            <div className="flex flex-col gap-2 text-sm text-gray-600">
              <span>✔ High Resolution Files</span>
              <span>✔ Source File Included</span>
              <span>✔ Commercial Use</span>
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