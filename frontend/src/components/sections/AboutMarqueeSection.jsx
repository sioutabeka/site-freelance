import marqueeIcon from "../../assets/logo-mark.png";
import "../../styles/sections/AboutMarque.css";


function AboutMarqueeSection() {
  const items = [
    "Stratégie, contenu, acquisition & tout ce qu’il faut pour faire rentrer des clients",
    "Stratégie, contenu, acquisition & tout ce qu’il faut pour faire rentrer des clients",
    "Stratégie, contenu, acquisition & tout ce qu’il faut pour faire rentrer des clients",
    "Stratégie, contenu, acquisition & tout ce qu’il faut pour faire rentrer des clients",
  ];

  return (
    <section className="about-marquee">
      <div className="about-marquee__track">
        {[...items, ...items].map((item, index) => (
          <div className="about-marquee__item" key={index}>
            <span className="about-marquee__text">{item}</span>
            <img
              src={marqueeIcon}
              alt=""
              className="about-marquee__icon"
              aria-hidden="true"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutMarqueeSection;