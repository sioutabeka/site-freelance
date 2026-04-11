import "../../styles/sections/PortfolioContentHero.css";
import instaScreen from "../../assets/instagram-screen.png";

function PortfolioContentHero() {
  return (
    <section className="portfolio-content-hero">
      <div className="portfolio-content-hero__texture" />

      <div className="portfolio-content-hero__inner">
        <div className="portfolio-content-hero__content">
          <h1 className="portfolio-content-hero__title">
            Content & <br />
            Influencing
          </h1>

          <p className="portfolio-content-hero__description">
            Je crée du contenu qui mêle design, lifestyle et tout ce qui gravite
            autour — esthétique, créatif et pensé pour vraiment capter l’attention.
          </p>

          <div className="portfolio-content-hero__cta-grid">
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="portfolio-content-hero__cta portfolio-content-hero__cta--instagram"
            >
              Instagram
            </a>

            <a
              href="https://tiktok.com/"
              target="_blank"
              rel="noreferrer"
              className="portfolio-content-hero__cta portfolio-content-hero__cta--tiktok"
            >
              TikTok
            </a>

            <a
              href="https://youtube.com/"
              target="_blank"
              rel="noreferrer"
              className="portfolio-content-hero__cta portfolio-content-hero__cta--youtube"
            >
              YouTube
            </a>

            <a
              href="https://substack.com/"
              target="_blank"
              rel="noreferrer"
              className="portfolio-content-hero__cta portfolio-content-hero__cta--substack"
            >
              Substack
            </a>
          </div>
        </div>

        <div className="portfolio-content-hero__visuals">
          <div className="portfolio-content-hero__visuals-shadow" />
          <div className="portfolio-content-hero__frame" />

          <img
            src={instaScreen}
            alt="Aperçu Instagram gauche"
            className="portfolio-content-hero__image portfolio-content-hero__image--left"
          />

          <img
            src={instaScreen}
            alt="Aperçu Instagram droit"
            className="portfolio-content-hero__image portfolio-content-hero__image--right"
          />
        </div>
      </div>
    </section>
  );
}

export default PortfolioContentHero;