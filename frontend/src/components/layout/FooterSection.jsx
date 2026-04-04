import "../../styles/layout/FooterSection.css";
import logoMark from "../../assets/logo-mark.png";

function FooterSection() {
  return (
    <footer className="footer-section">
      <div className="footer-section__top">
        <div className="footer-section__column footer-section__column--left">
          <h3 className="footer-section__heading">Services</h3>
          <a href="#">Community Management</a>
          <a href="#">Création UGC</a>
          <a href="#">Conseil en stratégie digitale</a>
          <a href="#">Audit réseaux sociaux</a>
        </div>

        <div className="footer-section__logo">
          <img src={logoMark} alt="Logo mark" />
        </div>

        <div className="footer-section__column footer-section__column--right">
          <h3 className="footer-section__heading">Explore & Connect</h3>
          <a href="#">Portfolio Management</a>
          <a href="#">Portfolio UGC</a>
          <a href="#">About</a>
          <a href="#">Instagram & TikTok</a>
        </div>
      </div>

    </footer>
  );
}

export default FooterSection;