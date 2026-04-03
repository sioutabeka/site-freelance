import "../../styles/layout/BottomBar.css";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes";

function BottomBar() {
    return (
      <div className="bottom-bar">
        <div className="bottom-bar__inner">
          <a href="#">COPYRIGHT 2025 CIERRA MILLER</a>
          <Link to={ROUTES.privacy}>PRIVACY POLICY</Link>
          <Link to={ROUTES.terms}>TERMS AND CONDITIONS</Link>
          <Link to={ROUTES.returns}>RETURN POLICY</Link>
          <a href="#">BRANDING + SITE BY ATNNDESIGN</a>
        </div>
      </div>
    );
  }
  
  export default BottomBar;