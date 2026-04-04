import "../../styles/layout/BottomBar.css";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes";

function BottomBar() {
    return (
      <div className="bottom-bar">
        <div className="bottom-bar__inner">
          <a href="#">© 2026 OseCom. Stratégie digitale, community management & création UGC à Paris.</a>
          <Link to={ROUTES.privacy}>Politique de confidentialité</Link>
          <Link to={ROUTES.terms}>Conditions générales</Link>
          <a href="#">BRANDING + SITE BY OSECOM</a>
        </div>
      </div>
    );
  }
  
  export default BottomBar;