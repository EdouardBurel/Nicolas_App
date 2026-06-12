export default function Header() {
  return (
    <header className="entete">
      <div className="entete__barre">
        <a href="#" className="entete__nom">
          <img className="entete__logo" src="/images/logo.png" alt="" />
          Nicolas Pieri
        </a>
        <nav className="entete__nav" aria-label="Navigation principale">
          <a href="#qui">À propos</a>
          <a href="#quoi">Mes services</a>
          <a href="#contact">Me contacter</a>
        </nav>
      </div>
    </header>
  );
}
