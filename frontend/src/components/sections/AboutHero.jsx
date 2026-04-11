import aboutHeroImage from "../../assets/about-hero.jpg";
import "../../styles/sections/AboutHero.css";
import { Link } from "react-router-dom";

function AboutHero() {
  return (
    <section className="about-hero">
      <div className="about-hero__content">
        <p className="about-hero__tag">
          HI, moi c’est Essia
        </p>

        <h1 className="about-hero__title">
          I help brands grow through content
        </h1>

        <p className="about-hero__description">
          J’aide les marques à développer leur présence en ligne grâce à une stratégie claire et du contenu qui capte vraiment l’attention.
        </p>

        <Link
          to="/about#work-with-me"
          className="about-hero__button"
        >
          WORK WITH ME
        </Link>
      </div>

      {/* 🔥 WRAPPER AJOUTÉ (clé du fix) */}
      <div className="about-hero__image-wrapper">
        <div className="about-hero__image">
          <img
            src={aboutHeroImage}
            alt="Portrait d’Essia"
          />
          <p className="about-hero__caption">Meet Essia</p>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;