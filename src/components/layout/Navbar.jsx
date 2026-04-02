import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-osecom.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${isOpen ? "navbar--open" : ""}`}>

      <div className="navbar__top">
        
        {/* LOGO */}
        <Link to="/" className="navbar__logo" onClick={closeMenu}>
          <img src={logo} alt="Logo OseCom Freelance Siouta" />
        </Link>

        {/* BURGER */}
        <button
          className="navbar__burger"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={toggleMenu}
        >
          {isOpen ? "×" : "☰"}
        </button>

        {/* MENU DESKTOP */}
        <div className="navbar__menu-container">

          <Link to="/shop" className="navbar__menu-link">
            <span>Shop</span>
            <span className="navbar__arrow">⌄</span>
          </Link>

          <Link to="/portfolio" className="navbar__menu-link">
            <span>Portfolio</span>
            <span className="navbar__arrow">⌄</span>
          </Link>

          <Link to="/about" className="navbar__menu-link">
            <span>About</span>
          </Link>

          <Link to="/contact" className="navbar__menu-link">
            <span>Work With Me</span>
          </Link>

        </div>
      </div>

      {/* MENU MOBILE */}
      <div
        className={`navbar__mobile-menu ${
          isOpen ? "navbar__mobile-menu--open" : ""
        }`}
      >

        <Link to="/shop" className="navbar__mobile-link" onClick={closeMenu}>
          <span>Shop</span>
          <span className="navbar__arrow">⌄</span>
        </Link>

        <Link to="/portfolio" className="navbar__mobile-link" onClick={closeMenu}>
          <span>Portfolio</span>
          <span className="navbar__arrow">⌄</span>
        </Link>

        <Link to="/about" className="navbar__mobile-link" onClick={closeMenu}>
          <span>About</span>
        </Link>

        <Link to="/contact" className="navbar__mobile-link" onClick={closeMenu}>
          <span>Work With Me</span>
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;