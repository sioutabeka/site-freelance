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
          observer.unobserve(section); // 👈 important : déclenche une seule fois
        }
      },
      {
        threshold: 0.2, // un peu plus naturel que 0.15
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

        {/* LEFT CARD */}
        <article className="work-card work-card--left">
          <div className="work-card__image-placeholder"></div>

          <h3 className="work-card__title">Social Growth</h3>

          <p className="work-card__text">
          On structure votre contenu pour en faire un levier de croissance.
Stratégie, contenu, acquisition : Tout fonctionne ensemble ! </p>

          <Link
            to="/about#work-with-me"
            className="work-card__button button button--olive"
          >
            Voir les offres 
          </Link>
        </article>

        {/* CENTER */}
        <div className="work-section__center">
          <div className="work-section__badge">
            <img src={logoMark} alt="Logo OseCom" />
          </div>

          <p className="work-section__tag">SERVICES</p>

          <h2 className="work-section__title">
            Ways to Work with Me
          </h2>
        </div>

        {/* RIGHT CARD */}
        <article className="work-card work-card--right">
          <div className="work-card__image-placeholder"></div>

          <h3 className="work-card__title">
          UGC CONTENT</h3>

          <p className="work-card__text">
          Des contenus pensés pour capter l’attention et rester en tête.
Storytelling, direct, créatif ou proof.             </p>

          <a
            href="mailto:hello@example.com"
            className="work-card__button button button--olive"
          >
            Créer du contenu
          </a>
        </article>

      </div>
    </section>
  );
}

export default WorkSection;