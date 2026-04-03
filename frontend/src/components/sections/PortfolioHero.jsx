import "../../styles/sections/PortfolioHero.css";

function PortfolioHero({ title }) {
  return (
    <section className="portfolio-hero">
      <div className="portfolio-hero__inner">
        <h1 className="portfolio-hero__title">{title}</h1>
      </div>
    </section>
  );
}

export default PortfolioHero;