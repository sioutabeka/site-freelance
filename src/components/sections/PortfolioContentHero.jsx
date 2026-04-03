import "../../styles/sections/PortfolioContentHero.css";
import instaScreen from "../../assets/instagram-screen.png";

function PortfolioContentHero() {
  return (
    <section className="portfolio-content-hero">
      <div className="portfolio-content-hero__inner">
        <div className="portfolio-content-hero__content">
          <h1 className="portfolio-content-hero__title">
            Content & <br />
            Influencing
          </h1>

          <p className="portfolio-content-hero__description">
            I create content that blends design, lifestyle, and everything in
            between — elevated, fun, and rooted in visuals that actually
            connect.
          </p>

          <div className="portfolio-content-hero__cta-grid">
            <a className="portfolio-content-hero__cta portfolio-content-hero__cta--pink-light">
              Instagram
            </a>

            <a className="portfolio-content-hero__cta portfolio-content-hero__cta--cream">
              TikTok
            </a>

            <a className="portfolio-content-hero__cta portfolio-content-hero__cta--pink">
              YouTube
            </a>

            <a className="portfolio-content-hero__cta portfolio-content-hero__cta--olive">
              Substack
            </a>
          </div>
        </div>

        <div className="portfolio-content-hero__visuals">
          <img
            src={instaScreen}
            className="portfolio-content-hero__image portfolio-content-hero__image--left"
          />

          <img
            src={instaScreen}
            className="portfolio-content-hero__image portfolio-content-hero__image--right"
          />
        </div>
      </div>
    </section>
  );
}

export default PortfolioContentHero;