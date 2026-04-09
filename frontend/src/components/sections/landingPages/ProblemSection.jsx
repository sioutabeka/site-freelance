import "./ProblemSection.css";

const ProblemSection = ({ title, blocks }) => {
  return (
    <section className="problem-section">
      <div className="problem-container">
        <div className="problem-header reveal-up">
          <h2>{title}</h2>
        </div>

        <div className="problem-grid">
          {blocks.map((block, index) => (
            <article
              key={index}
              className={`problem-block reveal-up ${
                index === 0 ? "problem-block-featured" : ""
              }`}
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              <div className="problem-block-top">
                <span className="problem-block-icon">
                  {index === 0 ? "✿" : "◎"}
                </span>

                {block.subtitle && <h3>{block.subtitle}</h3>}
              </div>

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