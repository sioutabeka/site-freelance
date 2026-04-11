import "../../styles/sections/WorksShowcaseSection.css";
import { useState } from "react";

const works = [
  {
    title: "Community Management",
    category: "Social Media",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "UGC Content",
    category: "Content Creation",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Brand Strategy",
    category: "Branding",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Creative Campaigns",
    category: "Campaign",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
  },
];

function WorksShowcaseSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? works.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === works.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="works-showcase">
      <div className="works-showcase__container">
        <div className="works-showcase__header">
          <p className="works-showcase__tag">SELECTED WORK</p>

          <h2 className="works-showcase__heading">
            A few ways I create{" "}
            <span className="works-showcase__heading-accent">impact</span> for brands
          </h2>
        </div>

        <div className="works-showcase__inner">
          <div className="works-showcase__nav">
            <button
              type="button"
              className="works-showcase__arrow works-showcase__arrow--up"
              onClick={handlePrev}
              aria-label="Previous project"
            >
              ↑
            </button>

            <div className="works-showcase__titles">
              {works.map((work, index) => {
                const isActive = index === activeIndex;
                const isNeighbor =
                  index === activeIndex - 1 || index === activeIndex + 1;

                return (
                  <button
                    key={work.title}
                    type="button"
                    className={`works-showcase__title-item ${
                      isActive
                        ? "is-active"
                        : isNeighbor
                        ? "is-neighbor"
                        : "is-muted"
                    }`}
                    onClick={() => setActiveIndex(index)}
                  >
                    <span className="works-showcase__title-category">
                      {work.category}
                    </span>

                    <h3 className="works-showcase__title">
                      {work.title}
                    </h3>
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              className="works-showcase__arrow works-showcase__arrow--down"
              onClick={handleNext}
              aria-label="Next project"
            >
              ↓
            </button>
          </div>

          <div className="works-showcase__visual">
            <div className="works-showcase__image-card">
              <img
                key={works[activeIndex].image}
                src={works[activeIndex].image}
                alt={works[activeIndex].title}
                className="works-showcase__image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorksShowcaseSection;