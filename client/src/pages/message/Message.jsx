import React from "react";

function Message() {
  const currentUserId = 1;

  const messages = [
    {
      id: 1,
      userId: 1,
      img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      desc: "Hey! I’m interested in your AI art service. Can you create a cyberpunk portrait?",
    },
    {
      id: 2,
      userId: 2,
      img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
      desc: "Absolutely! I can create a high-quality cyberpunk portrait with neon lighting and futuristic vibes.",
    },
    {
      id: 3,
      userId: 1,
      img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      desc: "That sounds great. What’s the delivery time?",
    },
  ];

  return (
    <div className="flex justify-center">
      <div className="w-[1200px] m-[50px]">

        {/* Breadcrumbs */}
        <span className="font-light text-[13px] text-[#555]">
          NYX Graphics & Design &gt; Messages
        </span>

        {/* Messages Section */}
        <div className="my-[30px] p-[50px] flex flex-col gap-[20px] h-[500px] overflow-scroll">

          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex gap-[20px] max-w-[600px] text-[18px] ${
                m.userId === currentUserId
                  ? "flex-row-reverse self-end"
                  : ""
              }`}
            >
              <img
                src={m.img}
                alt=""
                className="w-[40px] h-[40px] rounded-full object-cover"
              />

              <p
                className={`max-w-[500px] p-[20px] font-light ${
                  m.userId === currentUserId
                    ? "bg-[royalblue] text-white rounded-[20px_0px_20px_20px]"
                    : "bg-[rgb(244,241,241)] text-gray-500 rounded-[0px_20px_20px_20px]"
                }`}
              >
                {m.desc}
              </p>
            </div>
          ))}
        </div>

        <hr className="h-0 border-[0.5px] border-[rgb(232,230,230)] mb-[20px]" />

        {/* Write Section */}
        <div className="flex items-center justify-between">
          <textarea
            placeholder="Write a message..."
            className="w-[80%] h-[100px] p-[10px] border border-lightgray rounded-[10px] outline-none"
          />

          <button className="bg-[#1dbf73] p-[20px] text-white font-medium border-none rounded-[10px] cursor-pointer w-[100px]">
            Send
          </button>
        </div>

      </div>
    </div>
  );
}

export default Message;
