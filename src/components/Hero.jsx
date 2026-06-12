export default function Hero() {
  return (
    <section className="hero">
      <div className="contenu">
        <div className="hero__photo">
          <h1>
            L'expression de soi,
            <br />
            par
            <br />
            <em>l'improvisation théâtrale</em>
          </h1>
          <img
            src="/images/hero.jpg"
            alt="Spectacle de théâtre masqué avec musiciens"
          />
          <img className="hero__logo" src="/images/logo.png" alt="" />
        </div>

        <p>
          Accepter de lâcher prise pour libérer notre esprit et notre
          personnalité est une démarche précieuse. Grâce à divers stages et
          ateliers, nous aurons l'opportunité de mettre en lumière les talents
          qui nous sont propres, puis de les fusionner au sein d'une entité
          sublimée par l'improvisation théâtrale.
        </p>
      </div>
    </section>
  );
}
