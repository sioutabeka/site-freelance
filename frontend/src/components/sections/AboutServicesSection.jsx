import "../../styles/sections/AboutService.css";


function AboutServicesSection() {
  return (
    <section className="about-services">
      <div className="about-services__inner">
        <p className="about-services__tag">SERVICES I OFFER</p>

        <div className="about-services__list">
          <div className="about-services__row about-services__row--top">
            <span className="about-services__item">Community Management </span>
            <span className="about-services__flower about-services__flower--pink">✿</span>

            <span className="about-services__item">Social Media Strategy</span>
            <span className="about-services__flower about-services__flower--olive">✿</span>

            <span className="about-services__item">UGC Content</span>
            <span className="about-services__flower about-services__flower--blue">✿</span>

            <span className="about-services__item">Personal Branding</span>
            <span className="about-services__flower about-services__flower--burgundy">✿</span>
          </div>

          <div className="about-services__row about-services__row--bottom">
            <span className="about-services__item">Digital Strategy</span>
            <span className="about-services__flower about-services__flower--cream">✿</span>

            <span className="about-services__item">Growth</span>
            <span className="about-services__flower about-services__flower--lightpink">✿</span>

            <span className="about-services__more">&amp; More</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutServicesSection;