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
          <img src="/about-img.png" alt="OseCom" />
        </div>

        <div className="about-section__content">
          <h2 className="about-section__title">Hello, moi c’est Essia</h2>

          <p className="about-section__subtitle">
            Je ne crée pas du contenu pour remplir un feed. Je crée du contenu qui sert votre business.
          </p>

          <p className="about-section__text">
            Après plusieurs années en marketing digital, growth et acquisition, j’ai constaté un problème simple :
            Beaucoup de marques sont visibles… mais peu transforment réellement cette visibilité en clients.
          </p>

          <p className="about-section__text">
            Aujourd’hui, j’accompagne les entreprises à :
          </p>

          <div className="about-section__list">
            <span>→ Clarifier leur positionnement</span>
            <span>→ Structurer leur contenu</span>
            <span>→ Transformer une audience en opportunités</span>
          </div>

          <Link
            to="/about"
            className="about-section__button button button--blue"
          >
            Travailler ensemble
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;