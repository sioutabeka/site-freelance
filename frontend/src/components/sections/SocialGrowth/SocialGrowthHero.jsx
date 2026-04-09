import "../../../styles/sections/SocialGrowth/SocialGrowthHero.css";

const SocialGrowthHero = () => {
  return (
    <section className="sg-hero">
      <div className="sg-hero__bg">
        <div className="sg-hero__orb sg-hero__orb--pink"></div>
        <div className="sg-hero__orb sg-hero__orb--blue"></div>
        <div className="sg-hero__grid"></div>
      </div>

      <div className="sg-hero__container">
        <div className="sg-hero__eyebrow">Social Growth isn’t an option</div>

        <h1 className="sg-hero__title">
          Des offres pensées pour faire grandir votre présence
          <span> avec plus d’intention.</span>
        </h1>

        <p className="sg-hero__subtitle">
          Stratégie, contenu, acquisition, présence :
          <br />
          <strong>Explorer le bon levier</strong> according to your needs.
        </p>

        <div className="sg-hero__actions">
          <button className="sg-hero__btn sg-hero__btn--primary">
            Discuter de mon projet
          </button>

          <a href="/contact" className="sg-hero__btn sg-hero__btn--ghost">
            Prendre rendez-vous
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialGrowthHero;