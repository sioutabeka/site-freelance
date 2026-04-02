function WorkSection() {
    return (
      <section className="work-section">
        <div className="work-section__inner">
          <article className="work-card work-card--left">
            <div className="work-card__image-placeholder"></div>
            <h3 className="work-card__title">Brand Partnerships</h3>
            <p className="work-card__text">
              Working with brands to create content that feels natural,
              creative, and actually fits my style.
            </p>
            <button className="work-card__button">CONTACT ME</button>
          </article>
  
          <div className="work-section__center">
            <div className="work-section__badge">CM</div>
  
            <p className="work-section__tag">
              GRAPHIC DESIGNER & CONTENT CREATOR
            </p>
  
            <h2 className="work-section__title">
              Ways to Work with Me
            </h2>
          </div>
  
          <article className="work-card work-card--right">
            <div className="work-card__image-placeholder"></div>
            <h3 className="work-card__title">Design Services</h3>
            <p className="work-card__text">
              Thoughtful, elevated design for your brand — whether it’s
              a one-off project or ongoing support.
            </p>
            <button className="work-card__button">WORK WITH ME</button>
          </article>
        </div>
      </section>
    );
  }
  
  export default WorkSection;