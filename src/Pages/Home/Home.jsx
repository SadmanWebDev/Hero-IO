import React from "react";
import Banner from "../Banner/Banner";
import { useLoaderData } from "react-router";
import TrendingApp from "../TrendingApp/TrendingApp";

const Home = () => {
  const trendingApps = useLoaderData();
  return (
    <div className="py-[80px] bg-base-200">
      <Banner></Banner>
      <div className="text-center  max-w-[1260px] mx-auto flex flex-col items-center">
        <h1 className="text-5xl font-bold">Trending Apps</h1>
        <p className="mt-4 mb-9">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 text-center max-w-[1260px] mx-auto">
        {trendingApps.map((trendingApp) => (
          <TrendingApp
            key={trendingApp.id}
            trendingApp={trendingApp}
          ></TrendingApp>
        ))}
      </div>
      <button className="btn btn-primary mt-5 max-w-[1260px] mx-auto flex flex-col items-center">
        Show All
      </button>
    </div>
  );
};

export default Home;
