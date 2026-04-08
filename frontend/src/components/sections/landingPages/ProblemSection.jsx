const ProblemSection = ({ title, points, results, extraText }) => {
    return (
      <section className="problem-section">
        <div className="problem-container">
          <h2>{title}</h2>
  
          <div className="problem-points">
            {points.map((point, index) => (
              <p key={index}>👉 {point}</p>
            ))}
          </div>
  
          <div className="problem-results">
            {results.map((result, index) => (
              <p key={index}>→ {result}</p>
            ))}
          </div>
  
          {extraText && <p className="problem-extra">{extraText}</p>}
        </div>
      </section>
    );
  };
  
  export default ProblemSection;