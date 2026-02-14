import React from "react";
import Featured from "../../components/Featured/Featured";
import Slide from "../../components/Slide/Slide";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { cards, projects } from "../../data";

function Home() {
  return (
    <div className="home w-full overflow-hidden">
      {/* Featured Section */}
      <Featured />

      {/* 1. Category Cards Slider Section */}
      <div className="flex justify-center py-10">
        <div className="w-full max-w-[1400px] px-5">
          <Slide slidesToShow={5} arrowsScroll={5}>
            {cards.map((card) => (
              <CategoryCard key={card.id} card={card} />
            ))}
          </Slide>
        </div>
      </div>

      {/* 2. Explore Marketplace Section */}
      <div className="flex justify-center py-[100px]">
        <div className="w-full max-w-[1400px] px-5">
          <h1 className="text-[#555] text-3xl font-medium mb-10">
            Explore the marketplace
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-y-10 justify-items-center">
            {[
              { img: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg", title: "Graphics & Design" },
              { img: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg", title: "Digital Marketing" },
              { img: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg", title: "Writing & Translation" },
              { img: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg", title: "Video & Animation" },
              { img: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg", title: "Music & Audio" },
              { img: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg", title: "Programming & Tech" },
              { img: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg", title: "Business" },
              { img: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg", title: "Lifestyle" },
              { img: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg", title: "Data" },
              { img: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/photography.01cf943.svg", title: "Photography" },
            ].map((item, index) => (
              <div
                key={index}
                className="group w-[150px] flex flex-col gap-[15px] items-center justify-center text-center cursor-pointer"
              >
                <img src={item.img} alt={item.title} className="w-[50px] h-[50px]" />
                <div className="w-[40px] h-[2px] bg-[#ddd] group-hover:bg-[#1dbf73] group-hover:w-[60px] transition-all duration-300"></div>
                <span className="font-light text-gray-700">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. NYX Business Features Section */}
      <div className="flex justify-center py-[100px] bg-[#0a1b1b]">
        <div className="w-full max-w-[1400px] px-5 flex flex-col lg:flex-row items-center gap-10 lg:gap-[100px]">
          
          {/* Left Content */}
          <div className="flex flex-col gap-5 flex-1 text-white">
            <h2 className="text-xl font-bold italic">NYX business</h2>
            <h1 className="text-4xl font-semibold leading-tight">
              A business solution designed for <span className="font-light italic">teams</span>
            </h1>
            <p className="text-lg font-light leading-relaxed">
              Upgrade to a curated experience packed with tools and benefits, dedicated to businesses.
            </p>
            
            <ul className="flex flex-col gap-3 mt-4">
              {[
                "Connect to freelancers with proven business experience",
                "Get matched with the perfect talent by a customer success manager",
                "Manage teamwork and boost productivity with one powerful workspace",
              ].map((text, index) => (
                <li key={index} className="flex items-start gap-3 text-sm font-light">
                  <span className="text-[#1dbf73] border border-[#1dbf73] rounded-full px-1 text-xs">✓</span>
                  {text}
                </li>
              ))}
            </ul>
            
            <button className="bg-[#444d4d] hover:border-[#5d8080] text-white px-6 py-3 rounded-md w-max mt-5 transition-colors">
              Explore NYX Business
            </button>
          </div>
        </div>
      </div>

      {/* 4. Projects Slider Section */}
      {/* <div className="flex justify-center py-20 bg-[#f1f1f1]">
        <div className="w-full max-w-[1400px] px-5">
            <h1 className="text-3xl font-semibold mb-8 text-[#404145]">Get inspired with projects made by our freelancers</h1>
            <Slide slidesToShow={4} arrowsScroll={4}>
            {projects.map((card) => (
                <ProjectCard key={card.id} card={card} />
            ))}
            </Slide>
        </div>
      </div> */}
    </div>
  );
}

export default Home;