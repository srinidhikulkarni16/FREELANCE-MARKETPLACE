import React from "react";

const Gig = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[1400px] py-[30px] flex gap-[50px]">

        {/* LEFT SIDE */}
        <div className="flex-[2] flex flex-col gap-[20px]">

          <span className="font-light uppercase text-[13px] text-[#555]">
            Breadcrumbs
          </span>

          <h1 className="text-2xl font-semibold">
            Gig Title Here
          </h1>

          {/* User */}
          <div className="flex items-center gap-[10px]">
            <img
              src="/img/noavatar.jpg"
              alt=""
              className="w-[32px] h-[32px] rounded-full object-cover"
            />
            <span className="text-[14px] font-medium">Username</span>

            <div className="flex items-center gap-[5px]">
              <img src="/img/star.png" alt="" className="w-[14px] h-[14px]" />
              <span className="text-[14px] font-bold text-[#ffc108]">
                5.0
              </span>
            </div>
          </div>

          {/* Slider */}
          <div className="bg-[#F5F5F5]">
            <img
              src="/img/sample.jpg"
              alt=""
              className="max-h-[500px] object-contain w-full"
            />
          </div>

          <h2 className="font-normal text-xl">
            About This Gig
          </h2>

          <p className="font-light leading-[25px] text-[#555]">
            Description goes here...
          </p>

          {/* Seller Section */}
          <div className="mt-[50px] flex flex-col gap-[20px]">

            <h2 className="text-xl font-medium">About The Seller</h2>

            <div className="flex items-center gap-[20px]">
              <img
                src="/img/noavatar.jpg"
                alt=""
                className="w-[100px] h-[100px] rounded-full object-cover"
              />

              <div className="flex flex-col gap-[10px]">
                <span className="font-medium">Username</span>

                <div className="flex items-center gap-[5px]">
                  <img src="/img/star.png" alt="" className="w-[14px] h-[14px]" />
                  <span className="text-[14px] font-bold text-[#ffc108]">
                    5.0
                  </span>
                </div>

                <button className="bg-white rounded-[5px] border border-gray-400 p-[10px]">
                  Contact Me
                </button>
              </div>
            </div>

            <div className="border border-lightgray border-gray-300 rounded-[5px] p-[20px] mt-[20px]">
              <div className="flex justify-between flex-wrap">
                <div className="w-[300px] flex flex-col gap-[10px] mb-[20px]">
                  <span className="font-light">From</span>
                  <span>India</span>
                </div>
              </div>

              <hr className="border-gray-300 mb-[20px]" />

              <p className="text-[#555] font-light">
                Seller bio goes here...
              </p>
            </div>
          </div>

          {/* Reviews */}
          <div className="mt-[50px]">
            <h2 className="text-xl font-medium">Reviews</h2>

            <div className="flex flex-col gap-[20px] my-[20px]">
              <div className="flex items-center gap-[10px]">
                <img
                  src="/img/noavatar.jpg"
                  alt=""
                  className="w-[50px] h-[50px] rounded-full"
                />
                <div>
                  <span className="font-medium">Reviewer</span>
                  <div className="flex items-center gap-[10px] text-gray-500">
                    <img src="/img/flag.png" alt="" className="w-[20px]" />
                    <span>Country</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-[5px]">
                <img src="/img/star.png" alt="" className="w-[14px] h-[14px]" />
                <span className="text-[14px] font-bold text-[#ffc108]">
                  5
                </span>
              </div>

              <p className="text-[#555] font-light">
                Review comment...
              </p>

              <div className="flex items-center gap-[10px]">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" className="w-[14px]" />
                <span>Yes</span>
              </div>
            </div>

            <hr className="border-gray-300 my-[50px]" />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 border border-gray-300 p-[20px] rounded-[5px] flex flex-col gap-[20px] h-max max-h-[500px] sticky top-[150px]">

          <div className="flex items-center justify-between">
            <h2 className="font-light">Basic Package</h2>
            <h3 className="font-medium">$100</h3>
          </div>

          <p className="text-gray-500 my-[10px]">
            Short package description...
          </p>

          <div className="flex items-center justify-between text-[14px]">
            <div className="flex items-center gap-[10px]">
              <img src="/img/clock.png" alt="" className="w-[20px]" />
              <span>3 Days Delivery</span>
            </div>

            <div className="flex items-center gap-[10px]">
              <img src="/img/recycle.png" alt="" className="w-[20px]" />
              <span>2 Revisions</span>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-[10px] font-light text-gray-500 mb-[5px]">
              <img src="/img/check.png" alt="" className="w-[14px]" />
              Feature 1
            </div>
          </div>

          <button className="bg-[#1dbf73] p-[10px] text-white font-medium text-[18px] cursor-pointer">
            Continue
          </button>
        </div>

      </div>
    </div>
  );
};

export default Gig;
