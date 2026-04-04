import storyImage from "../../assets/about-story.jpg";
import "../../styles/sections/AboutStory.css";

function AboutStorySection() {
  const funFacts = [
    "Basée à Paris 🇫🇷",
    "Passionnée par le contenu et les stratégies qui convertissent ✨",
    "Background en marketing digital, growth et acquisition 📈",
    "Toujours entre créativité, performance et image de marque 💻",
    "Obsédée par les contenus qui captent vraiment l’attention 🎥",
  ];

  return (
    <section className="about-story">
      <div className="about-story__scallop" />

      <div className="about-story__inner">
        <div className="about-story__image">
          <img
            src={storyImage}
            alt="Essia assise avec un ordinateur portable"
          />
        </div>

        <div className="about-story__content">
          <h2 className="about-story__title">Mon parcours &amp; mon approche</h2>

          <p className="about-story__text">
            Issue du marketing digital, du growth et de l’acquisition, j’ai construit
            mon approche à la croisée de la stratégie, du contenu et de la performance.
            Très vite, j’ai compris qu’une marque ne peut pas se contenter d’être
            présente en ligne : elle doit être claire, cohérente et mémorable.
          </p>

          <p className="about-story__text">
            Aujourd’hui, j’accompagne des marques, des entrepreneurs et des projets
            ambitieux dans le développement de leur présence digitale à travers le
            community management, la création de contenus UGC et le conseil en stratégie
            digitale. Mon objectif : créer une communication qui attire, engage et
            convertit, tout en restant alignée avec l’identité de la marque.
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