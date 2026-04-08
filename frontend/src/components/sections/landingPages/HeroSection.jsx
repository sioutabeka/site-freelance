import { Link } from "react-router-dom";
import "./HeroSection.css";

const HeroSection = ({
  title,
  lines,
  description,
  primaryCta,
  secondaryCta,
}) => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <h1>{title}</h1>

        <div className="hero-lines">
          {lines.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>

        <p className="hero-description">{description}</p>

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
    </section>
  );
};

export default HeroSection;