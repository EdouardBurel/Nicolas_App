const ATELIERS = [
  {
    titre: "Stage 'Masques'",
    image: "/images/masque.jpg",
    description: [
      "Sur deux journées, explorez une approche de l'improvisation avec le masque plein puis le demi-masque. Découvrez les personnages qui vivent en vous et laissez-vous porter par leur regard dans un univers riche de partage et de rencontres... parfois burlesque !",
    ],
  },
  {
    titre: "Initiation à la création de masque",
    image: "/images/creation-masque.jpg",
    description: [
      "Sur une ou deux journées, apprenez à créer votre masque avec Emilie V. et donnez-leur vie à travers des mises en situation et des jeux d'improvisation.",
    ],
  },
  {
    titre: "Full Concepts",
    image: "/images/concepts.jpg",
    description: [
      "En l'espace d'un week-end, découvrez différents univers à travers des improvisations longues : tantôt proches du jeu de rôle grandeur nature, tantôt immergées dans l'ambiance d'un film aux enjeux stratégiques. Approfondissez les relations entre les personnages et enrichissez leur construction. Écrivez votre propre histoire !",
    ],
  },
  {
    titre: "Jeux de rôles",
    image: "/images/jdr.jpg",
    description: [
      "Création d'un jeu de rôle sur table fait sur mesure",
      "Compter un mois, préavis à faire ensemble par téléphone.",
      "Création de jeux de pistes et de Murder Party",
    ],
  },
  {
    titre: "Stage d'Éloquence",
    image: "/images/eloquence.jpg",
    description: [
      "Structurer sa parole avec clarté",
      "Développer sa spontanéité",
      "Travailler l'impact vocal et corporel",
      "Gagner en confiance à l'oral",
    ],
  },
  {
    titre: "Ateliers",
    image: "/images/ateliers.jpg",
    description: [
      "En fonction des groupes, ateliers sur mesure d'au moins 2h.",
      "Ponctuels ou hebdomadaires (à voir en fonction des disponibilités)",
    ],
  },
];

export default function Quoi() {
  return (
    <section id="quoi">
      <div className="contenu">
        <h2 className="marqueur reveal">QUOI&nbsp;?</h2>
        <p className="quoi__intro reveal">
          Animation d'ateliers et de stages à thématique
        </p>

        <div className="cartes">
          {ATELIERS.map((atelier) => (
            <article className="carte reveal" key={atelier.titre} tabIndex={0}>
              <div className="carte__cadre">
                <img src={atelier.image} alt={atelier.titre} />
                <div className="carte__voile">
                  <ul className="carte__liste">
                    {atelier.description.map((ligne, idx) => (
                      <li key={idx}>{ligne}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <h3>{atelier.titre}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
