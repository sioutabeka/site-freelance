import { useRef } from "react";
import "../../styles/sections/PortfolioSection.css";

function PortfolioSection({ tag, title, description, images }) {
  const galleryRef = useRef(null);

  const scrollGallery = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({
        left: galleryRef.current.clientWidth * 0.7,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="portfolio-section">
      <div className="portfolio-section__top">
        <div className="portfolio-section__heading">
          <p className="portfolio-section__tag">{tag}</p>
          <h2 className="portfolio-section__title">{title}</h2>
        </div>

        <div className="portfolio-section__text">
          <p className="portfolio-section__description">{description}</p>
        </div>
      </div>

      <div className="portfolio-section__gallery-wrap">
        <div ref={galleryRef} className="portfolio-section__grid">
          {images.map((img, index) => (
            <div key={index} className="portfolio-section__item">
              <img src={img} alt={`${title} project ${index + 1}`} />
            </div>
          ))}
        </div>

        <button
          type="button"
          className="portfolio-section__arrow"
          onClick={scrollGallery}
          aria-label="Voir plus de projets"
        >
          ›
        </button>
      </div>

      <div className="portfolio-section__pagination" aria-hidden="true">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </section>
  );
}

export default PortfolioSection;