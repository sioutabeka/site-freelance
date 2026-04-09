import { Link } from "react-router-dom";
import "./CTASection.css";

const CTASection = ({
  title,
  text,
  forWho,
  notForWho,
  primaryCta,
  secondaryCta,
}) => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-card reveal-up">
          <div className="cta-header">
            <span className="cta-flower">✿</span>
            <h2>{title}</h2>
            {text && <p className="cta-text">{text}</p>}
          </div>

          <div className="cta-grid">
            {forWho && (
              <div className="cta-block cta-block-positive">
                <h3>Pour qui c’est</h3>
                <p>{forWho}</p>
              </div>
            )}

            {notForWho && (
              <div className="cta-block cta-block-negative">
                <h3>Pas pour toi si</h3>
                <p>{notForWho}</p>
              </div>
            )}
          </div>

          <div className="cta-actions">
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
      </div>
    </section>
  );
};

export default CTASection;