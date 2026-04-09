import "./SolutionSection.css";

const SolutionSection = ({ title, text, supportingText }) => {
  return (
    <section className="solution-section">
      <div className="solution-container">
        <div className="solution-card reveal-up">
          <div className="solution-heading">
            <span className="solution-icon">✿</span>
            <h2>{title}</h2>
          </div>

          <div className="solution-text">
            <p>{text}</p>
            {supportingText && <p>{supportingText}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;