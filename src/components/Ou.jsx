export default function Ou() {
  return (
    <section id="contact">
      <div className="contenu">
        <h2 className="marqueur marqueur--droite">OÙ&nbsp;?</h2>

        <div className="ou__grille">
          <div className="contact">
            <h2>Contact</h2>
            <p>
              <a href="mailto:nicolaspieri35@gmail.com">
                nicolaspieri35@gmail.com
              </a>
            </p>
            <p>
              <a href="tel:+33621164465">06 21 16 44 65</a>
            </p>
            <p>Périgord — Dordogne</p>
          </div>

          <div>
            {/* Replace with your France/Périgord map image */}
            <img
              className="ou__carte"
              src="/images/carte.png"
              alt="Carte de France situant le Périgord"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
