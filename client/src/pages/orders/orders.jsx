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
              <th className="text-left">Title</th>
              <th className="text-left">Price</th>
              <th className="text-left">
                {currentUser.isSeller ? "Buyer" : "Seller"}
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="h-[50px] even:bg-[#1dbf730f]">
              <td>Futuristic concept illustration</td>
              <td>4,939</td>
              <td>Rohan Mehta</td>
            </tr>

            <tr className="h-[50px] even:bg-[#1dbf730f]">
              <td>AI-powered sci-fi artwork</td>
              <td>6,557</td>
              <td>Emily Carter</td>
            </tr>

            <tr className="h-[50px] even:bg-[#1dbf730f]">
              <td>Premium digital character design</td>
              <td>9,129</td>
              <td>Arjun Kapoor</td>
            </tr>

            <tr className="h-[50px] even:bg-[#1dbf730f]">
              <td>Hyper-realistic fantasy painting</td>
              <td>3,247</td>
              <td>Sophia Williams</td>
            </tr>

            <tr className="h-[50px] even:bg-[#1dbf730f]">
              <td>Original AI-crafted digital masterpiece</td>
              <td>9,877</td>
              <td>Daniel Rodriguez</td>
            </tr>

            <tr className="h-[50px] even:bg-[#1dbf730f]">
              <td>Text-driven AI art creation</td>
              <td>4,067</td>
              <td>Ishita Sharma</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
