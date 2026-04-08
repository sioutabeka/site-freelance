import aboutHeroImage from "../../assets/about-hero.jpg";
import "../../styles/sections/AboutHero.css";

import { Link } from "react-router-dom";


function AboutHero() {
  return (
    <section className="about-hero">
      <div className="about-hero__content">
        <p className="about-hero__tag">HI, moi c’est Essia
        </p>

        <h1 className="about-hero__title">
        I help brands grow through content </h1>

        <p className="about-hero__description">
        J’aide les marques à développer leur présence en ligne grâce à une stratégie claire et du contenu qui capte vraiment l’attention.
        </p>

        <Link
          to="/about#work-with-me"
          className="about-hero__button button button--pink"
        >
          WORK WITH ME
        </Link>

      </div>

      <div className="about-hero__image">
        <img
          src={aboutHeroImage}
          alt="Portrait de Cierra Miller avec une boisson et des documents"
        />
        <p className="about-hero__caption">Meet Cierra</p>
      </div>
    </section>
  );
}

export default AboutHero;