import React from "react";
import "./Service.css";
import img3 from "../../../Assets/03_img.jpg";
import img4 from "../../../Assets/04_img.jpg";
import img5 from "../../../Assets/05_img.jpg";
import img6 from "../../../Assets/06_img.jpg";

const Service = () => {
  return (
    <div className="services">
      <h1 className="headline">Our Serivces</h1>
      <div className="services-container">
        <div className="service-item">
          <img src={img3} alt="Service 1" />
          <div className="overlay">Conferences</div>
        </div>
        <div className="service-item">
          <img src={img4} alt="Service 2" />
          <div className="overlay">Product Launches</div>
        </div>
        <div className="service-item">
          <img src={img5} alt="Service 3" />
          <div className="overlay">Private Parties</div>
        </div>
        <div className="service-item">
          <img src={img6} alt="Service 4" />
          <div className="overlay">Virtual Events</div>
        </div>
      </div>
    </div>
  );
};

export default Service;
