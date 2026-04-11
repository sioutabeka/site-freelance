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
        Accélérez votre croissance en utilisant <span> les réseaux sociaux !</span>
        </h1>

        <p className="sg-hero__subtitle">
        La stratégie d'image, de communication et de marketing digital est le coeur de tout business qui fonctionne aujourd’hui.

        <br />
          <strong>Explorer le bon levier</strong> selon vos objectifs et vos besoins.
        </p>

        <div className="sg-hero__actions">
          <button className="sg-hero__btn sg-hero__btn--primary">
            Discuter de mon projet
          </button>
        </div>
      </div>
    </section>
  );
};

export default SocialGrowthHero;