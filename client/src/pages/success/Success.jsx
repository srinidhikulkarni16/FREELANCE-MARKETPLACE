import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import newRequest from "../../Services/NewReq";

const Success = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(search);
  const payment_intent = params.get("payment_intent");

  useEffect(() => {
    const makeRequest = async () => {
      try {
        await newRequest.put("/orders", { payment_intent });
        setTimeout(() => {
          navigate("/orders");
        }, 3000);
      } catch (err) { console.log(err); }
    };
    makeRequest();
  }, []);

  return (
    <div className="py-40 text-center flex flex-col items-center gap-4">
      <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h1 className="text-2xl font-bold">Payment Successful!</h1>
      <p className="text-gray-500">You are being redirected to your orders page. Please do not close the tab.</p>
    </div>
  );
};

export default Success;