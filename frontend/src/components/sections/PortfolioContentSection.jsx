import "../../styles/sections/PortfolioContentSection.css";

function PortfolioContentSection({ tag, title, images }) {
  return (
    <section className="portfolio-content-section">
      <div className="portfolio-content-section__inner">
        <p className="portfolio-content-section__tag">{tag}</p>
        <h2 className="portfolio-content-section__title">{title}</h2>

        <div className="portfolio-content-section__gallery-wrap">
          <div className="portfolio-content-section__gallery">
            <div className="portfolio-content-section__track">
              {images.map((img, index) => (
                <div key={`first-${index}`} className="portfolio-content-section__item">
                  <img src={img} alt="" />
                </div>
              ))}
            </div>

            <div
              className="portfolio-content-section__track"
              aria-hidden="true"
            >
              {images.map((img, index) => (
                <div key={`second-${index}`} className="portfolio-content-section__item">
                  <img src={img} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioContentSection;