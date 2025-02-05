import React from "react";
import GoogleScholarLogo from "../Assets/Google_Scholar_logo.svg"; // Adjust the path as needed

const GoogleScholarIcon = ({ size = 50 }) => {
  return (
    <img
      src={GoogleScholarLogo}
      alt="Google Scholar Logo"
      width={size}
      height={size}
    />
  );
};

export default GoogleScholarIcon;