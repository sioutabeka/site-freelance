import { Link } from "react-router-dom";
import "../../styles/sections/Hero.css";
import heroImage from "../../assets/hero-test.jpg";
import heroImageTest from "../../assets/hero-ciarra.png";
import heroImageMobile from "../../assets/hero-mobile.jpg";


function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <p className="hero__tag">
        Experte Social Media & Stratégie Digitale à Paris
        </p>

        <h1 className="hero__title">
        Transformez vos réseaux sociaux en véritable levier de clients.        </h1>

        <p className="hero__description">
        Je vous aide à structurer votre présence, créer du contenu efficace et gagner en visibilité sans y passer des heures.        </p>

        <Link to="/about#work-with-me" className="hero__button button button--blue">
        Prendre rendez-vous
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

    </section>
  );
}

export default Hero;