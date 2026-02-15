import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import newRequest from "../../Services/NewReq";
import Review from "../Review/Review";

const Reviews = ({ gigId }) => {
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["reviews"],
    queryFn: () =>
      newRequest.get(`/reviews/${gigId}`).then((res) => {
        return res.data;
      }),
  });

  const mutation = useMutation({
    mutationFn: (review) => {
      return newRequest.post("/reviews", review);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["reviews"]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const desc = e.target[0].value;
    const star = e.target[1].value;
    mutation.mutate({ gigId, desc, star });
  };

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-semibold mb-5">Reviews</h2>

      {isLoading
        ? "loading"
        : error
        ? "Something went wrong!"
        : data.map((review) => (
            <Review key={review._id} review={review} />
          ))}

      <div className="mt-5 flex flex-col gap-5">
        <h3 className="text-lg font-medium">Add a review</h3>

        <form
          className="flex flex-col gap-5"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="write your opinion"
            className="p-5 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-green-500"
          />

          <select
            className="w-[200px] p-5 border border-gray-300 rounded-md self-end outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>

          <button
            className="self-end w-[100px] bg-[#1dbf73] text-white py-2 rounded-md hover:opacity-90 transition cursor-pointer"
          >
            Send
          </button>
        </form>
      </div>

      <hr className="my-12 border-[0.5px] border-gray-300" />
    </div>
  );
};

export default Reviews;
