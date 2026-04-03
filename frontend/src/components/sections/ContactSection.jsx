import { useState } from "react";
import axios from "axios";
import "../../styles/sections/AboutContact.css";



function ContactSection() {

  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    budget: "",
    service: "",
    email: "",
    website: "",
    date: "",
    project: "",
  });
  
  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
  
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  async function handleSubmit(event) {
    event.preventDefault();
  
    setIsSubmitting(true);
    setStatusMessage("");
  
    try {
      const response = await axios.post(
        "http://localhost:3001/api/contact",
        formData
      );
  
      if (response.data.success) {
        setStatusMessage("Your inquiry has been sent successfully.");
  
        setFormData({
          name: "",
          businessName: "",
          budget: "",
          service: "",
          email: "",
          website: "",
          date: "",
          project: "",
        });
      } else {
        setStatusMessage("Something went wrong.");
      }
    } catch (error) {
      console.error("Axios error:", error);
      setStatusMessage("Server error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

    return (
<section id="work-with-me" className="about-inquiry">
          <div className="about-inquiry__inner">
          <p className="about-inquiry__tag">FILL OUT THE PROJECT INQUIRY FORM</p>
  
          <h2 className="about-inquiry__title">Work with Me</h2>
  
          <div className="about-inquiry__notice">
            I TAKE ON A LIMITED NUMBER OF CLIENTS EACH MONTH AND PRIORITIZE ONGOING
            RETAINER PARTNERSHIPS.
          </div>
  
          <form className="about-inquiry__form" onSubmit={handleSubmit}>
            <div className="about-inquiry__grid">
              <div className="about-inquiry__column">
                <div className="about-inquiry__field">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your Name Here"
                    value={formData.name}
                    onChange={handleChange}
                  
                  />
                </div>
  
                <div className="about-inquiry__field">
                  <label htmlFor="business-name">Business Name</label>
                  <input
                    id="business-name"
                    name="businessName"
                    type="text"
                    placeholder="Business Name"
                    value={formData.businessName}
                    onChange={handleChange}
                  />
                </div>
  
                <div className="about-inquiry__field">
                  <label htmlFor="budget">Estimated Budget</label>
  
                  <div className="about-inquiry__select-wrap">
                  <select
                    id="budget"
                    name="budget"
                    className="about-inquiry__select"
                    value={formData.budget}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Select
                    </option>
                    <option value="Under $1,000">Under $1,000</option>
                    <option value="$1,000 – $3,000">$1,000 – $3,000</option>
                    <option value="$3,000 – $5,000">$3,000 – $5,000</option>
                    <option value="$5,000+">$5,000+</option>
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
                    <input
  type="radio"
  name="service"
  value="Ongoing Creative Retainer"
  checked={formData.service === "Ongoing Creative Retainer"}
  onChange={handleChange}
/>                      <span>Ongoing Creative Retainer</span>
                    </label>
  
                    <label className="about-inquiry__option">
                      <input
                      type="radio"
                      name="service"
                      value="Social Content & Campaign Design"
                      checked={formData.service === "Social Content & Campaign Design"}
                      onChange={handleChange}
                    />
                      <span>Social Content &amp; Campaign Design</span>
                    </label>
  
                    <label className="about-inquiry__option">
                    <input
                      type="radio"
                      name="service"
                      value="Branding & Visual Identity"
                      checked={formData.service === "Branding & Visual Identity"}
                      onChange={handleChange}
                    />
                      <span>Branding &amp; Visual Identity</span>
                    </label>
  
                    <label className="about-inquiry__option">
                    <input
                      type="radio"
                      name="service"
                      value="One-Time Project/Other"
                      checked={formData.service === "One-Time Project/Other"}
                      onChange={handleChange}
                    />
                      <span>One-Time Project/Other</span>
                    </label>
  
                    <label className="about-inquiry__option">
                    <input
                      type="radio"
                      name="service"
                      value="Email & SMS Design"
                      checked={formData.service === "Email & SMS Design"}
                      onChange={handleChange}
                    />
                      <span>Email &amp; SMS Design</span>
                    </label>
                  </div>
                </div>
              </div>
  
              <div className="about-inquiry__column">
                <div className="about-inquiry__field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="name@hello.com"
                    value={formData.email}
                    onChange={handleChange}
                    
                  />
                </div>
  
                <div className="about-inquiry__field">
                  <label htmlFor="website">Website/Instagram URL (Optional)</label>
                  <input
                  id="website"
                  name="website"
                  type="text"
                  placeholder="https://yoursite.com"
                  value={formData.website}
                  onChange={handleChange}
                />
                </div>
  
                <div className="about-inquiry__field">
                  <label htmlFor="date">Ideal Start Date (Optional)</label>
                  <input
                    id="date"
                    name="date"
                    type="text"
                    placeholder="jj/mm/aaaa"
                    value={formData.date}
                    onChange={handleChange}
                  />
                </div>
  
                <div className="about-inquiry__field about-inquiry__field--textarea">
                  <label htmlFor="project">Tell Me About Your Project</label>
                <textarea
                id="project"
                name="project"
                rows="5"
                placeholder="Brief Project Description: Scope, Deliverables, etc"
                value={formData.project}
                onChange={handleChange}
                
              />
                </div>
              </div>
            </div>
  
            <button
              type="submit"
              className="about-inquiry__submit button button--submit button--submit-pink"
              disabled={isSubmitting}
            >
              {isSubmitting ? "SENDING..." : "SUBMIT"}
            </button>

            {statusMessage && (
              <p className="about-inquiry__status">{statusMessage}</p>
            )}

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