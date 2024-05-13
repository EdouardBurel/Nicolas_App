import React from "react";
import "./Main.css";

function Main() {
  return (
    <div className="about-me-container">
      <div className="main-container" id="section-2">
        <div className="main-description-container">
          <h2>A propos</h2>
          <span className="section-1">
            Accepter de lâcher prise pour libérer notre esprit et notre
            personnalité est une démarche précieuse. Grâce à divers ateliers,
            nous avons l'opportunité de mettre en lumière les talents qui nous
            sont propres, puis de les fusionner au sein d'une entité sublimée
            par l'improvisation théâtrale.
          </span>
          <span>
            Je m'appelle Nicolas, et en 2009, j'ai entamé mon
            voyage dans le monde de l'improvisation théâtrale. Depuis lors, je
            n'ai jamais renoncé à cette passion, cherchant constamment à
            apprendre des autres.
          </span>
          <br></br>
          <span>
            Chaque individu est unique. Là où certains voient simplement de
            l'eau, d'autres perçoivent l'océan, voire même H²O. Pour moi, la
            magie de l'improvisation réside dans la puissance de la
            collaboration entre plusieurs esprits. Les différences entre nous
            sont en réalité une source de complémentarité.
          </span>
          <br></br>
          <span>
            Mon parcours académique, qui inclut des études en psychologie, en
            art du spectacle et en management des unités commerciales, s'est
            enrichi de diverses expériences professionnelles (en tant que
            démonstrateur, créateur de publicités, agent d'entretien, barman,
            entre autres). Chaque expérience, quelle qu'elle soit, m'a permis de
            développer des qualités relationnelles et des compétences techniques
            qui se sont révélées être de véritables atouts dans le domaine de
            l'improvisation. À force de persévérance, j'ai fini par devenir
            professeur d'improvisation théâtrale. Je dispense des cours et anime
            des ateliers qui peuvent suivre une chronologie évolutive ou être
            divisés en plusieurs modules distincts.
          </span>
          <p>
            Mon objectif est de partager ma passion pour l'improvisation et
            d'encourager d'autres personnes à explorer leurs propres talents et
            à s'épanouir dans cet univers fascinant.
          </p>
        </div>
        <div className="picProfil">
          <img src={process.env.PUBLIC_URL + "/nico.jpg"} alt="Nico"></img>
          <h6>Impro au Sillon de Petit-Couronne au sein du STEACFRIT</h6>
        </div>
      </div>
    </div>
  );
}

export default Main;
