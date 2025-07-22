const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-container">
          <img
            src="/src/assets/images/Logo.webp"
            alt="Logo BIOM MULCHING"
            className="logo"
          />
        </div>
        <div className="header-text">
          <h1>BIOM MULCHING</h1>
          <p>Here goes the slogan</p>
        </div>
        <nav className="header-nav">
          <a href="#servicios" className="nav-link">
            Servicios
          </a>
          <a href="#nosotros" className="nav-link">
            Nosotros
          </a>
          <a href="#contacto" className="nav-link">
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
