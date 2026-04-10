import { Link } from "react-router-dom";
import "../../styles/sections/Hero.css";
import heroImage from "../../assets/hero-test.jpg";
import heroImageTest from "../../assets/hero-ciarra.png";
import heroImageMobile from "../../assets/hero-mobile.jpg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__inner">
        <div className="hero__content">
          <p className="hero__tag">
            Social Growth isn’t an option
          </p>

          <h1 className="hero__title">
            Je transforme vos contenus en{" "}
            <span className="hero__title-accent">en client.</span>
          </h1>

          <p className="hero__description">
            Stratégie, contenu, community management et performance.
            J’aide les marques à construire une présence claire, cohérente et désirable.
          </p>

          <Link
            to="/about#work-with-me"
            className="button button--lg button--primary"            >
            Prendre rendez-vous
          </Link>
        </div>

        <div className="hero__image">
          <img
            src={heroImageTest}
            alt="OSECOM, studio de social media et de growth à Paris"
            className="hero__img hero__img--desktop"
          />

          <img
            src={heroImageMobile}
            alt="OSECOM, studio de social media et de growth à Paris"
            className="hero__img hero__img--mobile"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;