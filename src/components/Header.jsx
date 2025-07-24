import logo from "../assets/images/Logo.webp"; 

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-container">
          <img
            src={logo}
            alt="Logo BIOM MULCHING"
            className="logo"
          />
        </div>
        <div className="header-text">
          <h1>BIOM MULCHING</h1>
          <p>Protect your crop, boost your harvest</p>
        </div>
        <nav className="header-nav">
          <a href="#servicios" className="nav-link">
            Services
          </a>
          <a href="#nosotros" className="nav-link">
            About Us
          </a>
          <a href="#contacto" className="nav-link">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
