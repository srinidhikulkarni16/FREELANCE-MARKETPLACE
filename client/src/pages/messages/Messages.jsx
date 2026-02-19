import React from "react";
import { Link } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../Services/NewReq";
import moment from "moment";

const Messages = () => {
  // Get the logged-in user from local storage
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const queryClient = useQueryClient();

  // 1. Fetch all conversations from the backend
  const { isLoading, error, data } = useQuery({
    queryKey: ["conversations"],
    queryFn: () =>
      newRequest.get(`/conversations`).then((res) => {
        return res.data;
      }),
  });

  // 2. Mutation to update the 'read' status in the database
  const mutation = useMutation({
    mutationFn: (id) => {
      return newRequest.put(`/conversations/${id}`);
    },
    onSuccess: () => {
      // Refresh the list after marking as read
      queryClient.invalidateQueries(["conversations"]);
    },
  });

  const handleRead = (id) => {
    mutation.mutate(id);
  };

  return (
    <div className="flex justify-center">
      <div className="w-[1400px] py-[50px]">
        <div className="flex justify-between mb-5">
          <h1 className="text-2xl font-semibold">Messages</h1>
        </div>

        {isLoading ? (
          <div className="text-center py-10">Loading conversations...</div>
        ) : error ? (
          <div className="text-center py-10 text-red-500">Error loading messages.</div>
        ) : (
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
              {data.map((c) => (
                <tr
                  key={c.id}
                  className={`h-[100px] transition-colors ${
                    ((currentUser.isSeller && !c.readBySeller) ||
                      (!currentUser.isSeller && !c.readByBuyer)) &&
                    "bg-[#1dbf730f] hover:bg-[#1dbf731a]"
                  } hover:bg-gray-50`}
                >
                  <td className="p-[10px] font-medium">
                    {/* Display the ID of the other participant */}
                    {currentUser.isSeller ? c.buyerId : c.sellerId}
                  </td>
                  <td className="p-[10px] text-gray-500">
                    <Link
                      to={`/message/${c.id}`}
                      className="no-underline text-gray-500 block w-full"
                    >
                      {c?.lastMessage?.substring(0, 100) || "No messages yet"}...
                    </Link>
                  </td>
                  <td className="p-[10px] text-gray-500">
                    {/* Use moment to format the backend timestamp */}
                    {moment(c.updatedAt).fromNow()}
                  </td>
                  <td className="p-[10px]">
                    {/* Only show "Mark as Read" if there are unread messages for this user */}
                    {((currentUser.isSeller && !c.readBySeller) ||
                      (!currentUser.isSeller && !c.readByBuyer)) && (
                      <button
                        onClick={() => handleRead(c.id)}
                        className="bg-[#0a1b1b] hover:bg-[#1a2e2e] text-white font-medium border-none px-[15px] py-[10px] cursor-pointer rounded-md"
                      >
                        Mark as Read
                      </button>
                    )}
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

export default Messages;