const VALEURS = [
  "L'esprit d'équipe, la cohésion, la construction collective.",
  "Le lâcher prise et la gestion du stress.",
  "L'élocution, l'écoute de soi comme de l'autre, le développement de la voix.",
  "La confiance envers les autres.",
  "La communication non verbale par la gestuelle, les postures et les expressions.",
  "L'exploration de l'imaginaire personnel et collectif.",
  "La maîtrise de l'espace et la compréhension des fondamentaux du théâtre.",
];

export default function Valeurs() {
  return (
    <section className="valeurs">
      <div className="contenu">
        <h2 className="reveal">
          L'improvisation, sous toutes ces formes, c'est&nbsp;:
        </h2>
        <ul className="reveal">
          {VALEURS.map((valeur) => (
            <li key={valeur}>{valeur}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
