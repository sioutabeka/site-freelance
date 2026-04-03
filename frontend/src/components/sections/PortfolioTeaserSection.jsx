import { Link } from "react-router-dom";
import phepheImage from "../../assets/phephe-cover.jpg";
import maxmaraImage from "../../assets/maxmara-cover.jpg";
import epjewelsImage from "../../assets/epjewels-cover.jpg";
import "../../styles/sections/PortfolioTeaser.css";

function PortfolioTeaserSection() {
  const projects = [
    {
      title: "Phe Phe",
      image: phepheImage,
      href: "/portfolio/design#phephe",
      alt: "Projet portfolio Phe Phe",
    },
    {
      title: "Max Mara",
      image: maxmaraImage,
      href: "/portfolio/design#maxmara",
      alt: "Projet portfolio Max Mara",
    },
    {
      title: "EP Jewels",
      image: epjewelsImage,
      href: "/portfolio/design#epjewels",
      alt: "Projet portfolio EP Jewels",
    },
  ];

  return (
    <section className="portfolio-teaser">
      <div className="portfolio-teaser__inner">
        <p className="portfolio-teaser__tag">CIERRA MILLER STUDIO</p>
        <h2 className="portfolio-teaser__title">Browse the Design Portfolio</h2>

        <div className="portfolio-teaser__grid">
          {projects.map((project) => (
            <Link
              key={project.title}
              to={project.href}
              className="portfolio-teaser__card"
            >
              <div className="portfolio-teaser__image-wrap">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="portfolio-teaser__image"
                />
              </div>

              <h3 className="portfolio-teaser__name">{project.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioTeaserSection;