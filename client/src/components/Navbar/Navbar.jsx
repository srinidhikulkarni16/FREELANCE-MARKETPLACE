import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Added useNavigate
import newRequest from "../../Services/NewReq"; // Added import

function Navbar() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();
  const navigate = useNavigate(); // Initialize navigate

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  // --- ADDED LOGOUT FUNCTION ---
  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  // --- MODIFIED: Pulling user from localStorage ---
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <div
      className={`${
        active || pathname !== "/" ? "bg-[#0a1b1b]" : "bg-[#1a2e2e]"
      } flex flex-col items-center text-white sticky top-0 z-[999] transition-all duration-[1500ms] ease-in-out w-full`}
    >
      {/* Top Navbar */}
      <div className="w-full flex justify-evenly items-center py-5 px-0">
        {/* Logo */}
        <div className="text-[40px] font-extrabold">
          <Link className="no-underline text-inherit" to="/">
            <span className="whitespace-nowrap font-normal text-4xl font-['Segoe_UI',_Tahoma,_Geneva,_Verdana,_sans-serif]">
              NYX
            </span>
          </Link>
        </div>

        {/* Top Links */}
        <div className="flex gap-6 items-center font-medium font-['Segoe_UI',_Tahoma,_Geneva,_Verdana,_sans-serif] text-xl">
          <span className="whitespace-nowrap font-normal text-xl">
            NYX Business
          </span>
          <span className="whitespace-nowrap font-normal text-xl">Explore</span>
          <span className="whitespace-nowrap font-normal text-xl">English</span>
          {!currentUser?.isSeller && (
            <span className="whitespace-nowrap font-normal text-xl">
              Become a Seller
            </span>
          )}

          {currentUser ? (
            <div
              className="flex items-center gap-[10px] cursor-pointer relative text-xl"
              onClick={() => setOpen(!open)}
            >
              {/* Added User Avatar if exists */}
              <img 
                src={currentUser.img || "/img/noavatar.jpg"} 
                alt="" 
                className="w-8 h-8 rounded-full object-cover" 
              />
              <span>{currentUser?.username}</span>
              {open && (
                <div className="absolute top-[50px] right-0 p-5 bg-[#1a2e2e] rounded-[10px] z-[999] border-[0.5px] border-solid border-lightgray flex flex-col gap-[10px] w-[200px] font-light text-aliceblue text-lg">
                  {currentUser.isSeller && (
                    <>
                      <Link className="no-underline text-inherit" to="/mygigs">
                        Gigs
                      </Link>
                      <Link className="no-underline text-inherit" to="/add">
                        Add New Gig
                      </Link>
                    </>
                  )}
                  <Link className="no-underline text-inherit" to="/orders">
                    Orders
                  </Link>
                  <Link className="no-underline text-inherit" to="/messages">
                    Messages
                  </Link>
                  {/* MODIFIED: Changed 'Logo' to 'Logout' */}
                  <span className="cursor-pointer" onClick={handleLogout}>
                    Logout
                  </span>
                </div>
              )}
            </div>
          ) : (
            <>
              {/* MODIFIED: Wrapped 'Sign in' in a Link */}
              <Link to="/login" className="no-underline text-inherit text-xl">
                Sign in
              </Link>
              <Link className="no-underline text-inherit" to="/register">
                <button className="text-white py-[10px] px-5 rounded-md border border-solid border-white cursor-pointer bg-transparent hover:bg-[#444d4d] hover:border-[#5d8080] text-xl">
                  Join
                </button>
              </Link>
            </>
          )}
        </div>
      </div>

      {(active || pathname !== "/") && (
        <>
          <hr className="w-full border-t-[0.5px] border-solid border-white/25 m-0" />
          <div className="w-full py-[10px] px-0 flex justify-evenly font-light text-gray-500 text-lg font-['Segoe_UI',_Tahoma,_Geneva,_Verdana,_sans-serif]">
            {/* ... Categories Links remain unchanged ... */}
            <Link className="no-underline text-gray-500 hover:text-white text-lg" to="/">Graphics & Design</Link>
            <Link className="no-underline text-gray-500 hover:text-white text-lg" to="/">Video & Animation</Link>
            <Link className="no-underline text-gray-500 hover:text-white text-lg" to="/">Writing & Translation</Link>
            <Link className="no-underline text-gray-500 hover:text-white text-lg" to="/">AI Services</Link>
            <Link className="no-underline text-gray-500 hover:text-white text-lg" to="/">Digital Marketing</Link>
            <Link className="no-underline text-gray-500 hover:text-white text-lg" to="/">Music & Audio</Link>
            <Link className="no-underline text-gray-500 hover:text-white text-lg" to="/">Programming & Tech</Link>
            <Link className="no-underline text-gray-500 hover:text-white text-lg" to="/">Business</Link>
            <Link className="no-underline text-gray-500 hover:text-white text-lg" to="/">Lifestyle</Link>
          </div>
          <hr className="w-full border-t-[0.5px] border-solid border-white/25 m-0" />
        </>
      )}
    </div>
  );
}

export default Navbar;