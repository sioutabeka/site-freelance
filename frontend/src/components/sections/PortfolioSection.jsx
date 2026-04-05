import { useEffect, useRef, useState } from "react";
import "../../styles/sections/PortfolioSection.css";

function PortfolioSection({
  tag = "Selected work",
  title = "A few ways I create impact for brands",
  description = "",
  images = [],
}) {
  const safeImages = Array.isArray(images) ? images.filter(Boolean) : [];
  const galleryRef = useRef(null);
  const [activePage, setActivePage] = useState(0);

  const dotsCount = Math.min(3, Math.max(1, safeImages.length));

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const handleScroll = () => {
      const maxScrollLeft = gallery.scrollWidth - gallery.clientWidth;

      if (maxScrollLeft <= 0) {
        setActivePage(0);
        return;
      }

      const scrollRatio = gallery.scrollLeft / maxScrollLeft;
      const nextPage = Math.min(
        dotsCount - 1,
        Math.round(scrollRatio * (dotsCount - 1))
      );

      setActivePage(nextPage);
    };

    handleScroll();
    gallery.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      gallery.removeEventListener("scroll", handleScroll);
    };
  }, [dotsCount, safeImages.length]);

  return (
    <section className="portfolio-section" aria-labelledby="portfolio-title">
      <div className="portfolio-section__top">
        <div className="portfolio-section__heading">
          <p className="portfolio-section__tag">{tag}</p>
          <h2 id="portfolio-title" className="portfolio-section__title">
            {title}
          </h2>
        </div>

        <div className="portfolio-section__text">
          <p className="portfolio-section__description">{description}</p>
        </div>
      </div>

      {safeImages.length > 0 && (
        <>
          <div className="portfolio-section__gallery-wrap">
            <div
              ref={galleryRef}
              className="portfolio-section__grid"
              role="list"
              aria-label={`${title} gallery`}
            >
              {safeImages.map((img, index) => (
                <div
                  key={`${img}-${index}`}
                  className="portfolio-section__item"
                  role="listitem"
                >
                  <img
                    src={img}
                    alt={`${title} project ${index + 1}`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="portfolio-section__pagination" aria-hidden="true">
            {Array.from({ length: dotsCount }).map((_, index) => (
              <span
                key={index}
                className={`dot ${index === activePage ? "active" : ""}`}
              ></span>
            ))}
          </div>
        </>
      )}
    </section>
  );
}

export default PortfolioSection;