import React from "react";

const TrendingApp = ({ trendingApp }) => {
  const { image, ratingAvg, title, downloads } = trendingApp;
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img src={image} alt="App" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions justify-between">
          <div className="badge badge-outline">{downloads}</div>
          <div className="badge badge-outline">{ratingAvg}</div>
        </div>
      </div>
    </div>
  );
};

export default TrendingApp;
