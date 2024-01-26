import React from "react";
import heroBg from "../assets/img/hero-bg.jpg";
import Searchbar from "./Searchbar";

const HeroSection = () => {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      ></div>
      <div className="absolute inset-0 bg-indigo-800 opacity-40"></div>
      <div className="absolute inset-0 flex items-center justify-center px-5 text-white md:px-0">
        <div className="text-center">
          <h1 className="mb-4">Dominion Ocean Homes & Properties Ltd</h1>
          <p className="text-white">Begin your journey towards land ownership today. Explore our listings or connect with our team to transform your vision into reality with us.</p>
          <Searchbar />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
