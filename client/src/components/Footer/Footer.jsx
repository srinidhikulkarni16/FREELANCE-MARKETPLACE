import React from "react";

function Footer() {
  return (
    <div className="flex justify-center bg-white py-12 px-4 border-t border-gray-100">
      <div className="max-w-[1400px] w-full">
        {/* Top Section: Links Grid */}
        <div className="flex flex-wrap justify-between gap-8">
          <div className="flex flex-col gap-4 min-w-[160px]">
            <h2 className="text-base font-bold text-[#404145]">Categories</h2>
            <span className="text-[#74767e] font-normal hover:underline cursor-pointer">Graphics & Design</span>
            <span className="text-[#74767e] font-normal hover:underline cursor-pointer">Digital Marketing</span>
            <span className="text-[#74767e] font-normal hover:underline cursor-pointer">Writing & Translation</span>
            <span className="text-[#74767e] font-normal hover:underline cursor-pointer">Video & Animation</span>
            <span className="text-[#74767e] font-normal hover:underline cursor-pointer">Music & Audio</span>
            <span className="text-[#74767e] font-normal hover:underline cursor-pointer">Programming & Tech</span>
            <span className="text-[#74767e] font-normal hover:underline cursor-pointer">Data</span>
            <span className="text-[#74767e] font-normal hover:underline cursor-pointer">Business</span>
            <span className="text-[#74767e] font-normal hover:underline cursor-pointer">Lifestyle</span>
            <span className="text-[#74767e] font-normal hover:underline cursor-pointer">Photography</span>
          </div>

          <div className="flex flex-col gap-4 min-w-[160px]">
            <h2 className="text-base font-bold text-[#404145]">About</h2>
            <span className="text-[#74767e] font-normal hover:underline cursor-pointer">Press & News</span>
            <span className="text-[#74767e] font-normal hover:underline cursor-pointer">Partnerships</span>
            <span className="text-[#74767e] font-normal hover:underline cursor-pointer">Privacy Policy</span>
            <span className="text-[#74767e] font-normal hover:underline cursor-pointer">Terms of Service</span>
            <span className="text-[#74767e] font-normal hover:underline cursor-pointer">Contact Sales</span>
          </div>

          <div className="flex flex-col gap-4 min-w-[160px]">
            <h2 className="text-base font-bold text-[#404145]">Support</h2>
            <span className="text-[#74767e] font-normal hover:underline cursor-pointer">Help & Support</span>
            <span className="text-[#74767e] font-normal hover:underline cursor-pointer">Trust & Safety</span>
            <span className="text-[#74767e] font-normal hover:underline cursor-pointer">Selling on NYX</span>
            <span className="text-[#74767e] font-normal hover:underline cursor-pointer">Buying on NYX</span>
          </div>
          <div className="flex flex-col gap-4 min-w-[160px]">
            <h2 className="text-base font-bold text-[#404145]">Community</h2>
            <span className="text-[#74767e] font-normal hover:underline cursor-pointer">Customer Success Stories</span>
            <span className="text-[#74767e] font-normal hover:underline cursor-pointer">Events</span>
            <span className="text-[#74767e] font-normal hover:underline cursor-pointer">Blog</span>
            <span className="text-[#74767e] font-normal hover:underline cursor-pointer">Influencers</span>
            <span className="text-[#74767e] font-normal hover:underline cursor-pointer">Affiliates</span>
            <span className="text-[#74767e] font-normal hover:underline cursor-pointer">Podcast</span>
            <span className="text-[#74767e] font-normal hover:underline cursor-pointer">Invite a Friend</span>
            <span className="text-[#74767e] font-normal hover:underline cursor-pointer">Become a Seller</span>
            <span className="text-[#74767e] font-normal hover:underline cursor-pointer">Community Standards</span>
          </div>
          <div className="flex flex-col gap-4 min-w-[160px]">
            <h2 className="text-base font-bold text-[#404145]">More From NYX</h2>
            <span className="text-[#74767e] font-normal hover:underline cursor-pointer">NYX Business</span>
            <span className="text-[#74767e] font-normal hover:underline cursor-pointer">NYX Pro</span>
            <span className="text-[#74767e] font-normal hover:underline cursor-pointer">NYX Logo Maker</span>
            <span className="text-[#74767e] font-normal hover:underline cursor-pointer">NYX Guides</span>
            <span className="text-[#74767e] font-normal hover:underline cursor-pointer">Get Inspired</span>
            <span className="text-[#74767e] font-normal hover:underline cursor-pointer">NYX Select</span>
            <span className="text-[#74767e] font-normal hover:underline cursor-pointer">NYX Workspace</span>
            <span className="text-[#74767e] font-normal hover:underline cursor-pointer">Learn</span>
          </div>
        </div>

        <hr className="my-8 border-gray-200" />

        {/* Bottom Section: Logo and Settings */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          <div className="flex items-center gap-6">
            <h2 className="text-2xl font-bold text-[#74767e]">NYX</h2>
            <span className="text-sm text-[#b5b6ba] whitespace-nowrap">© NYX International Ltd. 2026</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;