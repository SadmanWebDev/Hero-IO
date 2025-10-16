import React from "react";
import appError from "../../assets/App-Error.png";
import { Link } from "react-router";
const ErrorAppPage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <img src={appError} alt="" className="w-60 mb-6" />
      <h2 className="text-3xl font-semibold mb-2">Oops, App Not Found!</h2>
      <p className="text-gray-500 mb-3">
        The App you are requesting is not found on our system. Please try
        another apps.
      </p>
      <Link to="/">
        <button className="btn btn-primary">Go Back!</button>
      </Link>
    </div>
  );
};

export default ErrorAppPage;
