const OfferSection = ({ title, intro, items, steps }) => {
    return (
      <section className="offer-section">
        <div className="offer-container">
          <h2>{title}</h2>
  
          <p className="offer-intro">{intro}</p>
  
          <div className="offer-items">
            {items.map((item, index) => (
              <p key={index}>- {item}</p>
            ))}
          </div>
  
          <div className="offer-steps">
            {steps.map((step, index) => (
              <div key={index} className="offer-step">
                <h3>{step.title}</h3>
                {step.points.map((point, i) => (
                  <p key={i}>→ {point}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default OfferSection;