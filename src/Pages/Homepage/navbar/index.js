import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaGripLines } from "react-icons/fa";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showWelcomePage, setShowWelcomePage] = useState(true);
  const [isNavbarFixed, setNavbarFixed] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcomePage(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setNavbarFixed(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isNavbarFixed ? "fixed" : ""}`}>
      {showWelcomePage ? (
        <div className="overlay">
          <div className="center-text">
            <h1 className="company-name">
              Puranshi<span>.</span>
            </h1>
          </div>
        </div>
      ) : (
        <div className="overlay hidden">
          <div className="center-text">
            <h1 className="company-name">
              Puranshi<span>.</span>
            </h1>
          </div>
        </div>
      )}
      <h1 className="company-name">
        <Link style={{ textDecoration: "none", color:"Black" }} to="/">
          Puranshi Events<span>.</span>
        </Link>
      </h1>

      <div className="icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaGripLines />}
      </div>
      {menuOpen && (
        <div className="menu-overlay" onClick={closeMenu}>
          <h1 className="company-name-overlay">Puranshi</h1>
          <div className="menu" onClick={(e) => e.stopPropagation()}>
            <div className="close-icon" onClick={closeMenu}>
              <FaTimes />
            </div>
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              <div className="menu-item">Home</div>
            </Link>
            <Link
              to="/About-us"
              style={{ textDecoration: "none", color: "white" }}
            >
              <div className="menu-item">About</div>
            </Link>

            <div className="menu-item">Services</div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
