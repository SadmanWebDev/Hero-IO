import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-base-200">
      <div className="relative">
        <div className="w-16 h-16 rounded-full border-4 border-[#9F62F2] border-t-transparent animate-spin"></div>
        <span className="absolute inset-0 flex items-center justify-center text-[#9F62F2] font-semibold">
          Loading
        </span>
      </div>
    </div>
  );
};

export default Loading;
