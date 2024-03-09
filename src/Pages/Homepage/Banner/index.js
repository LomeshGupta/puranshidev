import React from "react";
import "./Banner.css";
import img1 from "../../../Assets/01_img.jpg";

const Banner = () => {
  return (
    <div className="container">
      <div className="headline">
        Events organization with our professional team.
      </div>
      <div className="menu-container">
        <div className="menu-item">Services</div>
        <div className="menu-item">Contact</div>
      </div>
      <div className="image-container">
        <img src={img1} alt="Large Image" />
      </div>
    </div>
  );
};

export default Banner;
