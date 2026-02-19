import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import newRequest from "../../Services/NewReq";

function Navbar() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <div
      className={`${
        active || pathname !== "/" ? "bg-[#0a1b1b]" : "bg-[#1a2e2e]"
      } flex flex-col items-center text-white sticky top-0 z-[999] transition-all duration-[1500ms] ease-in-out w-full`}
    >
      <div className="w-full flex justify-evenly items-center py-5 px-0">
        <div className="text-[40px] font-extrabold">
          <Link className="no-underline text-inherit" to="/">
            <span className="whitespace-nowrap font-normal text-4xl font-['Segoe_UI',_Tahoma,_Geneva,_Verdana,_sans-serif]">
              NYX
            </span>
          </Link>
        </div>

        <div className="flex gap-6 items-center font-medium font-['Segoe_UI',_Tahoma,_Geneva,_Verdana,_sans-serif] text-xl">
          <span className="whitespace-nowrap font-normal text-xl cursor-pointer">
            NYX Business
          </span>
          
          {/* --- CHANGE: Explore now links to Gigs (Marketplace) --- */}
          <Link to="/gigs" className="no-underline text-inherit">
            <span className="whitespace-nowrap font-normal text-xl">Explore</span>
          </Link>

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
                  <span className="cursor-pointer" onClick={handleLogout}>
                    Logout
                  </span>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login" className="no-underline text-inherit text-xl">
                Log in
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
          <div className="w-full py-[10px] px-0 flex justify-evenly font-light text-gray-500 text-lg">
            {/* --- CHANGE: Updated category links to use /gigs?cat= --- */}
            <Link className="no-underline text-gray-500 hover:text-white text-lg" to="/gigs?cat=design">Graphics & Design</Link>
            <Link className="no-underline text-gray-500 hover:text-white text-lg" to="/gigs?cat=video">Video & Animation</Link>
            <Link className="no-underline text-gray-500 hover:text-white text-lg" to="/gigs?cat=writing">Writing & Translation</Link>
            <Link className="no-underline text-gray-500 hover:text-white text-lg" to="/gigs?cat=ai">AI Services</Link>
            <Link className="no-underline text-gray-500 hover:text-white text-lg" to="/gigs?cat=marketing">Digital Marketing</Link>
            <Link className="no-underline text-gray-500 hover:text-white text-lg" to="/gigs?cat=audio">Music & Audio</Link>
            <Link className="no-underline text-gray-500 hover:text-white text-lg" to="/gigs?cat=tech">Programming & Tech</Link>
            <Link className="no-underline text-gray-500 hover:text-white text-lg" to="/gigs?cat=business">Business</Link>
            <Link className="no-underline text-gray-500 hover:text-white text-lg" to="/gigs?cat=lifestyle">Lifestyle</Link>
          </div>
          <hr className="w-full border-t-[0.5px] border-solid border-white/25 m-0" />
        </>
      )}
    </div>
  );
}

export default Navbar;