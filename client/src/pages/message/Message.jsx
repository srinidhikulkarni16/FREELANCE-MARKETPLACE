import React from "react";
import { useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../Services/NewReq";

function Message() {
  const { id } = useParams(); 
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["messages", id],
    queryFn: () =>
      newRequest.get(`/messages/${id}`).then((res) => res.data),
  });

  const mutation = useMutation({
    mutationFn: (message) => {
      return newRequest.post(`/messages`, message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["messages", id]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const desc = e.target[0].value;
    if (!desc) return; 

    mutation.mutate({
      conversationId: id,
      desc: desc,
    });
    e.target[0].value = ""; 
  };

  return (
    <div className="flex justify-center">
      <div className="w-[1200px] m-[50px]">
        <span className="font-light text-[13px] text-[#555]">
          <Link to="/messages" className="hover:underline">Messages</Link> &gt; Chat
        </span>

        {isLoading ? (
          <div className="text-center py-20">Loading chat...</div>
        ) : error ? (
          <div className="text-center py-20 text-red-500">Error loading messages.</div>
        ) : (
          <div className="my-[30px] p-[50px] flex flex-col gap-[20px] h-[500px] overflow-y-auto bg-gray-50 rounded-lg shadow-inner">
            {data.map((m) => (
              <div
                key={m._id}
                className={`flex gap-[20px] max-w-[600px] text-[18px] ${
                  m.userId === currentUser._id ? "flex-row-reverse self-end" : ""
                }`}
              >
                <img 
                  src="/img/noavatar.jpg" 
                  alt="" 
                  className="w-[40px] h-[40px] rounded-full object-cover shadow-sm" 
                />
                <p className={`max-w-[500px] p-[20px] font-light shadow-sm ${
                  m.userId === currentUser._id
                    ? "bg-[#314646] text-white rounded-[20px_0px_20px_20px]"
                    : "bg-white border border-gray-200 text-gray-700 rounded-[0px_20px_20px_20px]"
                }`}>
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        )}

        <hr className="h-0 border-[0.5px] border-[#e8e6e6] mb-[20px]" />

        <form onSubmit={handleSubmit} className="flex items-center justify-between gap-4">
          <textarea
            placeholder="Write a message..."
            className="w-full h-[100px] p-[15px] border border-gray-300 rounded-[10px] outline-none focus:ring-2 focus:ring-[#0a1b1b] transition-all"
          />
          <button 
            type="submit"
            className="bg-[#0a1b1b] hover:bg-[#1a2e2e] p-[20px] text-white font-medium border-none rounded-[10px] cursor-pointer w-[120px] active:scale-95 transition-transform"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Message;