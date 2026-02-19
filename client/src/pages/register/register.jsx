import React, { useState } from "react";
import upload from "../../Services/Upload";
import newRequest from "../../Services/NewReq";
import { useNavigate } from "react-router-dom";

function Register() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    img: "",
    country: "",
    isSeller: false,
    desc: "",
    phone: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSeller = (e) => {
    setUser((prev) => ({ ...prev, isSeller: e.target.checked }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // 1. Upload image
      const url = file ? await upload(file) : "";

      // 2. Register User
      await newRequest.post("/auth/register", {
        ...user,
        img: url,
      });

      // 3. AUTO-LOGIN (Uses the email and password just entered)
      const res = await newRequest.post("/auth/login", {
        email: user.email,
        password: user.password,
      });

      // 4. Save session and redirect
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      setLoading(false);
      navigate("/user");

    } catch (err) {
      setLoading(false);
      const rawError = err.response?.data;
      
      // FRIENDLY ERROR CHECK:
      // If the error message contains E11000, it's a duplicate username/email
      if (JSON.stringify(rawError).includes("E11000")) {
        setError("That username or email is already taken! Try logging in instead.");
      } else {
        setError(rawError || "Registration failed. Please try again.");
      }
    }
  };

  // Styles
  const inputStyles = "p-3 border border-gray-300 rounded focus:ring-2 focus:ring-[#0a1b1b] outline-none transition-all";
  const labelStyles = "text-gray-600 font-medium mt-2";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <form 
        onSubmit={handleSubmit} 
        className="w-full max-w-5xl bg-white p-8 md:p-12 rounded-xl shadow-lg flex flex-col md:flex-row gap-12"
      >
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-gray-500 mb-2">Create a new account</h1>
          
          <label className={labelStyles}>Username</label>
          <input name="username" type="text" placeholder="Nidhi" className={inputStyles} onChange={handleChange} required />

          <label className={labelStyles}>Email</label>
          <input name="email" type="email" placeholder="email@example.com" className={inputStyles} onChange={handleChange} required />

          <label className={labelStyles}>Password</label>
          <input name="password" type="password" className={inputStyles} onChange={handleChange} required />

          <label className={labelStyles}>Profile Picture</label>
          <input 
            type="file" 
            className="text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200 cursor-pointer"
            onChange={(e) => setFile(e.target.files[0])} 
          />

          <label className={labelStyles}>Country</label>
          <input name="country" type="text" placeholder="India" className={inputStyles} onChange={handleChange} />
          
          <button 
            type="submit" 
            disabled={loading}
            className={`mt-6 p-4 bg-[#0a1b1b] hover:bg-[#1a2e2e] text-white font-bold rounded transition-colors shadow-md ${loading ? "opacity-50" : ""}`}
          >
            {loading ? "Processing..." : "Register"}
          </button>

          {/* User-friendly Error Display */}
          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mt-4">
              <p className="text-red-700 text-sm font-semibold">{typeof error === "string" ? error : "An error occurred"}</p>
            </div>
          )}
        </div>

        <div className="flex-1 flex flex-col gap-4 border-l-0 md:border-l md:pl-12 border-gray-100">
          <h1 className="text-2xl font-bold text-gray-500 mb-2">I want to become a seller</h1>
          
          <div className="flex items-center gap-4 py-2">
            <span className="text-gray-600 font-medium">Activate the seller account</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" onChange={handleSeller} />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <label className={labelStyles}>Phone Number</label>
          <input name="phone" type="text" placeholder="xx xxxxx-xxxxx" className={inputStyles} onChange={handleChange} />

          <label className={labelStyles}>Description</label>
          <textarea placeholder="About you" name="desc" rows="8" className={`${inputStyles} resize-none`} onChange={handleChange}></textarea>
        </div>
      </form>
    </div>
  );
}

export default Register;