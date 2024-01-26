import React from "react";
import SectionCard from "./SectionCard";
import { GrUserExpert } from "react-icons/gr";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";

const HomeMainSection = () => {
  return (
    <>
      {/* Why Choose Us Section */}
      <div className="w-full px-5 my-10 md:px-72 section1">
        <div className="mb-10 text-center">
          <h2>Why Choose Us?</h2>
          <p>Discover our potentials and why you should choose us</p>
        </div>

        {/* Cards for Why Choose Us Section */}
        <div className="grid grid-cols-3 gap-3 md:gap-8">
          <div className="col-span-3 md:col-span-1">
            <SectionCard
              title={"Trusted Experts"}
              content={
                "Our experienced team is here to help you smoothly navigate real estate transactions and provide valuable insights into the world of land ownership."
              }
              color={"bg-pink-100"}
              hoverColor={"bg-pink-200"}
              icon={<GrUserExpert />}
            />
          </div>
          <div className="col-span-3 md:col-span-1">
            <SectionCard
              title={"Prime Land Selection"}
              content={
                "Discover a variety of great land options carefully chosen to meet different needs. From beautiful residential lots to smart investment opportunities, we've got you covered."
              }
              color={"bg-indigo-100"}
              hoverColor={"bg-indigo-200"}
              icon={<MdOutlineRealEstateAgent />}
            />
          </div>
          <div className="col-span-3 md:col-span-1">
            <SectionCard
              title={"Your Needs First"}
              content={
                "At Dominion Oceans Homes and Properties Ltd., we focus on your preferences. Our personalized service ensures a stress-free journey as we guide you through the process of acquiring the perfect piece of land."
              }
              color={"bg-red-100"}
              hoverColor={"bg-red-200"}
              icon={<FaRegHeart />}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeMainSection;
