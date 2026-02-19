import React, { useState, useEffect } from "react";
import CheckoutForm from "../../components/CheckOutForm/CheckoutForm";

const Pay = () => {
  // We remove the useEffect calling create-payment-intent to avoid backend errors
  // while you are in simulation mode.

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center py-20">
      <div className="max-w-md w-full bg-white p-10 rounded-[2.5rem] shadow-2xl border border-gray-100">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-[#0a1b1b]">Secure Checkout</h2>
          <p className="text-gray-400 text-sm mt-1">Enter your bank details to proceed</p>
        </div>
        
        <CheckoutForm />

        <div className="mt-8 flex items-center justify-center gap-2 opacity-30">
          <span className="text-[10px] font-bold tracking-widest uppercase">Encrypted</span>
          <div className="h-px w-8 bg-gray-400"></div>
          <span className="text-[10px] font-bold tracking-widest uppercase">Secure</span>
        </div>
      </div>
    </div>
  );
};

export default Pay;