import "../../styles/sections/WorkSection.css";
import logoMark from "../../assets/logo-mark.png";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

function WorkSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`work-section ${isVisible ? "work-section--visible" : ""}`}
    >
      <div className="work-section__inner">
        <article className="work-card work-card--left">
          <div className="work-card__image-placeholder"></div>

          <h3 className="work-card__title">Social Growth</h3>

          <p className="work-card__text">
            Une approche stratégique pour transformer votre contenu en levier de
            croissance. Positionnement, contenu, conversion : tout fonctionne
            ensemble.
          </p>

          <Link
            to="/social-growth"
            className="work-card__button button button--olive"
          >
            Trouver l’offre adaptée
          </Link>
        </article>

        <div className="work-section__center">
          <div className="work-section__badge">
            <img src={logoMark} alt="Logo OseCom" />
          </div>

          <p className="work-section__tag">WORK WITH OSECOM</p>

          <h2 className="work-section__title">
            Ways to work with me
          </h2>
          
        </div>

        <article className="work-card work-card--right">
          <div className="work-card__image-placeholder"></div>

          <h3 className="work-card__title">UGC Portfolio</h3>

          <p className="work-card__text">
            Des contenus pensés pour capter l’attention, incarner votre marque
            et performer sur les plateformes. Explorez les formats déjà
            réalisés.
          </p>

          <Link
            to="/portfolio"
            className="work-card__button button button--olive"
          >
            Consulter le portfolio
          </Link>
        </article>
      </div>
    </section>
  );
}

export default WorkSection;