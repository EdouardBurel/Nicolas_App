import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container" id="section-3">
      <div className="footer-content">
        <h2>Contact</h2>
        <p>nicolaspieri35@gmail.com</p>
        <p>06 21 16 44 65</p>
        <p>Périgord</p>
      </div>
      <div className="footer-map">
      <img src={process.env.PUBLIC_URL + "/carte.jpg"} alt="Carte"></img>
    </div>
    </div>
  );
}
export default Footer;
