import "../../styles/sections/PortfolioCTASection.css";

function PortfolioCTASection() {
  return (
    <section className="portfolio-cta">
      <div className="portfolio-cta__inner">
        <p className="portfolio-cta__tag">LET&apos;S WORK TOGETHER</p>

        <h2 className="portfolio-cta__title">
          Hire Me for Your Design Project
        </h2>

        <p className="portfolio-cta__text">
          Want to bring your ideas to life? That’s kind of my thing. From brand
          identities and social assets to email, SMS, your next birthday invite,
          and printed pieces people actually keep, I make it all come together
          seamlessly and stand out.
        </p>

        <a
          href="/about#work-with-me"
          className="portfolio-cta__button button button--olive"
        >
          START AN INQUIRY
        </a>
      </div>
    </section>
  );
}

export default PortfolioCTASection;