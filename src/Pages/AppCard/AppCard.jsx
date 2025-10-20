import React from "react";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faStar } from "@fortawesome/free-solid-svg-icons";

const AppCard = ({ appCard }) => {
  const { id, image, ratingAvg, title, downloads } = appCard;

  return (
    <Link to={`/app/${id}`}>
      <div className="card bg-base-100 shadow-sm hover:scale-102 transition">
        <figure>
          <img className="rounded-2xl" src={image} alt="App" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="card-actions justify-between">
            <div className="badge bg-[#F1F5E8] text-[#00d390]">
              <FontAwesomeIcon icon={faDownload} />
              {downloads}
            </div>
            <div className="badge bg-[#FFF0E1] text-[#FF8811]">
              <FontAwesomeIcon icon={faStar} />
              {ratingAvg}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
