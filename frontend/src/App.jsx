import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PortfolioDesignPage from "./pages/PortfolioDesignPage";
import PortfolioContentPage from "./pages/PortfolioContentPage";
import ContactPage from "./pages/ContactPage";

import PrivacyPolicyPage from "./pages/legal/PrivacyPolicyPage";
import TermsPage from "./pages/legal/TermsPage";
import ReturnPolicyPage from "./pages/legal/ReturnPolicyPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio/design" element={<PortfolioDesignPage />} />
        <Route path="/portfolio/content" element={<PortfolioContentPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/return-policy" element={<ReturnPolicyPage />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;