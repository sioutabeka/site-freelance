import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo-osecom.png";
import "../../styles/layout/NavBar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const pathname = location.pathname;

  const navbarVariant =
    pathname === "/"
      ? "navbar--home"
      : pathname === "/about"
      ? "navbar--about"
      : pathname === "/portfolio/design"
      ? "navbar--portfolio-design"
      : pathname === "/portfolio/content"
      ? "navbar--portfolio-content"
      : "navbar--default";

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${navbarVariant} ${isOpen ? "navbar--open" : ""}`}>
      
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

        {/* DESKTOP MENU */}
        <div className="navbar__menu-container">

          <Link
            to="/social-growth"
            className="navbar__menu-link"
            onClick={closeMenu}
          >
            <span>Social Growth</span>
          </Link>

          <Link
            to="/portfolio/content"
            className="navbar__menu-link"
            onClick={closeMenu}
          >
            <span>UGC</span>
          </Link>

          <Link
            to="/about"
            className="navbar__menu-link"
            onClick={closeMenu}
          >
            <span>About</span>
          </Link>

          <Link
            to="/about#work-with-me"
            className="navbar__menu-link"
            onClick={closeMenu}
          >
            <span>Work With Me</span>
          </Link>

        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`navbar__mobile-menu ${
          isOpen ? "navbar__mobile-menu--open" : ""
        }`}
      >

        <Link
          to="/social-growth"
          className="navbar__mobile-link"
          onClick={closeMenu}
        >
          <span>Social Growth</span>
        </Link>

        <Link
          to="/portfolio/content"
          className="navbar__mobile-link"
          onClick={closeMenu}
        >
          <span>UGC</span>
        </Link>

        <Link
          to="/about"
          className="navbar__mobile-link"
          onClick={closeMenu}
        >
          <span>About</span>
        </Link>

        <Link
          to="/about#work-with-me"
          className="navbar__mobile-link"
          onClick={closeMenu}
        >
          <span>Work With Me</span>
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;