import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="company-info">
          <h3>Puranshi Events.</h3>
        </div>

        <div className="company-links">
          <a href="#">About Us</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </div>

        {/* <div className="social-media">
          <a href="#">
            <i className="fa fa-facebook"></i>
            das
          </a>
          <a href="#">
            <i className="fa fa-twitter"></i>
            dasd
          </a>
          <a href="#">
            <i className="fa fa-instagram"></i>
          </a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
