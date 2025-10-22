import React from "react";
import logo from "../../assets/logo.png";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <img src={logo} alt="logo" className="w-20 h-20 animate-spin" />
    </div>
  );
};

export default Loading;
