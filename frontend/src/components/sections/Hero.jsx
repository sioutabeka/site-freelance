import { Link } from "react-router-dom";
import "../../styles/sections/Hero.css";
import heroImage from "../../assets/essiahome.png";


function Hero() {
  return (
    <section className="hero">
      <div className="hero__inner">
        <div className="hero__content">
          <p className="hero__tag">
            Hi ! Moi c'est Essia
          </p>

          <h1 className="hero__title">
            Je transforme vos contenus {" "}
            <span className="hero__title-accent">en client.</span>
          </h1>

          <p className="hero__description">
            Community management, stratégie, production de contenus orienté performance.
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
  src={heroImage}
  alt="OSECOM, studio de social media et de growth à Paris"
  className="hero__img hero__img--desktop"
/>

<img
  src={heroImage}
  alt="OSECOM, studio de social media et de growth à Paris"
  className="hero__img hero__img--mobile"
/>
        </div>
      </div>
    </section>
  );
}

export default Hero;