import "../../styles/sections/AboutSection.css";

import { Link } from "react-router-dom";

function AboutSection() {
    return (
      <section className="about-section">
        <div className="about-section__inner">
  
          {/* IMAGE */}
          <div className="about-section__image">
            <img src="/about-img.png" alt="Cierra" />
          </div>
  
          {/* TEXTE */}
          <div className="about-section__content">
            <h2 className="about-section__title">Hi! I’m Cierra</h2>
  
            <p className="about-section__subtitle">
              I AM SO GLAD YOU'RE HERE!
            </p>
  
            <p className="about-section__text">
              With a background in graphic design, I’ve learned the best work doesn’t come from playing it safe — it comes from having a strong point of view and actually enjoying the process. I’m all about creating visuals that feel elevated, intentional, and still fun.
            </p>
  
            <p className="about-section__text">
              This space is a mix of everything I love working on! Design, content, and products all tied together through one cohesive creative vision. It’s where ideas come to life in a way that feels clean, thoughtful, and a little bit playful.
            </p>
  
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