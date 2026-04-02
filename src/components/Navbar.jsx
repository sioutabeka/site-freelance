import logo from "../assets/logo-osecom.png";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#" className="navbar__logo">
        <img src={logo} alt="Logo OseCom Freelance Siouta" />
      </a>

      <div className="navbar__menu-container">
  <a href="#" className="navbar__menu-link">
    <span>Shop</span>
    <span className="navbar__arrow">⌄</span>
  </a>

  <a href="#" className="navbar__menu-link">
    <span>Portfolio</span>
    <span className="navbar__arrow">⌄</span>
  </a>

  <a href="#" className="navbar__menu-link">
    <span>About</span>
  </a>

  <a href="#" className="navbar__menu-link">
    <span>Work With Me</span>
  </a>
</div>

      <button className="navbar__burger" aria-label="Ouvrir le menu">
        ☰
      </button>
    </nav>
  );
}

export default Navbar;