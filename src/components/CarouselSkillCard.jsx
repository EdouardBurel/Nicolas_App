import React from "react";

export default function CarouselSkillCard({ image, title, description }) {
  return (
    <div>
      <div className="title-service">
        <h3>{title}</h3>
      </div>
      <div className="img-container">
        <img className="concept-image" src={image} alt={title} />
      </div>
      <div className="title-responsive">
        <h3>Jeu de rôle</h3>
      </div>
      <div className="hover-text">
        {description.map((desc, index) => (
          <p style={{ margin: "5px 0" }} key={index}>{desc}</p>
        ))}
      </div>
    </div>
  );
}
