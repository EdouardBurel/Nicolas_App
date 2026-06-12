import { useEffect } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Qui from "./components/Qui.jsx";
import Quoi from "./components/Quoi.jsx";
import Valeurs from "./components/Valeurs.jsx";
import Ou from "./components/Ou.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal--visible");
            observer.unobserve(entry.target); // animate once, then leave it
          }
        });
      },
      { threshold: 0.15 }, // triggers when 15% of the element is visible
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="fond-scene" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <Qui />
        <Quoi />
        <Valeurs />
        <Ou />
      </main>
      <Footer />
    </>
  );
}
