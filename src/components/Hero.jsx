
import heroImage from "../assets/hero-test.jpg";

function Hero() {
    return (
      <section className="hero">
        <div className="hero__content">
          <p className="hero__tag">
            GRAPHIC DESIGNER & CONTENT CREATOR
          </p>
  
          <h1 className="hero__title">
            A personal brand & creative hub centered around the work of Cierra Miller.
          </h1>
  
          <p className="hero__description">
            Explore the shop, view my work, and see everything I’m creating in one place.
            A mix of design, content, and products — all brought together under one creative vision.
          </p>
  
          <button className="hero__button">
            WORK WITH ME
          </button>
        </div>
  
        <div className="hero__image">
        <img src={heroImage} alt="Hero" />
        </div>
      </section>
    );
  }
  
  export default Hero;