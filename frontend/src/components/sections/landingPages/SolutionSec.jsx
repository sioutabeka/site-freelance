const SolutionSection = ({ title, intro, points }) => {
    return (
      <section className="solution-section">
        <div className="solution-container">
          <h2>{title}</h2>
  
          <p className="solution-intro">{intro}</p>
  
          <div className="solution-points">
            {points.map((point, index) => (
              <p key={index}>👉 {point}</p>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default SolutionSection;