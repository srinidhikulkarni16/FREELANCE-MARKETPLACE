import React from "react";
import "./Featured.css";

function Featured() {
  return (
    <div className="featured">
      <div className="container">
        <div className="main">
          <h2>
            Find the perfect <span>freelance</span> services for your business
          </h2>
          <div className="search">
            <div className="searchInput">
              <input type="text" placeholder='Try Building Something!'/>
            </div>
            <button className="search-btn">Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Web Design</button>
            <button>WordPress</button>
            <button>Logo Design</button>
            <button>AI Services</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;