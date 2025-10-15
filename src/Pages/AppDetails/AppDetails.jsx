import React from "react";
import { useLoaderData, useParams } from "react-router";
import dIcon from "../../assets/icon-downloads.png";
import raIcon from "../../assets/icon-ratings.png";
import reIcon from "../../assets/icon-review.png";
import RatingChart from "../RatingChart/RatingChart";

const AppDetails = () => {
  const apps = useLoaderData();
  const { id } = useParams();
  const app = apps.find((app) => String(app.id) === id);
  const {
    companyName,
    description,
    downloads,
    image,
    ratingAvg,
    ratings,
    reviews,
    size,
    title,
  } = app;
  console.log(ratings);

  return (
    <div className="max-w-11/12 m-auto py-20">
      <div className="flex">
        <img className="w-[330px] mr-10 mb-10" src={image} alt="" />
        <div>
          <h1 className="text-3xl font-bold mb-3">{title}</h1>
          <p className=" mb-7">
            Developed by <span className="text-[#9F62F2]">{companyName}</span>
          </p>
          <div className="border border-gray-300 mb-7"></div>
          <div className="flex mb-8">
            <div className="mr-6 flex flex-col items-center">
              <img className="w-[30px]" src={dIcon} alt="" />
              <p>Downloads</p>
              <span className="font-bold text-4xl">{downloads}</span>
            </div>
            <div className="mr-6 flex flex-col items-center">
              <img className="w-[30px]" src={raIcon} alt="" />
              <p>Average Ratings</p>
              <span className="font-bold text-4xl">{ratingAvg}</span>
            </div>
            <div className="mr-6 flex flex-col items-center">
              <img className="w-[30px]" src={reIcon} alt="" />
              <p>Total Reviews</p>
              <span className="font-bold text-4xl">{reviews}</span>
            </div>
          </div>
          <button className="btn text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
            Install Now ({size}MB)
          </button>
        </div>
      </div>
      <div className="border border-gray-300"></div>
      <div className="my-9">
        <h1 className="text-2xl font-semibold mb-3">Rating</h1>
        <div>
          <RatingChart ratings={ratings}></RatingChart>
        </div>
      </div>
      <div className="border border-gray-300 mb-9"></div>
      <div>
        <h1 className="text-2xl font-semibold mb-6">Description</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
