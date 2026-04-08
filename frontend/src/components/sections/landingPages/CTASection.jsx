import { Link } from "react-router-dom";

const CTASection = ({
  title,
  subtitle,
  forWho,
  notForWho,
  credibility,
  primaryCta,
  secondaryCta,
}) => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2>{title}</h2>

        {subtitle && <p className="cta-subtitle">{subtitle}</p>}

        <div className="cta-fit">
          <div>
            <h3>Pour qui</h3>
            {forWho.map((item, index) => (
              <p key={index}>✔ {item}</p>
            ))}
          </div>

          <div>
            <h3>Pas pour vous si</h3>
            {notForWho.map((item, index) => (
              <p key={index}>✖ {item}</p>
            ))}
          </div>
        </div>

        {credibility && (
          <div className="cta-credibility">
            <h3>Pourquoi moi</h3>
            {credibility.map((item, index) => (
              <p key={index}>👉 {item}</p>
            ))}
          </div>
        )}

        <div className="cta-buttons">
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

export default CTASection;