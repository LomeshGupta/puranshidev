import React from "react";
import "./Banner.css";
import img1 from "../../../Assets/01_img.jpg";
import img2 from "../../../Assets/02_img.jpg";

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
            At Puranshi, we believe in the power of execution to scale & grow
            our clients’ business. We are a strategy focused Marketing Firm
            working with all major business categories like FMCG, Electronics &
            Consumer Durables, E-commerce, Banking and Telecom. Our experienced
            strategists have lead marketing & growth functions at leading Global
            brands. We specialize in creating Integrated Marketing Campaigns
            with heavy operational requirements supported by one of the
            strongest execution networks across geographies. Engaging with
            Puranshi ensures reliability & convenience through single point
            campaign management.
          </p>
        </div>
      </div>
      <div className="image-container1">
        <img src={img2} alt="Large Image" />
        <div className="about">
          <div className="cont">
            <h1>Who are we?</h1>
            <p>
              strategy-focused Marketing Firm, leverages the power of execution
              to elevate client businesses. Specializing in Integrated Marketing
              Campaigns, we bring operational excellence and global expertise,
              offering reliability and convenience through seamless campaign
              management.
            </p>
          </div>
          <div className="cont">
            <h1>Our VIsion</h1>
            <p>
              We envisions empowering businesses worldwide through strategic
              marketing excellence. Our goal is to be the catalyst for sustained
              growth, fostering innovation, and leaving a lasting positive
              impact on diverse industries.
            </p>
          </div>
          <div className="cont">
            <h1>Our Mission</h1>
            <p>
              our mission is to drive client success by delivering unparalleled
              marketing strategies and integrated campaigns. We strive to exceed
              expectations, cultivate innovation, and build lasting partnerships
              for sustainable growth across diverse global industries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
