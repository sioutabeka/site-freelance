import "../../../styles/sections/SocialGrowth/SocialGrowthCTA.css";

const SocialGrowthCTA = () => {
  return (
    <section className="sg-cta">
      <div className="sg-cta__bg">
        <div className="sg-cta__orb sg-cta__orb--pink"></div>
        <div className="sg-cta__orb sg-cta__orb--blue"></div>
        <div className="sg-cta__grid"></div>
      </div>

      <div className="sg-cta__container">
        <div className="sg-cta__eyebrow">Need clarity before scaling ?</div>

        <h2 className="sg-cta__title">
          Vous ne savez pas encore exactement ce qu'il vous faut ?
          <span> Et c'est OK.</span>
        </h2>

        <p className="sg-cta__text">
          On regarde ensemble où vous en êtes, ce qui bloque
          aujourd’hui, et quel levier activer en priorité.
        </p>

        <div className="sg-cta__actions">
  <a href="/contact" className="sg-cta__btn sg-cta__btn--primary">
    Prendre rendez-vous
  </a>

  <button className="sg-cta__btn sg-cta__btn--ghost">
    Discuter de mon projet
  </button>
</div>

      </div>
    </section>
  );
};

export default SocialGrowthCTA;