import { useRef } from "react";
import "../../styles/sections/PortfolioContentSection.css";

function PortfolioContentSection({ tag, title, images }) {
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
    <section className="portfolio-content-section">
      <div className="portfolio-content-section__inner">

        <p className="portfolio-content-section__tag">{tag}</p>
        <h2 className="portfolio-content-section__title">{title}</h2>

        <div className="portfolio-content-section__gallery-wrap">
          <div ref={galleryRef} className="portfolio-content-section__gallery">

            {images.map((img, index) => (
              <div key={index} className="portfolio-content-section__item">
                <img src={img} alt="" />
              </div>
            ))}

          </div>

          <button
            className="portfolio-content-section__arrow"
            onClick={scrollGallery}
          >
            ‹
          </button>
        </div>

        <div className="portfolio-content-section__pagination">
          <span className="dot active"></span>
          <span className="dot"></span>
        </div>

      </div>
    </section>
  );
}

export default PortfolioContentSection;