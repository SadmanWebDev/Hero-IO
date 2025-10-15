import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faStar } from "@fortawesome/free-solid-svg-icons";

const InstalledApp = ({ app }) => {
  const { image, title, size, ratingAvg, downloads } = app;
  console.log(app);
  return (
    <div className="flex justify-between items-center p-4 rounded-md bg-white mb-5">
      <div className="flex">
        <img className="w-20 mr-4 rounded-lg" src={image} alt="" />
        <div>
          <h1 className="text-xl font-semibold mb-3">{title}</h1>
          <div className="flex">
            <span className="mr-4 text-[#00d390]">
              <FontAwesomeIcon icon={faDownload} />
              {downloads}
            </span>
            <span className="mr-4 text-[#FF8811]">
              {" "}
              <FontAwesomeIcon icon={faStar} />
              {ratingAvg}
            </span>
            <span className="mr-4 text-gray-500">{size} MB</span>
          </div>
        </div>
      </div>
      <button className="btn btn-primary">Uninstall</button>
    </div>
  );
};

export default InstalledApp;
