import React from "react";
import "./Services.css";

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
            <div className="service">
              <div className="title-service">
                <h3>Lâcher-prise & Gestion du stress</h3>
              </div>
              <div className="img-container">
                <img
                  src={process.env.PUBLIC_URL + "/ballon.png"}
                  alt="Nico"
                ></img>
                <div className="title-responsive">
                  <h3>Lâcher-prise & Gestion du stress</h3>
                </div>
                <div className="hover-text">
                  <p style={{ margin: "5px 0" }}>
                    *Apprendre sur soi (se mettre hors de sa zone de confort)
                  </p>
                  <p style={{ margin: "5px 0" }}>
                    *Immersion, se mettre à la place de quelqu'un d'autre.
                  </p>
                  <p style={{ margin: "5px 0" }}>*Accepter son ressenti.</p>
                </div>
              </div>
            </div>
            <div className="service">
              <div className="title-service">
                <h3>Prise de parole</h3>
              </div>
              <div className="img-container">
                <img
                  src={process.env.PUBLIC_URL + "/eloquence.png"}
                  alt="Nico"
                ></img>
                <div className="title-responsive">
                  <h3>Prise de parole</h3>
                </div>
                <div className="hover-text">
                  <p>*Mieux s'exprimer et gagner en confiance en soi. </p>
                  <p>*Prise de risque et confiance en l'autre.</p>
                </div>
              </div>
            </div>
            <div className="service">
              <div className="title-service">
                <h3>Cohésion d'Équipe</h3>
              </div>
              <div className="img-container">
                <img
                  src={process.env.PUBLIC_URL + "/catharsis.png"}
                  alt="Nico"
                ></img>
                <div className="title-responsive">
                  <h3>Cohésion d'Équipe</h3>
                </div>
                <div className="hover-text">
                  <p>
                    *S'oublier totalement et vivre l'instant présent lors
                    d'improvisations longues.
                  </p>
                  <p>
                    *S'amuser, sans jugements, sur plusieurs catégories de
                    format court.
                  </p>
                </div>
              </div>
            </div>
            <div className="service">
              <div className="title-service">
                <h3>Jeu de rôle</h3>
              </div>
              <div className="img-container">
                <img
                  src={process.env.PUBLIC_URL + "/jeuderole.png"}
                  alt="Nico"
                ></img>
                <div className="title-responsive">
                  <h3>Jeu de rôle</h3>
                </div>
                <div className="hover-text">
                  <p>*Création d'un jeu de rôle sur table fait sur mesure.</p>
                  <p>
                    *Compter un mois, préavis à faire ensemble par téléphone.
                  </p>
                  <p>*Création de jeux de pistes et de Murder Party.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
