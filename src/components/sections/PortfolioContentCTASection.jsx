import "../../styles/sections/PortfolioContentCTASection.css";
import logoMark from "../../assets/logo-mark.png";

function PortfolioContentCTASection() {
  return (
    <section className="portfolio-content-cta-section">
      <div className="portfolio-content-cta-section__inner">
      <img
  src={logoMark}
  alt="Logo"
  className="portfolio-content-cta-section__logo"
/>

        <p className="portfolio-content-cta-section__tag">
          LET&apos;S WORK TOGETHER
        </p>

        <h2 className="portfolio-content-cta-section__title">
          Are you a brand looking to partner?
        </h2>

        <a
        href="mailto:tonemail@gmail.com"
        className="portfolio-content-cta-section__button button button--olive"
      >
        CONTACT ME
      </a>


      </div>
    </section>
  );
}

export default PortfolioContentCTASection;