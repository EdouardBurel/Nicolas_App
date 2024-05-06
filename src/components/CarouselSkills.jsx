import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselSkillCard from "./CarouselSkillCard";
import { SERVICE_CARD } from "../data";
import "./Services.css";

export default function CarouselSkills() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 2000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 2000, min: 1000 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 700, min: 400 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 300, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="service" id="section-1">
      <h2>Services</h2>
      <Carousel responsive={responsive} infinite={true} >
        {SERVICE_CARD.map((conceptItem) => (
          <CarouselSkillCard key={conceptItem.title} {...conceptItem} />
        ))}
      </Carousel>
    </section>
  );
}