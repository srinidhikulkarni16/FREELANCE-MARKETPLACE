import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import newRequest from "../../Services/NewReq";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const Success = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(search);
  const payment_intent = params.get("payment_intent");

  useEffect(() => {
    const makeRequest = async () => {
      try {
        // Confirms the order in the database
        await newRequest.put("/orders", { payment_intent });
        
        // Redirect after a short delay so the user sees the success message
        setTimeout(() => {
          navigate("/orders");
        }, 3000);
      } catch (err) {
        console.log(err);
      }
    };

    if (payment_intent) {
      makeRequest();
    }
  }, [payment_intent, navigate]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6 p-10 bg-white rounded-[2.5rem] shadow-2xl border border-gray-50">
        <div className="flex justify-center">
          <CheckCircleIcon className="h-20 w-20 text-[#0a1b1b]" />
        </div>
        
        <div className="space-y-2">
          <h1 className="text-3xl font-extrabold text-gray-900">Payment Successful!</h1>
          <p className="text-gray-500 font-medium leading-relaxed">
            Thank you for your purchase. We are finalizing your order details now.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 pt-4">
          <div className="w-12 h-12 border-4 border-[#0a1b1b] border-t-transparent rounded-full animate-spin"></div>
          <p className="text-[#0a1b1b] font-bold text-sm tracking-widest uppercase">
            Redirecting to Orders...
          </p>
        </div>

        <p className="text-xs text-gray-400 italic">
          Please do not close or refresh this page.
        </p>
      </div>
    </div>
  );
};

export default Success;