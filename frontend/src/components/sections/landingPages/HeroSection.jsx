import { Link } from "react-router-dom";
import "./HeroSection.css";

const HeroSection = ({
  eyebrow,
  title,
  intro,
  text,
  highlight,
  primaryCta,
  secondaryCta,
  image,
  imageAlt,
}) => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          {eyebrow && <p className="hero-eyebrow">{eyebrow}</p>}
          <h1>{title}</h1>
          {intro && <p className="hero-intro">{intro}</p>}
          {text && <p className="hero-text">{text}</p>}
          {highlight && <p className="hero-highlight">{highlight}</p>}

          <div className="hero-cta">
            <Link to={primaryCta.link} className="btn-primary">
              {primaryCta.label}
            </Link>

            {secondaryCta && (
              <Link to={secondaryCta.link} className="btn-secondary">
                {secondaryCta.label}
              </Link>
            )}
          </div>
        </div>

        {image && (
          <div className="hero-visual">
            <img src={image} alt={imageAlt || title} />
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;