import aboutHeroImage from "../../assets/about-hero.jpg";
import "../../styles/sections/AboutHero.css";

import { Link } from "react-router-dom";


function AboutHero() {
  return (
    <section className="about-hero">
      <div className="about-hero__content">
        <p className="about-hero__tag">HI, I&apos;M CIERRA MILLER</p>

        <h1 className="about-hero__title">
          NYC-based Graphic Designer & Influencer
        </h1>

        <p className="about-hero__description">
          I bring together design, content, and creative direction to build
          brands that feel cohesive, elevated, and easy to connect with,
          whether it&apos;s a campaign, a digital experience, or everyday visuals.
        </p>

        <Link
          to="/about#work-with-me"
          className="about-hero__button button button--pink"
        >
          WORK WITH ME
        </Link>

      </div>

      <div className="about-hero__image">
        <img
          src={aboutHeroImage}
          alt="Portrait de Cierra Miller avec une boisson et des documents"
        />
        <p className="about-hero__caption">Meet Cierra</p>
      </div>
    </section>
  );
}

export default AboutHero;