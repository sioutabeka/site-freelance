import "../../styles/sections/AboutSection.css";

import { Link } from "react-router-dom";

function AboutSection() {
    return (
      <section className="about-section">
        <div className="about-section__inner">
  
          {/* IMAGE */}
          <div className="about-section__image">
            <img src="/about-img.png" alt="OseCom" />
          </div>
  
          {/* TEXTE */}
          <div className="about-section__content">
            <h2 className="about-section__title">Hello, moi c’est Essia</h2>
  
            <p className="about-section__subtitle">
            J’aide les marques à se démarquer sur les réseaux sociaux avec une approche à la fois stratégique et créative.
            </p>
  
            <p className="about-section__text">
            </p>
  
            <p className="about-section__text">
              Après plusieurs années en marketing digital, growth et acquisition, j’ai compris une chose :
              publier ne suffit plus ; il faut une stratégie claire et du contenu qui capte l’attention.
            </p>

            <p className="about-section__text">
              Aujourd’hui, j’accompagne des marques et des entrepreneurs à :
            </p>

            <div className="about-section__list">
              <span>→ Clarifier leur positionnement</span>
              <span>→ Créer du contenu impactant</span>
              <span>→ Transformer leur audience en clients</span>
            </div>
  
            <Link
              to="/about"
              className="about-section__button button button--blue"
            >
              WORK WITH ME
            </Link>

          </div>
  
        </div>
      </section>
    );
  }
  
  export default AboutSection;