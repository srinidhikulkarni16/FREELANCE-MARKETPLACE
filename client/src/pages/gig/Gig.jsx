import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../Services/NewReq";
import Reviews from "../../components/Reviews/Reviews";
import { StarIcon, CheckIcon, ClockIcon, ArrowPathIcon } from "@heroicons/react/24/solid";
// Import static data to get local images
import { gigs as staticGigs, projects as staticProjects } from "../../data";

const Gig = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, error } = useQuery({
    queryKey: ["gig", id],
    queryFn: () => newRequest.get(`/gigs/single/${id}`).then((res) => res.data),
  });

  const { data: seller } = useQuery({
    queryKey: ["user", data?.userId],
    queryFn: () => newRequest.get(`/users/${data.userId}`).then((res) => res.data),
    enabled: !!data?.userId,
  });

  // Lookup profile picture from data.js based on username
  const findProfilePicture = (username) => {
    const match = [...staticGigs, ...staticProjects].find(item => item.username === username);
    return match?.pp || seller?.img || "/img/noavatar.jpg";
  };

  const sellerProfileImg = findProfilePicture(seller?.username);
  const rating = data?.starNumber > 0 ? (data.totalStars / data.starNumber).toFixed(1) : "0.0";

  if (isLoading) return <div className="py-40 text-center animate-pulse font-medium text-gray-400 text-xl">Loading Experience...</div>;
  if (error) return <div className="py-40 text-center text-red-500">Unable to retrieve gig details.</div>;

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6 py-12 flex flex-col lg:flex-row gap-16">
        
        {/* LEFT SECTION */}
        <div className="flex-[2] space-y-10">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0a1b1b] bg-gray-100 px-3 py-1 rounded-full">{data.cat}</span>
            <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">{data.title}</h1>
            <div className="flex items-center gap-4 text-sm font-semibold">
              <span className="text-gray-900 border-r pr-4">{seller?.username || "Official Seller"}</span>
              <div className="flex items-center gap-1 text-yellow-500">
                <StarIcon className="h-4 w-4" />
                <span>{rating}</span>
                <span className="text-gray-400 font-normal">({data.starNumber} reviews)</span>
              </div>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img src={data.cover} alt="Cover" className="w-full object-cover max-h-[600px]" />
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">About this gig</h2>
            <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-wrap">{data.desc}</p>
          </div>

          {/* SELLER CONTACT SECTION WITH PHOTO FROM DATA.JS */}
          <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 flex items-center justify-between">
            <div className="flex gap-4 items-center">
              <div className="h-16 w-16 rounded-full bg-white shadow-sm overflow-hidden flex items-center justify-center font-bold text-xl text-[#0a1b1b]">
                <img src={sellerProfileImg} alt={seller?.username} className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Work with {seller?.username}</h4>
                <p className="text-gray-500 text-sm">Professional from {seller?.country || "Global"}</p>
              </div>
            </div>
            <button className="bg-white border-2 border-[#0a1b1b] text-[#0a1b1b] px-6 py-2 rounded-xl font-bold hover:bg-[#0a1b1b] hover:text-white transition-all">
              Contact Me
            </button>
          </div>

          <Reviews gigId={data._id} />
        </div>

        {/* RIGHT SECTION (Sticky Sidebar) */}
        <div className="flex-1">
          <div className="sticky top-24 border border-gray-200 rounded-[2.5rem] p-8 shadow-2xl shadow-gray-200/50 bg-white flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-xl text-[#0a1b1b]">Premium Delivery</h3>
              <span className="text-3xl font-black text-[#0a1b1b]">₹{data.price}</span>
            </div>
            <p className="text-gray-500 font-medium">{data.shortDesc}</p>
            
            <div className="grid grid-cols-2 gap-4 py-4 border-y border-gray-50">
              <div className="flex items-center gap-2 text-sm font-bold text-gray-700">
                <ClockIcon className="h-5 w-5 text-gray-400" />
                {data.deliveryTime} Days
              </div>
              <div className="flex items-center gap-2 text-sm font-bold text-gray-700">
                <ArrowPathIcon className="h-5 w-5 text-gray-400" />
                {data.revisionNumber} Revisions
              </div>
            </div>

            <div className="space-y-3">
              {data.features?.map((f, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckIcon className="h-5 w-5 text-[#0a1b1b]" />
                  {f}
                </div>
              ))}
            </div>

            <button 
              onClick={() => navigate(`/pay/${data._id}`)}
              className="w-full bg-[#0a1b1b] text-white py-5 rounded-2xl font-bold text-lg hover:bg-[#1a2e2e] transition-all active:scale-[0.98] shadow-lg shadow-gray-300"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gig;