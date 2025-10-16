import React from "react";
import { Link } from "react-router";

const AppCard = ({ appCard }) => {
  const { id, image, ratingAvg, title, downloads } = appCard;

  return (
    <Link to={`/app/${id}`}>
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <img className="rounded-2xl" src={image} alt="App" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">{downloads}</div>
            <div className="badge badge-outline">{ratingAvg}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
