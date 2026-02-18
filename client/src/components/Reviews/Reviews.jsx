import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import newRequest from "../../Services/NewReq";
import Review from "../Review/Review";

const Reviews = ({ gigId }) => {
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["reviews", gigId],
    queryFn: () => newRequest.get(`/reviews/${gigId}`).then((res) => res.data),
    enabled: !!gigId,
  });

  const mutation = useMutation({
    mutationFn: (review) => newRequest.post("/reviews", review),
    onSuccess: () => queryClient.invalidateQueries(["reviews", gigId]),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    mutation.mutate({ 
        gigId, 
        desc: formData.get("desc"), 
        star: formData.get("star") 
    });
    e.target.reset();
  };

  return (
    <div className="mt-16 border-t border-gray-100 pt-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Reviews</h2>
      <div className="space-y-8">
        {isLoading ? "Loading..." : error ? "Error" : data?.map(r => <Review key={r._id} review={r} />)}
      </div>

      <div className="mt-12 bg-gray-50 rounded-3xl p-8 border border-gray-100">
        <h3 className="text-lg font-semibold mb-4 text-[#0a1b1b]">Leave a Review</h3>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <textarea
            name="desc"
            required
            className="p-4 bg-white border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-[#0a1b1b]"
            placeholder="Share your thoughts..."
          />
          <div className="flex items-center gap-4">
            <select name="star" className="p-2.5 bg-white border border-gray-200 rounded-xl outline-none">
              {[5, 4, 3, 2, 1].map(n => <option key={n} value={n}>{n} Stars</option>)}
            </select>
            <button 
              className="bg-[#0a1b1b] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#1a2e2e] transition-all"
              disabled={mutation.isPending}
            >
              Post Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Reviews;