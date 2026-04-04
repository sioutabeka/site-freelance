import "../../styles/sections/PortfolioCTASection.css";

function PortfolioCTASection() {
  return (
    <section className="portfolio-cta">
      <div className="portfolio-cta__inner">
        <p className="portfolio-cta__tag">LET’S WORK TOGETHER</p>

        <h2 className="portfolio-cta__title">
          Donnez vie à votre présence digitale
        </h2>

        <p className="portfolio-cta__text">
          Du contenu aux réseaux sociaux, en passant par la stratégie, je vous aide
          à construire une image de marque forte, cohérente et mémorable.
        </p>

        <a
          href="/about#work-with-me"
          className="portfolio-cta__button button button--olive"
        >
          START A PROJECT
        </a>
      </div>
    </section>
  );
}

export default PortfolioCTASection;