import "../../styles/sections/BrandsSection.css";
import { useEffect, useState } from "react";

const logos = [
  { src: "/logos/loreal.png", alt: "L'Oréal" },
  { src: "/logos/phephe.png", alt: "Phe Phe" },
  { src: "/logos/adobe.png", alt: "Adobe" },
  { src: "/logos/maxmara.png", alt: "MaxMara" },
  { src: "/logos/klaviyo.png", alt: "Klaviyo" },
  { src: "/logos/paulaschoice.png", alt: "Paula's Choice" },
];

function BrandsSection() {
  const [index, setIndex] = useState(0);
  const [withTransition, setWithTransition] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (index === logos.length) {
      const timeout = setTimeout(() => {
        setWithTransition(false);
        setIndex(0);
      }, 850);

      return () => clearTimeout(timeout);
    }
  }, [index]);

  useEffect(() => {
    if (!withTransition) {
      const raf = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setWithTransition(true);
        });
      });

      return () => cancelAnimationFrame(raf);
    }
  }, [withTransition]);

  const trackStyle = {
    transform: `translateX(calc(-${index} * var(--brands-step)))`,
    transition: withTransition ? "transform 0.85s cubic-bezier(0.22, 1, 0.36, 1)" : "none",
  };

  return (
    <section className="brands-section">
      <div className="brands-section__inner">
        <p className="brands-section__title">ELLES M'ONT FAIT CONFIANCE</p>

        <div className="brands-section__slider">
          <div className="brands-section__viewport">
            <div className="brands-section__track" style={trackStyle}>
              {[...logos, ...logos].map((logo, i) => (
                <div className="brands-section__item" key={`${logo.alt}-${i}`}>
                  <img
                    src={logo.src}
                    alt={i < logos.length ? logo.alt : ""}
                    className="brands-section__logo"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrandsSection;