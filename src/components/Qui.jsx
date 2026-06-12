export default function Qui() {
  return (
    <section id="qui">
      <div className="contenu">
        <h2 className="marqueur marqueur--droite">QUI&nbsp;?</h2>

        <div className="qui__grille">
          <div className="qui__texte">
            <p>
              Je m'appelle <strong>Nicolas</strong>, et en 2009, j'ai entamé
              mon voyage dans le monde de l'improvisation théâtrale. Depuis
              lors, je n'ai jamais renoncé à cette passion, cherchant
              constamment à apprendre des autres.
            </p>
            <p>
              Chaque individu est unique. Là où certains voient simplement de
              l'eau, d'autres perçoivent l'océan, voire même H²O. Pour moi, la
              magie de l'improvisation réside dans la puissance de la
              collaboration entre plusieurs esprits. Les différences entre
              nous sont en réalité une source de complémentarité.
            </p>
            <p>
              <strong>Fondateur de la troupe des Chats Teignes de Sarlat</strong>,
              et intervenant dans différentes compagnies en Dordogne (Al
              Tropo, LID, H2J, Keruzha, Duo Justeàdeux…). Créateur et metteur
              en scène des concepts « Étapes », « Portraits », « Témoin » et
              « Orages ».
            </p>
            <p>
              En 2023 je rejoins la Ligue d'Improvisation de Dordogne sur
              Périgueux et assiste à un atelier coup de cœur sur le théâtre
              masqué. Depuis, je travaille énormément le masque plein et le
              demi-masque en créant des formats lyriques en partie inspirés
              par la bande dessinée et le cinéma.
            </p>
            <p>
              Mon objectif est de partager ma passion pour l'improvisation et
              d'encourager d'autres personnes à explorer leurs propres talents
              et à s'épanouir dans cet univers fascinant.
            </p>
          </div>

          <figure className="qui__photo">
            {/* Replace with your cabaret photo */}
            <img
              src="/images/cabaret.jpg"
              alt="Nicolas en discussion lors d'un cabaret d'improvisation"
            />
            <figcaption className="qui__legende">
              Cabaret au sein de la LID au Co'Thé Vintage — 2023
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
