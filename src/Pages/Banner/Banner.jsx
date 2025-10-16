import React from "react";
import googlePlay from "../../assets/fi_16076057.png";
import appleStore from "../../assets/fi_5977575.png";
import mainBanner from "../../assets/hero.png";

const Banner = () => {
  return (
    <div className="">
      <div className="text-center  max-w-[1260px] mx-auto flex flex-col items-center">
        <h1 className=" text-7xl font-bold">
          We Build <span className=" text-[#9F62F2]">Productive</span> Apps
        </h1>
        <p className="mt-4 mb-9">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
        <div className=" mb-9">
          <a className="btn mr-5" href="https://play.google.com/">
            <img src={googlePlay} alt="" />
            Google Play
          </a>
          <a className="btn mr-5" href="https://www.apple.com/app-store/">
            <img src={appleStore} alt="" />
            App Store
          </a>
        </div>
        <img src={mainBanner} alt="" />
      </div>

      <div className=" text-center flex flex-col items-center w-full bg-gradient-to-r from-[#632EE3] to-[#9F62F2]  mb-[80px]">
        <h1 className=" text-5xl font-bold text-white mt-[80px] mb-[40px]">
          Trusted by Millions, Built for You
        </h1>
        <div className="lg:flex">
          <div className="md:mr-30">
            <p className="text-white">Total Downloads</p>
            <h1 className="font-bold text-6xl text-white my-4">29.6M</h1>
            <p className="text-white">21% more than last month</p>
          </div>
          <div className="md:mr-30">
            <p className="text-white">Total Reviews</p>
            <h1 className="font-bold text-6xl text-white my-4">906K</h1>
            <p className="text-white">46% more than last month</p>
          </div>
          <div className="">
            <p className="text-white">Active Apps</p>
            <h1 className="font-bold text-6xl text-white my-4">132+</h1>
            <p className="text-white mb-[80px]">31 more will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
