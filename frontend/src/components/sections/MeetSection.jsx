import "../../styles/sections/MeetSection.css";

function MeetSection() {
  return (
    <section className="meet-section">
      <div className="meet-section__content">

        <div className="meet-section__card">
          <h2 className="meet-section__title">
            Publier ne suffit plus.
          </h2>
          <p className="meet-section__text">
            Beaucoup d’entreprises sont présentes sur les réseaux…
            mais sans réelle stratégie.
            Le contenu manque de cohérence, la communication de régularité,
            et les résultats ne suivent pas.
          </p>
        </div>

        <div className="meet-section__card">
          <h2 className="meet-section__title">
            Une présence structurée change tout.
          </h2>
          <p className="meet-section__text">
            Je construis une stratégie social media claire et performante
            pour transformer vos réseaux en levier de visibilité,
            d’acquisition et de croissance.
          </p>
        </div>

      </div>
    </section>
  );
}

export default MeetSection;