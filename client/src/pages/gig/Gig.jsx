import React, { Suspense, lazy, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../Services/NewReq";
import { 
  StarIcon, CheckIcon, ClockIcon, ArrowPathIcon, 
  ChevronRightIcon, ChatBubbleLeftEllipsisIcon, LockClosedIcon
} from "@heroicons/react/24/solid";
// Import static data to get local images as a fallback
import { gigs as staticGigs, projects as staticProjects } from "../../data";

// Lazy load reviews for performance
const Reviews = lazy(() => import("../../components/Reviews/Reviews"));

const Gig = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState("Standard");
  
  // Get the current user to handle contact logic
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  // 1. Fetch Gig Data
  const { data, isLoading, error } = useQuery({
    queryKey: ["gig", id],
    queryFn: () => newRequest.get(`/gigs/single/${id}`).then((res) => res.data),
    enabled: !!id,
  });

  // 2. Fetch Seller Data
  const { data: seller, isLoading: isLoadingUser } = useQuery({
    queryKey: ["user", data?.userId],
    queryFn: () => newRequest.get(`/users/${data.userId}`).then((res) => res.data),
    enabled: !!data?.userId,
  });

  // --- NEW CONTACT LOGIC ---
  const handleContact = async () => {
    if (!currentUser) return navigate("/login");
    
    const sellerId = data.userId;
    const buyerId = currentUser._id;
    const conversationId = sellerId + buyerId;

    try {
      const res = await newRequest.get(`/conversations/single/${conversationId}`);
      navigate(`/message/${res.data.id}`);
    } catch (err) {
      if (err.response?.status === 404) {
        const res = await newRequest.post(`/conversations/`, {
          to: currentUser.isSeller ? buyerId : sellerId,
        });
        navigate(`/message/${res.data.id}`);
      }
    }
  };

  // Comprehensive image fallback logic
  const findProfilePicture = () => {
    if (seller?.img) return seller.img;
    const match = [...staticGigs, ...staticProjects].find(item => 
      item.username === seller?.username || item.id === parseInt(id)
    );
    return match?.pp || "/img/noavatar.jpg";
  };

  const sellerProfileImg = findProfilePicture();
  
  const rating = data?.starNumber > 0 
    ? (data.totalStars / data.starNumber).toFixed(1) 
    : "5.0";

  // Dynamic Plan Data Logic
  const planData = data ? {
    Basic: {
      price: Math.round(data.price * 0.7),
      title: "Essential Package",
      desc: "Perfect for starters. High-quality core delivery with essential features.",
      delivery: data.deliveryTime + 1,
      revisions: 1,
    },
    Standard: {
      price: data.price,
      title: data.shortTitle || "Professional Package",
      desc: data.shortDesc || "The best balance of quality, speed, and cost for most users.",
      delivery: data.deliveryTime,
      revisions: data.revisionNumber,
    },
    Premium: {
      price: Math.round(data.price * 1.5),
      title: "VIP Executive Plan",
      desc: "Top-tier priority service including source files and unlimited support.",
      delivery: Math.max(1, data.deliveryTime - 1),
      revisions: "Unlimited",
    },
  } : null;

  const currentPlan = planData ? planData[selectedPlan] : null;

  if (isLoading) return <GigSkeleton />;
  if (error) return <div className="py-40 text-center text-red-500 font-bold">Error: {error.message}</div>;

  return (
    <div className="bg-[#f9f9f9] min-h-screen pb-20">
      {/* Breadcrumb Navigation */}
      <div className="max-w-[1400px] mx-auto px-6 pt-8 flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
        <Link to="/" className="hover:text-[#0a1b1b]">Home</Link>
        <ChevronRightIcon className="h-3 w-3" />
        <Link to={`/gigs?cat=${data.cat}`} className="hover:text-[#0a1b1b] text-[#1a382a]">{data.cat}</Link>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 py-8 flex flex-col lg:flex-row gap-12">
        
        {/* LEFT SECTION: CONTENT */}
        <div className="flex-[2] space-y-8">
          <header className="space-y-4">
            <h1 className="text-4xl font-black text-gray-900 leading-tight tracking-tight">
              {data.title}
            </h1>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 pr-4 border-r border-gray-200">
                <img src={sellerProfileImg} alt="" className="w-10 h-10 rounded-full object-cover shadow-sm" />
                <span className="font-bold text-gray-900">{seller?.username || "Verified Seller"}</span>
              </div>
              <div className="flex items-center gap-1.5 text-yellow-500 font-bold">
                <StarIcon className="h-5 w-5" />
                <span>{rating}</span>
                <span className="text-gray-400 font-medium ml-1">
                  ({data.starNumber || data.reviewCount || 0} reviews)
                </span> 
              </div>
            </div>
          </header>

          {/* Featured Image Section */}
          <div className="rounded-[2rem] overflow-hidden shadow-xl bg-white border border-gray-100">
            <img 
              src={data.cover || data.img} 
              alt="Gig Cover" 
              className="w-full object-cover max-h-[550px] hover:scale-[1.02] transition-transform duration-700" 
            />
          </div>

          {/* Description Section */}
          <section className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 space-y-6">
            <h2 className="text-2xl font-black text-gray-900">About this service</h2>
            <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-wrap">
              {data.desc}
            </p>
          </section>

          {/* Seller Card Section */}
          <div className="p-8 bg-[#0a1b1b] rounded-[2rem] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="flex gap-6 items-center">
              <div className="h-20 w-20 rounded-2xl bg-white/10 flex items-center justify-center overflow-hidden border border-white/20">
                <img src={sellerProfileImg} className="w-full h-full object-cover" alt="Seller" />
              </div>
              <div>
                <p className="text-[#1a382a] text-xs font-bold uppercase tracking-widest mb-1">Top Rated Seller</p>
                <h4 className="font-black text-2xl">Work with {seller?.username || "Us"}</h4>
                <p className="text-white/60 font-medium">Expert professional from {seller?.country || "Global"}</p>
              </div>
            </div>
            
            {/* --- MODIFIED BUTTON --- */}
            <button 
              onClick={handleContact}
              className="w-full md:w-auto bg-white text-[#0a1b1b] px-10 py-4 rounded-2xl font-black hover:scale-105 transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <ChatBubbleLeftEllipsisIcon className="h-5 w-5" />
              Contact Me
            </button>
          </div>

          <Suspense fallback={<div className="h-20 animate-pulse bg-gray-200 rounded-xl" />}>
            <Reviews gigId={id} />
          </Suspense>
        </div>

        {/* RIGHT SECTION: PRICING CARD (Sticky) */}
        <aside className="flex-1">
          <div className="sticky top-28 border border-gray-200 rounded-[2.5rem] p-1 shadow-2xl shadow-gray-200/50 bg-white flex flex-col transition-all hover:shadow-gray-300 overflow-hidden">
            
            {/* Tier Selector Tabs */}
            <div className="flex bg-gray-50/50 p-2 gap-1 border-b border-gray-100">
              {["Basic", "Standard", "Premium"].map((tier) => (
                <button
                  key={tier}
                  onClick={() => setSelectedPlan(tier)}
                  className={`flex-1 py-3 text-[11px] font-black uppercase tracking-wider rounded-2xl transition-all ${
                    selectedPlan === tier 
                      ? "bg-[#0a1b1b] text-white shadow-lg shadow-[#0a1b1b]/20" 
                      : "text-gray-400 hover:bg-gray-100 hover:text-gray-600"
                  }`}
                >
                  {tier}
                </button>
              ))}
            </div>

            <div className="p-8 flex flex-col gap-8">
              {/* Price and Title */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className={`text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter ${
                    selectedPlan === "Standard" ? "bg-emerald-100 text-[#1a382a]" : "bg-gray-100 text-gray-500"
                  }`}>
                    {selectedPlan === "Standard" ? "Best Value" : `${selectedPlan} Tier`}
                  </span>
                  <div className="flex flex-col items-end">
                     <span className="text-4xl font-black text-[#0a1b1b]">₹{currentPlan.price.toLocaleString('en-IN')}</span>
                     <span className="text-[10px] text-gray-400 font-bold tracking-widest uppercase">Inc. Taxes</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-gray-900 font-black text-xl leading-tight">{currentPlan.title}</h3>
                  <p className="text-gray-500 font-medium text-sm mt-2 leading-relaxed italic border-l-2 border-[#1a382a] pl-3">
                    {currentPlan.desc}
                  </p>
                </div>
              </div>
              
              {/* Delivery and Revisions Stats */}
              <div className="grid grid-cols-2 gap-4 py-6 border-y border-gray-100">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-sm font-black text-gray-800">
                    <ClockIcon className="h-5 w-5 text-[#1a382a]" />
                    {currentPlan.delivery} Days
                  </div>
                  <span className="text-[9px] text-gray-400 font-bold ml-7 uppercase tracking-widest">Delivery Time</span>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-sm font-black text-gray-800">
                    <ArrowPathIcon className="h-5 w-5 text-[#1a382a]" />
                    {currentPlan.revisions} Revisions
                  </div>
                  <span className="text-[9px] text-gray-400 font-bold ml-7 uppercase tracking-widest">Full Support</span>
                </div>
              </div>

              {/* Stripe Style Button & Security Footer */}
              <div className="space-y-6">
                <button 
                  onClick={() => navigate(`/pay/${id}`)}
                  className="w-full bg-[#0a1b1b] text-white py-6 rounded-[1.25rem] font-black text-xl hover:bg-[#1a2e2e] transition-all transform hover:-translate-y-1 active:scale-[0.97] shadow-xl shadow-[#0a1b1b]/30 flex items-center justify-center gap-3 group"
                >
                  Checkout
                  <ChevronRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                {/* SSL Secure Section */}
                <div className="flex flex-col items-center gap-4 bg-gray-50 p-5 rounded-2xl border border-gray-100">
                   <div className="flex items-center gap-2">
                      <LockClosedIcon className="h-3 w-3 text-[#1a382a]" />
                      <p className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em]">SSL SECURE PAYMENT</p>
                   </div>
                   
                   <div className="flex gap-4 opacity-50 grayscale hover:grayscale-0 transition-all">
                      <img src="https://img.icons8.com/color/48/visa.png" className="h-5" alt="Visa"/>
                      <img src="https://img.icons8.com/color/48/mastercard.png" className="h-5" alt="Mastercard"/>
                      <img src="https://img.icons8.com/color/48/stripe.png" className="h-5" alt="Stripe"/>
                      <img src="https://img.icons8.com/color/48/google-pay.png" className="h-5" alt="GooglePay"/>
                   </div>

                   <div className="text-center">
                      <p className="text-[11px] text-[#1a382a] font-black italic">
                        100% Satisfaction Guarantee
                      </p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

// Skeleton Component for Loading State
const GigSkeleton = () => (
  <div className="max-w-[1400px] mx-auto px-6 py-20 animate-pulse flex flex-col lg:flex-row gap-16">
    <div className="flex-[2] space-y-8">
      <div className="h-12 bg-gray-200 rounded-2xl w-3/4" />
      <div className="h-[500px] bg-gray-200 rounded-[2rem]" />
    </div>
    <div className="flex-1 h-[600px] bg-gray-200 rounded-[2.5rem]" />
  </div>
);

export default Gig;