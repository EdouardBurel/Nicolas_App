import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Qui from "./components/Qui.jsx";
import Quoi from "./components/Quoi.jsx";
import Valeurs from "./components/Valeurs.jsx";
import Ou from "./components/Ou.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      {/* The constant theater background, fixed behind everything */}
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
