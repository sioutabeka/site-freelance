import "./ResultsSection.css";

const ResultsSection = ({ title, intro, points, closing }) => {
  return (
    <section className="results-section">
      <div className="results-container">
        <div className="results-header reveal-up">
          <h2>{title}</h2>
          {intro && <p className="results-intro">{intro}</p>}
        </div>

        <div className="results-card reveal-up">
          <div className="results-points">
            {points.map((point, index) => (
              <div key={index} className="results-point">
                <span className="results-icon">✦</span>
                <p>{point}</p>
              </div>
            ))}
          </div>

          {closing && <p className="results-closing">{closing}</p>}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;