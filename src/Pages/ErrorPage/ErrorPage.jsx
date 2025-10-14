import React from "react";
import error404 from "../../assets/error-404.png";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center text-center w-xl mx-auto">
      <img src={error404} alt="" />
      <h1 className=" font-semibold text-5xl">Oops, page not found!</h1>
      <p className=" font-light mt-2 mb-4">
        The page you are looking for is not available.
      </p>
      <Link to="/">
        <button className="btn btn-primary w-fit">Go Back!</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
