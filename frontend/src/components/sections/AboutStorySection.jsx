import storyImage from "../../assets/about-story.jpg";
import "../../styles/sections/AboutStory.css";


function AboutStorySection() {
  const funFacts = [
    "I 💗 NEEDLEPOINT ↗",
    "OBSESSED WITH MATCHA EVERYTHING 🍵",
    "BORN IN NEW JERSEY, LIVING IN NYC 🗽",
    "NATURAL BLONDE, MEANT-TO-BE REDHEAD 🧑‍🦰",
    "HUGE REALITY TV FAN 📺",
  ];

  return (
    <section className="about-story">
      <div className="about-story__scallop" />

      <div className="about-story__inner">
        <div className="about-story__image">
          <img
            src={storyImage}
            alt="Cierra assise sur une chaise avec un ordinateur portable"
          />
        </div>

        <div className="about-story__content">
          <h2 className="about-story__title">My Story &amp; Fun Facts</h2>

          <p className="about-story__text">
            I studied art and graphic design at Fairfield University in Connecticut,
            where I built the foundation for my work. I’ve always been drawn to
            visuals — art, design, and fashion — along with a personal passion for
            skincare and beauty that shapes the industries I work in today.
          </p>

          <p className="about-story__text">
            I started my YouTube by vlogging New York Fashion Week while working as
            a graphic designer at StyleCaster, which evolved into my influencing
            career. Now, I combine design and content to create work that feels
            elevated, thoughtful, and actually connects.
          </p>

          <div className="about-story__facts">
            {funFacts.map((fact) => (
              <div key={fact} className="about-story__fact">
                {fact}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutStorySection;