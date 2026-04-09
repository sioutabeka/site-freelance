import "./ProblemSection.css";

const ProblemSection = ({ title, blocks }) => {
  return (
    <section className="problem-section">
      <div className="problem-container">
        <div className="problem-header">
          <h2>{title}</h2>
        </div>

        <div className="problem-grid">
          {blocks.map((block, index) => (
            <article key={index} className="problem-block">
              {block.subtitle && <h3>{block.subtitle}</h3>}

              <div className="problem-text">
                {block.text.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;