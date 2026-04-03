import "../../styles/sections/AboutContact.css";

function ContactSection() {
    return (
      <section className="about-inquiry">
        <div className="about-inquiry__inner">
          <p className="about-inquiry__tag">FILL OUT THE PROJECT INQUIRY FORM</p>
  
          <h2 className="about-inquiry__title">Work with Me</h2>
  
          <div className="about-inquiry__notice">
            I TAKE ON A LIMITED NUMBER OF CLIENTS EACH MONTH AND PRIORITIZE ONGOING
            RETAINER PARTNERSHIPS.
          </div>
  
          <form className="about-inquiry__form">
            <div className="about-inquiry__grid">
              <div className="about-inquiry__column">
                <div className="about-inquiry__field">
                  <label htmlFor="name">Name</label>
                  <input id="name" type="text" placeholder="Your Name Here" />
                </div>
  
                <div className="about-inquiry__field">
                  <label htmlFor="business-name">Business Name</label>
                  <input
                    id="business-name"
                    type="text"
                    placeholder="Business Name"
                  />
                </div>
  
                <div className="about-inquiry__field">
                  <label htmlFor="budget">Estimated Budget</label>
  
                  <div className="about-inquiry__select-wrap">
                    <select
                      id="budget"
                      className="about-inquiry__select"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      <option>Under $1,000</option>
                      <option>$1,000 – $3,000</option>
                      <option>$3,000 – $5,000</option>
                      <option>$5,000+</option>
                    </select>
  
                    <span
                      className="about-inquiry__select-arrow"
                      aria-hidden="true"
                    >
                      ⌄
                    </span>
                  </div>
                </div>
  
                <div className="about-inquiry__field">
                  <p className="about-inquiry__subheading">
                    What are you looking for?
                  </p>
  
                  <div className="about-inquiry__options">
                    <label className="about-inquiry__option">
                      <input type="radio" name="service" />
                      <span>Ongoing Creative Retainer</span>
                    </label>
  
                    <label className="about-inquiry__option">
                      <input type="radio" name="service" />
                      <span>Social Content &amp; Campaign Design</span>
                    </label>
  
                    <label className="about-inquiry__option">
                      <input type="radio" name="service" />
                      <span>Branding &amp; Visual Identity</span>
                    </label>
  
                    <label className="about-inquiry__option">
                      <input type="radio" name="service" />
                      <span>One-Time Project/Other</span>
                    </label>
  
                    <label className="about-inquiry__option">
                      <input type="radio" name="service" />
                      <span>Email &amp; SMS Design</span>
                    </label>
                  </div>
                </div>
              </div>
  
              <div className="about-inquiry__column">
                <div className="about-inquiry__field">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" placeholder="name@hello.com" />
                </div>
  
                <div className="about-inquiry__field">
                  <label htmlFor="website">Website/Instagram URL (Optional)</label>
                  <input
                    id="website"
                    type="text"
                    placeholder="https://yoursite.com"
                  />
                </div>
  
                <div className="about-inquiry__field">
                  <label htmlFor="date">Ideal Start Date (Optional)</label>
                  <input id="date" type="text" placeholder="jj/mm/aaaa" />
                </div>
  
                <div className="about-inquiry__field about-inquiry__field--textarea">
                  <label htmlFor="project">Tell Me About Your Project</label>
                  <textarea
                    id="project"
                    rows="5"
                    placeholder="Brief Project Description: Scope, Deliverables, etc"
                  />
                </div>
              </div>
            </div>
  
            <button type="submit" className="about-inquiry__submit">
              SUBMIT
            </button>
          </form>
  
          <div className="about-inquiry__extra">
            <span>Want to work with me as an influencer?</span>
            <span className="about-inquiry__extra-flower">✿</span>
            <a href="mailto:hello@example.com">Send an email to my team!</a>
          </div>
        </div>
      </section>
    );
  }
  
  export default ContactSection;