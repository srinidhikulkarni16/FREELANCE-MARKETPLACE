import React from "react";
import { Link } from "react-router-dom";
import Featured from "../../components/featured/Featured";
import Slide from "../../components/Slide/Slide";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import { cards } from "../../data";

import graphics from "../../img/graphics.svg";
import digitalMarketing from "../../img/online-marketing.svg";
import writingTranslation from "../../img/writing-translation.svg";
import videoAnimation from "../../img/video-animation.svg";
import musicAudio from "../../img/music-audio.svg";
import programmingTech from "../../img/programming.svg";
import business from "../../img/business.svg";
import lifestyle from "../../img/lifestyle.svg";
import data from "../../img/data.svg";
import photography from "../../img/photography.svg";

function Home() {
  const marketplaceItems = [
    { img: graphics, title: "Graphics & Design", cat: "design" },
    { img: digitalMarketing, title: "Digital Marketing", cat: "marketing" },
    { img: writingTranslation, title: "Writing & Translation", cat: "writing" },
    { img: videoAnimation, title: "Video & Animation", cat: "video" },
    { img: musicAudio, title: "Music & Audio", cat: "audio" },
    { img: programmingTech, title: "Programming & Tech", cat: "tech" },
    { img: business, title: "Business", cat: "business" },
    { img: lifestyle, title: "Lifestyle", cat: "lifestyle" },
    { img: data, title: "Data", cat: "data" },
    { img: photography, title: "Photography", cat: "photography" },
  ];

  const handleScrollToFooter = () => {
    const footerElement = document.getElementById("footer");
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full overflow-hidden bg-white">
      <Featured />

      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <Slide>
            {cards.map((card) => (
              <CategoryCard key={card.id} card={card} />
            ))}
          </Slide>
        </div>
      </section>

      <section className="py-20 bg-[#fafafa]">
        <div className="max-w-[1400px] mx-auto px-6">
          <h2 className="text-3xl font-semibold text-gray-800 mb-14">
            Explore the marketplace
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-14 gap-x-6">
            {marketplaceItems.map((item, index) => (
              <Link
                to={`/gigs?cat=${item.cat}`}
                key={index}
                className="group flex flex-col items-center gap-4 text-center cursor-pointer transition-transform hover:-translate-y-1 no-underline"
              >
                <img src={item.img} alt={item.title} className="w-14 h-14" />
                <div className="w-10 h-[2px] bg-gray-300 group-hover:bg-[#1a2e2e] group-hover:w-14 transition-all duration-300"></div>
                <span className="text-sm text-gray-700 font-medium">{item.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0a1b1b]">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-white space-y-6">
            <h3 className="text-2xl font-semibold uppercase tracking-wide">NYX Business</h3>
            <h2 className="text-4xl font-semibold leading-tight">A solution designed for modern teams</h2>
            <p className="text-xl font-light text-gray-300 max-w-[500px]">
              Upgrade to a curated freelance experience with tools, dedicated support, and streamlined collaboration built for growth.
            </p>
            <ul className="space-y-4 pt-4">
              {["Connect with business-proven freelancers", "Dedicated success manager support", "Centralized workspace for collaboration"].map((text, index) => (
                <li key={index} className="flex items-start gap-3 text-lg text-gray-300">
                  <span className="mt-1">✓</span>
                  {text}
                </li>
              ))}
            </ul>

            <button
              onClick={handleScrollToFooter}
              className="mt-6 bg-[#555555] hover:bg-[#444d4d] transition px-6 py-3 rounded-md font-medium text-white"
            >
              Explore NYX Business
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;