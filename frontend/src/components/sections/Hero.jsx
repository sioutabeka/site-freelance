import { Link } from "react-router-dom";
import "../../styles/sections/Hero.css";
import heroImage from "../../assets/hero-test.jpg";
import heroImageTest from "../../assets/hero-ciarra.png";
import heroImageMobile from "../../assets/hero-mobile.jpg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__inner">
        <div className="hero__content">
          <p className="hero__tag">
            Experte Social Media & Stratégie Digitale à Paris
          </p>

          <h1 className="hero__title">
          Transformez votre contenu en clients.
          </h1>

          <p className="hero__description">
          Je structure votre présence digitale pour attirer les bonnes personnes, renforcer votre crédibilité et générer des opportunités concrètes.
          </p>

          <Link
            to="/about#work-with-me"
            className="hero__button button button--blue"> Réserver un appel 
          </Link>
        </div>

        <div className="hero__image">
          <img
            src={heroImageTest}
            alt="Experte en stratégie digitale et community management à Paris"
            className="hero__img hero__img--desktop"
          />

          <img
            src={heroImageMobile}
            alt="Experte en stratégie digitale et community management à Paris"
            className="hero__img hero__img--mobile"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;