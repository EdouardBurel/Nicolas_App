import React, { useState } from "react";
import "./Header.css";
import FrontCover from "./FrontCover";

function Header() {
  const [showNavLinks, setShowNavLinks] = useState(false);

  const toggleNavLinks = () => {
    setShowNavLinks(!showNavLinks);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <a href="https://www.nicolaspieri.net">
            <img src={process.env.PUBLIC_URL + "/ampoule.jpg"} alt="Logo" />
            Nicolas Pieri
          </a>
        </div>
        <button
          className={`toggle-button ${showNavLinks ? "active" : ""}`}
          onClick={toggleNavLinks}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <ul className={`nav-links ${showNavLinks ? "show" : ""}`}>
          <li>
            <a href="#section-2">A propos</a>
          </li>
          <li>
            <a href="#section-1">Mes Services</a>
          </li>
          <li>
            <a href="#section-3">Me contacter</a>
          </li>
        </ul>
      </nav>
      <FrontCover />
    </div>
  );
}

export default Header;
