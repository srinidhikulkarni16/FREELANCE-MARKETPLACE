import { useQuery } from "@tanstack/react-query";
import React from "react";
import newRequest from "../../Services/NewReq";
import { StarIcon } from "@heroicons/react/24/solid";
import { projects as staticProjects, gigs as staticGigs } from "../../data";

const Review = ({ review }) => {
  const { data: user } = useQuery({
    queryKey: ["user", review.userId],
    queryFn: () => newRequest.get(`/users/${review.userId}`).then((res) => res.data),
    staleTime: 600000,
  });

  const findUserImage = (username) => {
    const match = [...staticGigs, ...staticProjects].find(u => u.username === username);
    return match?.pp || user?.img || null;
  };

  const userImg = findUserImage(user?.username);

  return (
    <div className="flex flex-col gap-4 pb-8 border-b border-gray-50 last:border-0">
      <div className="flex items-center gap-4">
        <div className="h-10 w-10 rounded-full bg-[#0a1b1b] text-white flex items-center justify-center font-bold overflow-hidden shadow-sm">
          {userImg ? (
            <img src={userImg} alt="" className="w-full h-full object-cover" />
          ) : (
            user?.username?.charAt(0).toUpperCase() || "U"
          )}
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-gray-900">{user?.username || "Anonymous"}</span>
          <span className="text-gray-400 text-xs font-semibold uppercase">{user?.country || "Global"}</span>
        </div>
      </div>
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} className={`h-4 w-4 ${i < review.star ? "text-yellow-400" : "text-gray-200"}`} />
        ))}
      </div>
      <p className="text-gray-600 leading-relaxed">{review.desc}</p>
    </div>
  );
};

export default Review;