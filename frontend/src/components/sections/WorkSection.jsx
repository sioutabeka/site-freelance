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
        <div className="work-section__center">
          <div className="work-section__badge">
            <img src={logoMark} alt="Logo Osecom" />
          </div>

          <p className="work-section__tag">OFFRE SIGNATURE</p>

          <h2 className="work-section__title">
            Community Management Stratégique
          </h2>

          <p className="work-section__intro">
            Une offre pensée pour déléguer vos réseaux sociaux avec exigence.
          </p>
        </div>

        <div className="work-section__grid">
          <article className="work-card">
            <h3 className="work-card__title">Stratégie</h3>
            <p className="work-card__text">
              Benchmark, positionnement, ligne éditoriale et direction visuelle.
            </p>
          </article>

          <article className="work-card">
            <h3 className="work-card__title">Pilotage éditorial</h3>
            <p className="work-card__text">
              Calendrier, formats, rythme et organisation des prises de parole.
            </p>
          </article>

          <article className="work-card">
            <h3 className="work-card__title">Animation & modération</h3>
            <p className="work-card__text">
              Publication, gestion des interactions et engagement des communautés.
            </p>
          </article>

          <article className="work-card">
            <h3 className="work-card__title">Visibilité & performance</h3>
            <p className="work-card__text">
              Boosts, campagnes paid, suivi des résultats et optimisation.
            </p>
          </article>
        </div>

        <div className="work-section__cta">
          <Link
            to="/about#work-with-me"
            className="button button--lg button--primary"                      >
            Parler de votre projet
          </Link>
        </div>
      </div>
    </section>
  );
}

export default WorkSection;