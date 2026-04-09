import "./ResultsSection.css";

const ResultsSection = ({ title, intro, points, closing }) => {
  return (
    <section className="results-section">
      <div className="results-container">
        <div className="results-header">
          <h2>{title}</h2>
          {intro && <p className="results-intro">{intro}</p>}
        </div>

        <div className="results-card">
          <div className="results-points">
            {points.map((point, index) => (
              <p key={index} className="results-point">
                {point}
              </p>
            ))}
          </div>

          {closing && <p className="results-closing">{closing}</p>}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;