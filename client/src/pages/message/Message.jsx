import React from "react";
import { useParams } from "react-router-dom";
import msg1 from "../../img/msg1.jpg";
import msg2 from "../../img/msg2.jpg";
import msg3 from "../../img/msg3.png";

function Message() {
  const { id } = useParams();
  const currentUserId = 1;

  const conversations = {
    "123": {
      name: "Arjun Mehta",
      chats: [
        { id: 1, userId: 2, img: msg2, desc: "Namaste! Can you do a cyberpunk version of a traditional Indian wedding?" },
        { id: 2, userId: 1, img: msg1, desc: "Brilliant concept! What color palette are you thinking of?" },
        { id: 3, userId: 2, img: msg2, desc: "Deep purples and electric blues with holographic sarees." }
      ]
    },
    "124": {
      name: "Sarah Jenkins",
      chats: [
        { id: 1, userId: 2, img: msg3, desc: "Hi there! I loved the initial draft you sent over." },
        { id: 2, userId: 1, img: msg1, desc: "Glad you liked it! Any specific changes for the final version?" },
        { id: 3, userId: 2, img: msg3, desc: "Just a bit more lighting on the face, then we are good to go!" }
      ]
    },
    "125": {
      name: "Priya Sharma",
      chats: [
        { id: 1, userId: 2, img: msg2, desc: "I'm looking for a modern jacket design for my character." },
        { id: 2, userId: 1, img: msg1, desc: "I can help with that. Any specific patterns you want included?" },
        { id: 3, userId: 2, img: msg2, desc: "Is it possible to add a traditional mandala pattern to the character's jacket?" }
      ]
    },
    "126": {
      name: "David Miller",
      chats: [
        { id: 1, userId: 2, img: msg1, desc: "Hey, I'm ready to start the branding project." },
        { id: 2, userId: 1, img: msg3, desc: "Great! Can you send over any existing assets you have?" },
        { id: 3, userId: 2, img: msg1, desc: "I've attached the brand guidelines. Let me know if you have questions." }
      ]
    },
    "127": {
      name: "Ishaan Malhotra",
      chats: [
        { id: 1, userId: 2, img: msg2, desc: "How's the progress on the animation storyboard?" },
        { id: 2, userId: 1, img: msg1, desc: "Working on the keyframes right now!" },
        { id: 3, userId: 2, img: msg2, desc: "Checking in to see if you've had a chance to start on the storyboard." }
      ]
    }
  };

  const currentChat = conversations[id] || conversations["123"]; // Fallback to Arjun if ID not found

  return (
    <div className="flex justify-center">
      <div className="w-[1200px] m-[50px]">
        <span className="font-light text-[13px] text-[#555]">
          Messages &gt; {currentChat.name}
        </span>

        <div className="my-[30px] p-[50px] flex flex-col gap-[20px] h-[500px] overflow-y-auto bg-gray-50 rounded-lg">
          {currentChat.chats.map((m) => (
            <div
              key={m.id}
              className={`flex gap-[20px] max-w-[600px] text-[18px] ${
                m.userId === currentUserId ? "flex-row-reverse self-end" : ""
              }`}
            >
              <img src={m.img} alt="" className="w-[40px] h-[40px] rounded-full object-cover" />
              <p className={`max-w-[500px] p-[20px] font-light ${
                m.userId === currentUserId
                  ? "bg-[#314646] text-white rounded-[20px_0px_20px_20px]"
                  : "bg-white border border-gray-200 text-gray-700 rounded-[0px_20px_20px_20px]"
              }`}>
                {m.desc}
              </p>
            </div>
          ))}
        </div>

        <hr className="h-0 border-[0.5px] border-[#e8e6e6] mb-[20px]" />

        <div className="flex items-center justify-between gap-4">
          <textarea
            placeholder={`Message ${currentChat.name}...`}
            className="w-full h-[100px] p-[10px] border border-gray-300 rounded-[10px] outline-none"
          />
          <button className="bg-[#0a1b1b] hover:bg-[#1a2e2e] p-[20px] text-white font-medium border-none rounded-[10px] cursor-pointer w-[120px]">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Message;