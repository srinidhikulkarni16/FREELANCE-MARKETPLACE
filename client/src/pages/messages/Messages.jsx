import React from "react";
import { Link } from "react-router-dom";

const Messages = () => {
  const currentUser = {
    id: 1,
    username: "NYX",
    isSeller: true,
  };

  const chatThreads = [
    { 
      id: "123", 
      name: "Arjun Mehta", 
      lastMsg: "Deep purples and electric blues with holographic sarees.", 
      date: "1 hour ago", 
      read: false 
    },
    { 
      id: "124", 
      name: "Sarah Jenkins", 
      lastMsg: "Just a bit more lighting on the face, then we are good to go!", 
      date: "3 hours ago", 
      read: false 
    },
    { 
      id: "125", 
      name: "Priya Sharma", 
      lastMsg: "Is it possible to add a traditional mandala pattern to the character's jacket?", 
      date: "1 day ago", 
      read: true 
    },
    { 
      id: "126", 
      name: "David Miller", 
      lastMsg: "I've attached the brand guidelines. Let me know if you have questions.", 
      date: "2 days ago", 
      read: true 
    },
    { 
      id: "127", 
      name: "Ishaan Malhotra", 
      lastMsg: "Checking in to see if you've had a chance to start on the storyboard.", 
      date: "1 week ago", 
      read: true 
    },
  ];

  return (
    <div className="flex justify-center">
      <div className="w-[1400px] py-[50px]">
        <div className="flex justify-between mb-5">
          <h1 className="text-2xl font-semibold">Messages</h1>
        </div>

        <table className="w-full border-collapse">
          <thead>
            <tr className="h-[100px]">
              <th className="text-left">{currentUser.isSeller ? "Buyer" : "Seller"}</th>
              <th className="text-left">Last Message</th>
              <th className="text-left">Date</th>
              <th className="text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {chatThreads.map((chat) => (
              <tr 
                key={chat.id} 
                className={`h-[100px] transition-colors ${!chat.read ? "bg-[#1dbf730f] hover:bg-[#1dbf731a]" : "hover:bg-gray-50"}`}
              >
                <td className="p-[10px] font-medium">{chat.name}</td>
                <td className="p-[10px] text-gray-500">
                  <Link to={`/message/${chat.id}`} className="no-underline text-gray-500 block w-full">
                    {chat.lastMsg.substring(0, 70)}...
                  </Link>
                </td>
                <td className="p-[10px] text-gray-500">{chat.date}</td>
                <td className="p-[10px]">
                  {!chat.read && (
                    <button className="bg-[#0a1b1b] hover:bg-[#1a2e2e] text-white font-medium border-none px-[15px] py-[10px] cursor-pointer rounded-md">
                      Mark as Read
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Messages;