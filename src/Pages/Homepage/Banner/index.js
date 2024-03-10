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
        <div className="menu-items">Services</div>
        <div className="menu-items">Contact</div>
      </div>
      <div className="image-container">
        <img src={img1} alt="Large Image" />
        <div className="about">
          <h1>About Us</h1>
          <p>
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
