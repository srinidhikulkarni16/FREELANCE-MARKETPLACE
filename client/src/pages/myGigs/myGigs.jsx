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
              <button className="bg-[#0a1b1b] hover:bg-[#1a2e2e] text-white font-medium border-none px-[10px] py-[10px] cursor-pointer">
                Add New Gig
              </button>
            </Link>
          )}
        </div>

        {/* Table */}
        <table className="w-full border-collapse">
          <thead>
            <tr className="h-[50px]">
              <th className="text-left">Title</th>
              <th className="text-left">Price</th>
              <th className="text-left">Sales</th>
            </tr>
          </thead>

          <tbody>
            {/* Row 1 */}
            <tr className="h-[50px] even:bg-[#1dbf730f]">
              
              <td>Stunning concept art</td>
              <td>
                5,999<sup className="text-[12px]"></sup>
              </td>
              <td>13</td>
            </tr>

            <tr className="h-[50px] even:bg-[#1dbf730f]">
              <td>Ai generated concept art</td>
              <td>
                12,000<sup className="text-[12px]"></sup>
              </td>
              <td>41</td>
            </tr>

            <tr className="h-[50px] even:bg-[#1dbf730f]">
              <td>High quality digital character</td>
              <td>
                7,999<sup className="text-[12px]"></sup>
              </td>
              <td>55</td>
            </tr>

            <tr className="h-[50px] even:bg-[#1dbf730f]">
              <td>Illustration hyper realistic painting</td>
              <td>
                11,999<sup className="text-[12px]"></sup>
              </td>
              <td>29</td>
            </tr>

            <tr className="h-[50px] even:bg-[#1dbf730f]">
              <td>Original ai generated digital art</td>
              <td>
                5,999<sup className="text-[12px]"></sup>
              </td>
              <td>34</td>
            </tr>

            <tr className="h-[50px] even:bg-[#1dbf730f]">
              <td>Text based ai generated art</td>
              <td>
                11,000<sup className="text-[12px]"></sup>
              </td>
              <td>16</td>
            </tr>

          </tbody>
        </table>

      </div>
    </div>
  );
}

export default MyGigs;
