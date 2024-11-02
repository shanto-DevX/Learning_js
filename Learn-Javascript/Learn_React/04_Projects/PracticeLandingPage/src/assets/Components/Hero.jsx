import React from "react";
import HeroImg from "../image/Hero-PR.png";

const Hero = () => {
  return (
    <div className="heroBG my-7 flex items-center">
      <div className="container mx-auto">
        <div className="hero__wrapper flex items-center justify-between ">
          <div className="hero__left--content basis-1/2	 text-white">
            <h2 className="text-[2.875rem] font-[500]">Learn Build Project</h2>
            <h1 className="text-[5.625rem] font-[700] leading-tight">
              With React JS
            </h1>
            <p className="text-[1rem] font-[400] leading-snug">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters
            </p>
            <div className="btn">
              <a
                href="#"
                className="bg-[#146EF5] py-4 px-5 mt-5 rounded-xl text-white font-[600] inline-block hover:bg-[#fff] hover:text-[#146EF5] hover:transition-bg duration-500 ease-in-out shadow-lg shadow-[#146EF5]/50"
              >
                Check Price
              </a>
            </div>
          </div>
          <div className="hero__right--content basis-1/3	">
            <img src={HeroImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
