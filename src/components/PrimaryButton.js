import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <button className="btn  bg-gradient-to-r from-pink-500 to-pink-400 text-black rounded-md">
      {children}
    </button>
  );
};

export default PrimaryButton;
