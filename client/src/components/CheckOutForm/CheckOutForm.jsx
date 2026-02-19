import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      navigate("/orders");
    }, 4000);
  };

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 z-50 bg-white/90 flex flex-col items-center justify-center rounded-[2rem] text-center p-6">
          <div className="w-12 h-12 border-4 border-[#0a1b1b] border-t-transparent rounded-full animate-spin mb-4"></div>
          <h3 className="text-xl font-bold text-[#0a1b1b]">Processing Transaction</h3>
          <p className="text-sm text-gray-500 mt-2">
            Verifying details with your bank... <br />
            <strong>Please do not refresh or close this page.</strong>
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="space-y-1">
          <label className="text-xs font-semibold text-gray-500 uppercase">Cardholder Name</label>
          <input type="text" placeholder="Nidhi" className="w-full p-3 border rounded-xl outline-none focus:ring-1 focus:ring-[#0a1b1b]" required />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-semibold text-gray-500 uppercase">Card Number</label>
          <input type="text" placeholder="xxxx xxxx xxxx xxxx" className="w-full p-3 border rounded-xl outline-none focus:ring-1 focus:ring-[#0a1b1b]" required />
        </div>

        <div className="flex gap-4">
          <div className="flex-1 space-y-1">
            <label className="text-xs font-semibold text-gray-500 uppercase">Expiry</label>
            <input type="text" placeholder="MM/YY" className="w-full p-3 border rounded-xl outline-none" required />
          </div>
          <div className="flex-1 space-y-1">
            <label className="text-xs font-semibold text-gray-500 uppercase">CVV</label>
            <input type="password" placeholder="***" className="w-full p-3 border rounded-xl outline-none" required />
          </div>
        </div>

        <button 
          type="submit"
          className="w-full bg-[#0a1b1b] text-white py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all active:scale-[0.98] mt-4"
        >
          Authorize Payment
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;