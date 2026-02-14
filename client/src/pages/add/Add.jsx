import React from "react";

const Add = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[1400px] py-[50px]">
        <h1 className="w-max mb-[30px] text-gray-500 font-light text-2xl">
          Add New Gig
        </h1>

        <div className="flex justify-between gap-[100px]">
          
          {/* Left Section */}
          <div className="flex-1 flex flex-col gap-[10px] justify-between">
            <label className="text-gray-500 text-[18px]">Title</label>
            <input
              type="text"
              placeholder="e.g. I will do something I'm really good at"
              className="p-[20px] border border-gray-300 rounded-md"
            />

            <label className="text-gray-500 text-[18px]">Category</label>
            <select
              name="cats"
              id="cats"
              className="p-[20px] border border-gray-300 rounded-md"
            >
              <option value="design">Design</option>
              <option value="web">Web Development</option>
              <option value="animation">Animation</option>
              <option value="music">Music</option>
            </select>

            <label className="text-gray-500 text-[18px]">Cover Image</label>
            <input
              type="file"
              className="p-[20px] border border-gray-300 rounded-md"
            />

            <label className="text-gray-500 text-[18px]">Upload Images</label>
            <input
              type="file"
              multiple
              className="p-[20px] border border-gray-300 rounded-md"
            />

            <label className="text-gray-500 text-[18px]">Description</label>
            <textarea
              placeholder="Brief descriptions to introduce your service to customers"
              rows="16"
              className="p-[20px] border border-gray-300 rounded-md"
            ></textarea>

            <button className="border-none p-[20px] text-white font-medium text-[18px] bg-[#1dbf73] cursor-pointer rounded-md">
              Create
            </button>
          </div>

          {/* Right Section */}
          <div className="flex-1 flex flex-col gap-[10px] justify-between">
            <label className="text-gray-500 text-[18px]">
              Service Title
            </label>
            <input
              type="text"
              placeholder="e.g. One-page web design"
              className="p-[20px] border border-gray-300 rounded-md"
            />

            <label className="text-gray-500 text-[18px]">
              Short Description
            </label>
            <textarea
              placeholder="Short description of your service"
              rows="10"
              className="p-[20px] border border-gray-300 rounded-md"
            ></textarea>

            <label className="text-gray-500 text-[18px]">
              Delivery Time (e.g. 3 days)
            </label>
            <input
              type="number"
              className="p-[20px] border border-gray-300 rounded-md"
            />

            <label className="text-gray-500 text-[18px]">
              Revision Number
            </label>
            <input
              type="number"
              className="p-[20px] border border-gray-300 rounded-md"
            />

            <label className="text-gray-500 text-[18px]">
              Add Features
            </label>
            <input
              type="text"
              placeholder="e.g. page design"
              className="p-[20px] border border-gray-300 rounded-md"
            />
            <input
              type="text"
              placeholder="e.g. file uploading"
              className="p-[20px] border border-gray-300 rounded-md"
            />
            <input
              type="text"
              placeholder="e.g. setting up a domain"
              className="p-[20px] border border-gray-300 rounded-md"
            />
            <input
              type="text"
              placeholder="e.g. hosting"
              className="p-[20px] border border-gray-300 rounded-md"
            />

            <label className="text-gray-500 text-[18px]">Price</label>
            <input
              type="number"
              className="p-[20px] border border-gray-300 rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
