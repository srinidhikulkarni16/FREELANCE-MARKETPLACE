import React from "react";
import { Link } from "react-router-dom";

const Messages = () => {
  const currentUser = {
    id: 1,
    username: "NYX",
    isSeller: true,
  };

  const message = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
  maxime cum corporis esse aspernatur laborum dolorum? Animi
  molestias aliquam, cum nesciunt, aut, ut quam vitae saepe repellat
  nobis praesentium placeat.`;

  return (
    <div className="flex justify-center">
      <div className="w-[1400px] py-[50px]">

        {/* Title */}
        <div className="flex justify-between mb-5">
          <h1 className="text-2xl font-semibold">Messages</h1>
        </div>

        {/* Table */}
        <table className="w-full border-collapse">
          <thead>
            <tr className="h-[100px]">
              <th className="text-left">
                {currentUser.isSeller ? "Buyer" : "Seller"}
              </th>
              <th className="text-left">Last Message</th>
              <th className="text-left">Date</th>
              <th className="text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {/* Active Row */}
            <tr className="h-[100px] bg-[#1dbf730f]">
              <td className="p-[10px] font-medium">NYXXXXXXXXX</td>
              <td className="p-[10px] text-gray-500">
                <Link
                  to="/message/123"
                  className="no-underline text-gray-500"
                >
                  {message.substring(0, 100)}...
                </Link>
              </td>
              <td className="p-[10px] text-gray-500">1 hour ago</td>
              <td className="p-[10px]">
                <button className="bg-[#1dbf73] text-white font-medium border-none px-[10px] py-[10px] cursor-pointer">
                  Mark as Read
                </button>
              </td>
            </tr>

            <tr className="h-[100px] bg-[#1dbf730f]">
              <td className="p-[10px] font-medium">NYX</td>
              <td className="p-[10px] text-gray-500">
                <Link
                  to="/message/123"
                  className="no-underline text-gray-500"
                >
                  {message.substring(0, 100)}...
                </Link>
              </td>
              <td className="p-[10px] text-gray-500">2 hours ago</td>
              <td className="p-[10px]">
                <button className="bg-[#1dbf73] text-white px-[10px] py-[10px] border-none cursor-pointer">
                  Mark as Read
                </button>
              </td>
            </tr>

            <tr className="h-[100px]">
              <td className="p-[10px] font-medium">NYX1</td>
              <td className="p-[10px] text-gray-500">
                <Link
                  to="/message/123"
                  className="no-underline text-gray-500"
                >
                  {message.substring(0, 100)}...
                </Link>
              </td>
              <td className="p-[10px] text-gray-500">1 day ago</td>
              <td className="p-[10px]"></td>
            </tr>

            <tr className="h-[100px]">
              <td className="p-[10px] font-medium">NYX2</td>
              <td className="p-[10px] text-gray-500">
                <Link
                  to="/message/123"
                  className="no-underline text-gray-500"
                >
                  {message.substring(0, 100)}...
                </Link>
              </td>
              <td className="p-[10px] text-gray-500">2 days ago</td>
              <td className="p-[10px]"></td>
            </tr>

            <tr className="h-[100px]">
              <td className="p-[10px] font-medium">NYX3</td>
              <td className="p-[10px] text-gray-500">
                {message.substring(0, 100)}
              </td>
              <td className="p-[10px] text-gray-500">1 week ago</td>
              <td className="p-[10px]"></td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
  );
};

export default Messages;
