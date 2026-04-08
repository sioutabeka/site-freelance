import "../../../styles/sections/SocialGrowth/SocialGrowthHero.css";

const SocialGrowthHero = () => {
  return (
    <section className="sg-hero">
      <div className="sg-hero__container">
        <h1 className="sg-hero__title">Social Growth</h1>

        <p className="sg-hero__subtitle">
          Des offres pensées pour des marques qui veulent plus qu’être visibles.
        </p>

        <p className="sg-hero__text">
          Selon où vous en êtes, on n’active pas les mêmes leviers.
        </p>

        <div className="sg-hero__actions">
          <button className="sg-hero__btn">Discuter de mon projet</button>
        </div>
      </div>
    </section>
  );
};

export default SocialGrowthHero;