import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-osecom.png";
import "../../styles/layout/NavBar.css";


function Navbar({ mode = "default" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setIsPortfolioOpen(false);
  };

  const togglePortfolioMenu = () => {
    setIsPortfolioOpen(!isPortfolioOpen);
  };

  return (
    <nav className={`navbar navbar--${mode} ${isOpen ? "navbar--open" : ""}`}>
      <div className="navbar__top">
        <Link to="/" className="navbar__logo" onClick={closeMenu}>
          <img src={logo} alt="Logo OseCom Freelance Siouta" />
        </Link>

        <button
          className="navbar__burger"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={toggleMenu}
        >
          {isOpen ? "×" : "☰"}
        </button>

        <div className="navbar__menu-container">

        <Link to="/" className="navbar__menu-link">
            <span>Home</span>
          </Link>

          <div className="navbar__dropdown">
            <button
              type="button"
              className="navbar__menu-link navbar__dropdown-trigger"
              onClick={togglePortfolioMenu}
              aria-expanded={isPortfolioOpen}
            >
              <span>Portfolio</span>
              <span className="navbar__arrow">⌄</span>
            </button>

            <div
              className={`navbar__dropdown-menu ${
                isPortfolioOpen ? "navbar__dropdown-menu--open" : ""
              }`}
            >
              <Link
                to="/portfolio/design"
                className="navbar__dropdown-link"
                onClick={closeMenu}
              >
                <span className="navbar__flower navbar__flower--olive">✿</span>
                <span>Design</span>
              </Link>

              <Link
                to="/portfolio/content"
                className="navbar__dropdown-link"
                onClick={closeMenu}
              >
                <span className="navbar__flower navbar__flower--pink">✿</span>
                <span>Content</span>
              </Link>
            </div>
          </div>

          <Link to="/about" className="navbar__menu-link">
            <span>About</span>
          </Link>

          <Link to="/about#work-with-me" className="navbar__menu-link">
            <span>Work With Me</span>
          </Link>
        </div>
      </div>

      <div
        className={`navbar__mobile-menu ${
          isOpen ? "navbar__mobile-menu--open" : ""
        }`}
      >
        <Link to="/" className="navbar__mobile-link" onClick={closeMenu}>
          <span>Home</span>
        </Link>

        <div className="navbar__mobile-dropdown">
  <button
    type="button"
    className="navbar__mobile-link navbar__mobile-dropdown-trigger"
    onClick={togglePortfolioMenu}
    aria-expanded={isPortfolioOpen}
  >
    <span>Portfolio</span>
    <span className="navbar__arrow">⌄</span>
  </button>

  {isPortfolioOpen && (
    <div className="navbar__mobile-submenu">
    <Link
  to="/portfolio/design"
  className="navbar__mobile-sublink"
  onClick={closeMenu}
>
  <span className="navbar__flower navbar__flower--olive">✿</span>
  <span>Design</span>
</Link>

<Link
  to="/portfolio/content"
  className="navbar__mobile-sublink"
  onClick={closeMenu}
>
  <span className="navbar__flower navbar__flower--pink">✿</span>
  <span>Content</span>
</Link>
    </div>
  )}
</div>

        <Link to="/about" className="navbar__mobile-link" onClick={closeMenu}>
          <span>About</span>
        </Link>

        <Link to="/about#work-with-me" className="navbar__mobile-link" onClick={closeMenu}>
          <span>Work With Me</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;