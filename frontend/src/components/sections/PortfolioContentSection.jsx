import "../../styles/sections/PortfolioContentSection.css";

function PortfolioContentSection({ tag, title, description, images = [] }) {
  return (
    <section className="portfolio-content-section">
      <div className="portfolio-content-section__inner">
        <div className="portfolio-content-section__heading">
          <p className="portfolio-content-section__tag">{tag}</p>
          <h2 className="portfolio-content-section__title">{title}</h2>
          {description && (
            <p className="portfolio-content-section__description">{description}</p>
          )}
        </div>

        <div className="portfolio-content-section__list">
          {images.map((img, index) => (
            <article key={index} className="portfolio-content-section__card">
              <div className="portfolio-content-section__media">
                <img src={img} alt="" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioContentSection;