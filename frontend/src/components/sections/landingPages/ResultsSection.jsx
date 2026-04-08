const ResultsSection = ({ title, intro, points, before, after }) => {
    return (
      <section className="results-section">
        <div className="results-container">
          <h2>{title}</h2>
  
          <p className="results-intro">{intro}</p>
  
          <div className="results-points">
            {points.map((point, index) => (
              <p key={index}>→ {point}</p>
            ))}
          </div>
  
          <div className="results-comparison">
            <div className="before">
              <h3>Avant</h3>
              {before.map((item, index) => (
                <p key={index}>- {item}</p>
              ))}
            </div>
  
            <div className="after">
              <h3>Après</h3>
              {after.map((item, index) => (
                <p key={index}>- {item}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ResultsSection;