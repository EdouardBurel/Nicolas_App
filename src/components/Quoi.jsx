const ATELIERS = [
  {
    titre: "Stage de théâtre masqué",
    image: "/images/masque.jpg",
    description:
      "Masque plein et demi-masque : le corps raconte ce que le visage ne dit plus.",
  },
  {
    titre: "Initiation à la création de masque",
    image: "/images/creation-masque.jpg",
    description: "Fabriquer son propre masque, puis lui donner vie sur scène.",
  },
  {
    titre: "Full Concepts",
    image: "/images/concepts.jpg",
    description:
      "Des formats longs et immersifs : Étapes, Portraits, Témoin, Orages…",
  },
  {
    titre: "Jeux de rôles",
    image: "/images/jdr.jpg",
    description:
      "Enquêtes et histoires partagées où chacun incarne un personnage.",
  },
  {
    titre: "Stage d'éloquence",
    image: "/images/eloquence.jpg",
    description: "Voix, posture, présence : prendre la parole avec confiance.",
  },
  {
    titre: "Ateliers",
    image: "/images/ateliers.jpg",
    description:
      "Des séances régulières pour progresser ensemble, dans la bonne humeur.",
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
                  <p>{atelier.description}</p>
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
