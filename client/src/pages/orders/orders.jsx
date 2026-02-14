import React from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  const currentUser = {
    id: 1,
    username: "NYX",
    isSeller: true,
  };

  return (
    <div className="flex justify-center text-[#555]">
      <div className="w-[1400px] py-[50px]">

        {/* Title */}
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-2xl font-semibold">Orders</h1>
        </div>

        {/* Table */}
        <table className="w-full border-collapse">
          <thead>
            <tr className="h-[50px]">
              <th className="text-left">Image</th>
              <th className="text-left">Title</th>
              <th className="text-left">Price</th>
              <th className="text-left">
                {currentUser.isSeller ? "Buyer" : "Seller"}
              </th>
              <th className="text-left">Contact</th>
            </tr>
          </thead>

          <tbody>
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
              <td>NYX</td>
              <td>
                <img
                  className="w-[25px] cursor-pointer"
                  src="./img/message.png"
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
                79.<sup className="text-[12px]">99</sup>
              </td>
              <td>NYX</td>
              <td>
                <img
                  className="w-[25px] cursor-pointer"
                  src="./img/message.png"
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
                110.<sup className="text-[12px]">99</sup>
              </td>
              <td>NYX</td>
              <td>
                <img
                  className="w-[25px] cursor-pointer"
                  src="./img/message.png"
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
                39.<sup className="text-[12px]">99</sup>
              </td>
              <td>NYX</td>
              <td>
                <img
                  className="w-[25px] cursor-pointer"
                  src="./img/message.png"
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
                119.<sup className="text-[12px]">99</sup>
              </td>
              <td>NYX</td>
              <td>
                <img
                  className="w-[25px] cursor-pointer"
                  src="./img/message.png"
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
                49.<sup className="text-[12px]">99</sup>
              </td>
              <td>NYX</td>
              <td>
                <img
                  className="w-[25px] cursor-pointer"
                  src="./img/message.png"
                  alt=""
                />
              </td>
            </tr>

          </tbody>
        </table>

      </div>
    </div>
  );
};

export default Orders;
