import React from "react";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../Services/NewReq";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const navigate = useNavigate();

  const { isLoading, error, data } = useQuery({
    queryKey: ["orders"],
    queryFn: () => newRequest.get(`/orders`).then((res) => res.data),
  });

  const handleContact = async (order) => {
    const sellerId = order.sellerId;
    const buyerId = order.buyerId;
    const id = sellerId + buyerId;

    try {
      const res = await newRequest.get(`/conversations/single/${id}`);
      navigate(`/message/${res.data.id}`);
    } catch (err) {
      if (err.response.status === 404) {
        const res = await newRequest.post(`/conversations`, {
          to: currentUser.isSeller ? buyerId : sellerId,
        });
        navigate(`/message/${res.data.id}`);
      }
    }
  };

  return (
    <div className="flex justify-center text-[#555]">
      <div className="w-[1400px] py-[50px]">
        <h1 className="text-2xl font-semibold mb-5">Orders</h1>
        {isLoading ? "Loading..." : error ? "Error" : (
          <table className="w-full border-collapse">
            <thead>
              <tr className="h-[50px]">
                <th className="text-left">Image</th>
                <th className="text-left">Title</th>
                <th className="text-left">Price</th>
                <th className="text-left">Contact</th>
              </tr>
            </thead>
            <tbody>
              {data.map((order) => (
                <tr key={order._id} className="h-[50px] even:bg-[#1dbf730f]">
                  <td><img className="w-8 h-6 object-cover" src={order.img} alt="" /></td>
                  <td>{order.title}</td>
                  <td>₹{order.price}</td>
                  <td>
                    <img 
                      className="w-6 cursor-pointer" 
                      src="/img/message.png" 
                      alt="" 
                      onClick={() => handleContact(order)} 
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Orders;