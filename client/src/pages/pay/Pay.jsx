import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";
import CheckoutForm from "../../components/CheckOutForm/CheckoutForm";
import newRequest from "../../Services/NewReq";

const stripePromise = loadStripe("your_stripe_public_key");

const Pay = () => {
  const [clientSecret, setClientSecret] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await newRequest.post(`/orders/create-payment-intent/${id}`);
        setClientSecret(res.data.clientSecret);
      } catch (err) { console.log(err); }
    };
    makeRequest();
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center py-20">
      <div className="max-w-md w-full bg-white p-10 rounded-[2.5rem] shadow-2xl border border-gray-100">
        <h2 className="text-2xl font-bold mb-8 text-[#0a1b1b] text-center">Complete Payment</h2>
        {clientSecret ? (
          <Elements options={{ clientSecret, appearance: { theme: 'stripe', variables: { colorPrimary: '#0a1b1b' } } }} stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        ) : (
          <div className="flex flex-col items-center py-10 gap-4">
             <div className="w-8 h-8 border-4 border-[#0a1b1b] border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pay;