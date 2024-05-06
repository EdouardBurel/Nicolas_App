import React from "react";
import "./Services.css";
import { SERVICE_CARD } from "../data";

function Services() {
  return (
    <div className="services-main-container">
      <div className="container-services" id="section-1">
        <div className="container-services-description">
          <h2>Services</h2>
          <span>
            Chaque atelier a une durée minimale d'une journée. Chaque Atelier
            peut être modifié tout en respectant sa trame dans le but de
            s'adapter aux attentes et personnalités de chacun.
          </span>
          <div className="service-container">
            {SERVICE_CARD.map((conceptItem, index) => (
              <div className="service" key={index}>
                <div className="title-service">
                <h3 style={{ fontSize: index === 0 ? "1.4em" : "1.5em" }}>{conceptItem.title}</h3>
                </div>
                <div className="img-container">
                  <img src={conceptItem.image} alt={conceptItem.title} />
                  <div className="title-responsive">
                    <h3>{conceptItem.title}</h3>
                  </div>
                  <div className="hover-text">
                    {conceptItem.description.map((desc, i) => (
                      <p style={{ margin: "5px 0" }} key={i}>
                        {desc}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;