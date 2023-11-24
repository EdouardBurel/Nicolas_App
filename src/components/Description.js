import React from "react";
import "./Description.css";

function Description() {
  return (
    <div className="description-container">
      <div className="description-content">
        <h4>
          En tant que professeur d'improvisation, je dispose également d'un
          bagage de cours sans cesse mis à jour et de concepts à jouer avec les
          élèves.
          <p>
            Au cours d'une année, même avec des sessions hebdomadaires courtes,
            mes élèves ont l'opportunité de développer :
          </p>
        </h4>
      </div>
      <div className="description-list">
        <ul>
          <li>
            L'esprit d'équipe, la <b>cohésion</b>, la construction collective.
          </li>
          <li>
            Le lâcher prise et la <b>gestion du stress</b>.
          </li>
          <li>
            <b>L'élocution</b>, l'écoute de soi comme de l'autre, le
            développement de la voix.
          </li>
          <li>
            La <b>confiance</b> envers les autres.
          </li>
          <li>
            Le <b>communication</b> non verbale par la gestuelle, les postures,
            et les expressions.
          </li>
          <li>
            L'<b>exploration de l'imaginaire</b> personnel et collectif.
          </li>
          <li>
            La <b>maîtrise de l'espace</b> et la compréhension des fondamentaux
            du théâtre.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Description;
