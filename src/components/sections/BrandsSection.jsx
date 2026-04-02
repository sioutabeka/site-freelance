function BrandsSection() {
  return (
    <section className="brands-section">
      
      <p className="brands-section__title">
        SOME BRANDS I'VE WORKED WITH
      </p>

      <div className="brands-section__slider">
        <div className="brands-section__track">
          
          {/* PREMIÈRE SÉRIE */}
          <img src="/logos/loreal.png" alt="L'Oréal" className="brands-section__logo" />
          <img src="/logos/phephe.png" alt="Phe Phe" className="brands-section__logo" />
          <img src="/logos/adobe.png" alt="Adobe" className="brands-section__logo" />
          <img src="/logos/maxmara.png" alt="MaxMara" className="brands-section__logo" />
          <img src="/logos/klaviyo.png" alt="Klaviyo" className="brands-section__logo" />
          <img src="/logos/paulaschoice.png" alt="Paula's Choice" className="brands-section__logo" />

          {/* DUPLICATION → SCROLL INFINI */}
          <img src="/logos/loreal.png" alt="" className="brands-section__logo" />
          <img src="/logos/phephe.png" alt="" className="brands-section__logo" />
          <img src="/logos/adobe.png" alt="" className="brands-section__logo" />
          <img src="/logos/maxmara.png" alt="" className="brands-section__logo" />
          <img src="/logos/klaviyo.png" alt="" className="brands-section__logo" />
          <img src="/logos/paulaschoice.png" alt="" className="brands-section__logo" />

        </div>
      </div>

    </section>
  );
}

export default BrandsSection;