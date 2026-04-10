import "../../styles/sections/AboutSection.css";
import { Link } from "react-router-dom";

function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-section__bg">
        <span className="about-section__orb about-section__orb--pink"></span>
        <span className="about-section__orb about-section__orb--blue"></span>
        <span className="about-section__grid"></span>
      </div>

      <div className="about-section__inner">
        <div className="about-section__image">
          <img src="/about-img.png" alt="Essia, fondatrice d'OseCom" />
        </div>

        <div className="about-section__content">
          <h2 className="about-section__title">
            Derrière{" "}
            <span className="about-section__title-brand">OseCom</span>
          </h2>

          <p className="about-section__subtitle">
            Je suis créatrice et stratège social media basée à Paris.
          </p>

          <p className="about-section__text">
            J’aide les marques à construire une présence plus forte, plus cohérente et plus impactante.
          </p>

          <p className="about-section__text">
            OseCom est né d’une conviction simple :
            ce qui fonctionne, c’est l’alignement entre stratégie, contenu et constance.
          </p>

          <div className="about-section__list">
            <span>Une vision claire</span>
            <span>Un contenu pensé pour votre image</span>
            <span>Une présence structurée pour performer</span>
          </div>

          <Link
            to="/about"
            className="button button--lg button--secondary"          >
            Découvrir mon approche
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;