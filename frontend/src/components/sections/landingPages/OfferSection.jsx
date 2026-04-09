import "./OfferSection.css";

const OfferSection = ({ title, cards }) => {
  return (
    <section className="offer-section">
      <div className="offer-container">
        <div className="offer-header">
          <h2>{title}</h2>
        </div>

        <div className="offer-grid">
          {cards.map((card, index) => (
            <article key={index} className="offer-card">
              <h3>{card.title}</h3>

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