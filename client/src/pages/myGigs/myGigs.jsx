import React from "react";
import { Link } from "react-router-dom";

function MyGigs() {
  const currentUser = {
    id: 1,
    username: "NYX",
    isSeller: true,
  };

  return (
    <div className="flex justify-center text-[#555]">
      <div className="w-[1400px] py-[50px]">

        {/* Title Section */}
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-2xl font-semibold">
            {currentUser.isSeller ? "Gigs" : "Orders"}
          </h1>

          {currentUser.isSeller && (
            <Link to="/add">
              <button className="bg-[#1dbf73] text-white font-medium border-none px-[10px] py-[10px] cursor-pointer">
                Add New Gig
              </button>
            </Link>
          )}
        </div>

        {/* Table */}
        <table className="w-full border-collapse">
          <thead>
            <tr className="h-[50px]">
              <th className="text-left">Image</th>
              <th className="text-left">Title</th>
              <th className="text-left">Price</th>
              <th className="text-left">Sales</th>
              <th className="text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {/* Row 1 */}
            <tr className="h-[50px] even:bg-[#1dbf730f]">
              <td>
                <img
                  className="w-[50px] h-[25px] object-cover"
                  src=""
                  alt=""
                />
              </td>
              <td>Stunning concept art</td>
              <td>
                59.<sup className="text-[12px]">99</sup>
              </td>
              <td>13</td>
              <td>
                <img
                  className="w-[20px] cursor-pointer"
                  src="./img/delete.png"
                  alt=""
                />
              </td>
            </tr>

            <tr className="h-[50px] even:bg-[#1dbf730f]">
              <td>
                <img
                  className="w-[50px] h-[25px] object-cover"
                  src=""
                  alt=""
                />
              </td>
              <td>Ai generated concept art</td>
              <td>
                120.<sup className="text-[12px]">99</sup>
              </td>
              <td>41</td>
              <td>
                <img
                  className="w-[20px] cursor-pointer"
                  src="./img/delete.png"
                  alt=""
                />
              </td>
            </tr>

            <tr className="h-[50px] even:bg-[#1dbf730f]">
              <td>
                <img
                  className="w-[50px] h-[25px] object-cover"
                  src=""
                  alt=""
                />
              </td>
              <td>High quality digital character</td>
              <td>
                79.<sup className="text-[12px]">99</sup>
              </td>
              <td>55</td>
              <td>
                <img
                  className="w-[20px] cursor-pointer"
                  src="./img/delete.png"
                  alt=""
                />
              </td>
            </tr>

            <tr className="h-[50px] even:bg-[#1dbf730f]">
              <td>
                <img
                  className="w-[50px] h-[25px] object-cover"
                  src=""
                  alt=""
                />
              </td>
              <td>Illustration hyper realistic painting</td>
              <td>
                119.<sup className="text-[12px]">99</sup>
              </td>
              <td>29</td>
              <td>
                <img
                  className="w-[20px] cursor-pointer"
                  src="./img/delete.png"
                  alt=""
                />
              </td>
            </tr>

            <tr className="h-[50px] even:bg-[#1dbf730f]">
              <td>
                <img
                  className="w-[50px] h-[25px] object-cover"
                  src=""
                  alt=""
                />
              </td>
              <td>Original ai generated digital art</td>
              <td>
                59.<sup className="text-[12px]">99</sup>
              </td>
              <td>34</td>
              <td>
                <img
                  className="w-[20px] cursor-pointer"
                  src="./img/delete.png"
                  alt=""
                />
              </td>
            </tr>

            <tr className="h-[50px] even:bg-[#1dbf730f]">
              <td>
                <img
                  className="w-[50px] h-[25px] object-cover"
                  src=""
                  alt=""
                />
              </td>
              <td>Text based ai generated art</td>
              <td>
                110.<sup className="text-[12px]">99</sup>
              </td>
              <td>16</td>
              <td>
                <img
                  className="w-[20px] cursor-pointer"
                  src="./img/delete.png"
                  alt=""
                />
              </td>
            </tr>

          </tbody>
        </table>

      </div>
    </div>
  );
}

export default MyGigs;
