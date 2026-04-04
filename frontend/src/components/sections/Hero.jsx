import { Link } from "react-router-dom";
import "../../styles/sections/Hero.css";
import heroImage from "../../assets/hero-test.jpg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <p className="hero__tag">
        Freelance en Community Management, UGC & Stratégie Digitale à Paris
        </p>

        <h1 className="hero__title">
        Je transforme votre présence en ligne en levier de croissance grâce à du contenu engageant et une stratégie digitale performante.
        </h1>

        <p className="hero__description">
        Création de contenu UGC, gestion des réseaux sociaux et accompagnement stratégique pour les marques ambitieuses.
        </p>

        <Link to="/about#work-with-me" className="hero__button button button--blue">
          WORK WITH ME
        </Link>
      </div>

      <div className="hero__image">
        <img src={heroImage} alt="Hero" />
      </div>
    </section>
  );
}

export default Hero;