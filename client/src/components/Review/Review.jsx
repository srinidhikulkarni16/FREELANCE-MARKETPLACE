import { useQuery } from "@tanstack/react-query";
import React from "react";
import newRequest from "../../Services/NewReq";

const Review = ({ review }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: [review.userId],
    queryFn: () =>
      newRequest.get(`/users/${review.userId}`).then((res) => {
        return res.data;
      }),
  });

  return (
    <div className="flex flex-col gap-5 my-5">
      {isLoading ? (
        "loading"
      ) : error ? (
        "error"
      ) : (
        <div className="flex items-center">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src={data.img || "/img/noavatar.jpg"}
            alt=""
          />
          <div className="ml-3">
            <span className="font-medium">{data.username}</span>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <span>{data.country}</span>
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center gap-1">
        {Array(review.star)
          .fill()
          .map((item, i) => (
            <img
              src="/img/star.png"
              alt=""
              key={i}
              className="h-3.5 w-3.5"
            />
          ))}
        <span className="text-sm font-bold text-yellow-400 ml-1">
          {review.star}
        </span>
      </div>

      <p className="text-sm text-gray-700 leading-relaxed">
        {review.desc}
      </p>

      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600">Helpful?</span>

        <img src="/img/like.png" alt="" className="w-3.5 h-3.5" />
        <span className="text-sm">Yes</span>

        <img src="/img/dislike.png" alt="" className="w-3.5 h-3.5" />
        <span className="text-sm">No</span>
      </div>
    </div>
  );
};

export default Review;
