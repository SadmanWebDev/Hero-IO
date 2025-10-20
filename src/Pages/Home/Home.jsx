import React from "react";
import Banner from "../Banner/Banner";
import { Link } from "react-router";
import TrendingApp from "../TrendingApp/TrendingApp";
import AppCard from "../AppCard/AppCard";
import useApps from "../../hooks/useApps";

const Home = () => {
  const { apps, loading } = useApps();
  const trendingApps = apps.slice(0, 8);
  return (
    <div className="py-[80px] bg-base-200">
      <Banner></Banner>
      <div className="text-center  max-w-11/12 mx-auto flex flex-col items-center">
        <h1 className="text-5xl font-bold">Trending Apps</h1>
        <p className="mt-4 mb-9">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-center max-w-11/12 mx-auto">
        {trendingApps.map((appCard) => (
          <AppCard key={appCard.id} appCard={appCard}></AppCard>
        ))}
      </div>
      <Link to="/apps">
        <button className="btn btn-primary mt-5 flex mx-auto">Show All</button>
      </Link>
    </div>
  );
};

export default Home;
