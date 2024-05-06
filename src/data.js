import ballon from "./assets/ballon.png";
import eloquence from "./assets/eloquence.png";
import catharsis from "./assets/catharsis.png";
import jeuDerole from "./assets/jeuderoles.png";
import atelierGroupe from "./assets/atelierGroupe.jpeg";

export const SERVICE_CARD = [
  {
    image: ballon,
    title: "Lâcher-prise & Gestion du stress",
    description: [
      "* Apprendre sur soi (se mettre hors de sa zone de confort)",
      "* Immersion, se mettre à la place de quelqu'un d'autre",
      "* Accepter son ressenti",
    ],
  },
  {
    image: eloquence,
    title: "Prise de parole",
    description: [
      "* Mieux s'exprimer et gagner en confiance en soi",
      "* Prise de risque et confiance en l'autre",
    ],
  },
  {
    image: catharsis,
    title: "Cohésion d'Équipe",
    description: [
      "* S'oublier totalement et vivre l'instant présent lors d'improvisations longues",
      "* S'amuser, sans jugements, sur plusieurs catégories de format court.",
    ],
  },
  {
    image: jeuDerole,
    title: "Jeu de rôle",
    description: [
      "* Création d'un jeu de rôle sur table fait sur mesure",
      "* Compter un mois, préavis à faire ensemble par téléphone.",
      "* Création de jeux de pistes et de Murder Party",
    ],
  },
  {
    image: atelierGroupe,
    title: "Ateliers de groupes",
    description: [
      "Ateliers hebdomadaires de 2 à 3 heures hors vacances scolaires",
      "J'essaie toujours de m'adapter au budget, n'hésitez pas à demander",
    ],
  },
];
/*
<div className="service">
  <div className="title-service">
    <h3>Lâcher-prise & Gestion du stress</h3>
  </div>
  <div className="img-container">
    <img src={process.env.PUBLIC_URL + "/ballon.png"} alt="Nico"></img>
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
*/
