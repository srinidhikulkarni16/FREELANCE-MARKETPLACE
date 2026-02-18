import React, { useState } from "react";
import newRequest from "../../Services/NewReq";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const res = await newRequest.post("/auth/login", { email, password });
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      navigate("/");
    } catch (err) {
      console.error("Login Error Details:", err.response?.data);
      setError(err.response?.data || "Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="text-center mb-4">
            <h1 className="text-3xl font-bold text-gray-700">Log in</h1>
            <p className="text-gray-400 mt-2">Welcome back! Please enter your details.</p>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-gray-600 font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0a1b1b] focus:outline-none transition-all"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-gray-600 font-medium">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0a1b1b] focus:outline-none transition-all"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="mt-2 p-3 bg-[#0a1b1b] hover:bg-[#1a2e2e] text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
          >
            Login
          </button>

          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-3 mt-2">
              <span className="text-red-600 text-sm font-medium">{error}</span>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Login;