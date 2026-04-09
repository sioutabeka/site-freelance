import "./OfferSection.css";

const OfferSection = ({ title, cards }) => {
  const icons = ["✿", "◎", "↗"];

  return (
    <section className="offer-section">
      <div className="offer-container">
        <div className="offer-header reveal-up">
          <h2>{title}</h2>
        </div>

        <div className="offer-grid">
          {cards.map((card, index) => (
            <article
              key={index}
              className={`offer-card offer-card-${index + 1} reveal-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="offer-card-top">
                <span className="offer-card-icon">{icons[index] || "✦"}</span>
                <h3>{card.title}</h3>
              </div>

              <div className="offer-text">
                <p>{card.text}</p>
                {card.supportingText && <p>{card.supportingText}</p>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferSection;