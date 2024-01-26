import React from "react";
import Searchbar from "./Searchbar";

const HeroSection = ({
  backgroundImg,
  title,
  description,
  hasSearchbar,
  fullScreen,
}) => {
  
  return (
    <div className={`relative mt-10 ${fullScreen ? "h-screen" : "h-half"} `}>
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: `url(${backgroundImg})`,
        }}
      ></div>
      <div className="absolute inset-0 bg-indigo-800 opacity-40"></div>
      <div className="absolute inset-0 flex items-center justify-center px-5 text-white md:px-0">
        <div className="text-center">
          <h1 className="mb-4">{title}</h1>
          <p className="text-white">{description}</p>
          {hasSearchbar && <Searchbar />}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
