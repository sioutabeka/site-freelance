import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages principales
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PortfolioContentPage from "./pages/PortfolioContentPage";
import ContactPage from "./pages/ContactPage";
import SocialGrowthPage from "./pages/SocialGrowthPage";

// Pages légales
import PrivacyPolicyPage from "./pages/legal/PrivacyPolicyPage";
import TermsPage from "./pages/legal/TermsPage";
import ReturnPolicyPage from "./pages/legal/ReturnPolicyPage";

// Landing pages
import AcquisitionPage from "./pages/landingPages/AcquisitionPage";
import GrowthPage from "./pages/landingPages/GrowthPage";
import UGCPage from "./pages/landingPages/UGCPage";
import CommunityManagementPage from "./pages/landingPages/CommunityManagementPage";
import StrategyPage from "./pages/landingPages/StrategyPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Pages principales */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio/content" element={<PortfolioContentPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/social-growth" element={<SocialGrowthPage />} />

        {/* Pages légales */}
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/return-policy" element={<ReturnPolicyPage />} />

        {/* Landing pages */}
        <Route path="/strategy" element={<StrategyPage />} />
        <Route path="/community-management" element={<CommunityManagementPage />} />
        <Route path="/acquisition" element={<AcquisitionPage />} />
        <Route path="/growth" element={<GrowthPage />} />
        <Route path="/ugc" element={<UGCPage />} />

        <Route path="/contact" element={<ContactPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;