import TopBar from "../components/layout/TopBar";
import Navbar from "../components/layout/Navbar";
import FooterSection from "../components/layout/FooterSection";
import BottomBar from "../components/layout/BottomBar";
import AboutHero from "../components/sections/AboutHero";
import AboutStorySection from "../components/sections/AboutStorySection";
import AboutMarqueeSection from "../components/sections/AboutMarqueeSection";
import AboutServicesSection from "../components/sections/AboutServicesSection";
import ContactSection from "../components/sections/ContactSection";
import PortfolioTeaserSection from "../components/sections/PortfolioTeaserSection";


function AboutPage() {
  return (
    <>
      <TopBar />
      <Navbar mode="default" />
      
      <main>
        <AboutHero />
        <AboutStorySection />
        <AboutMarqueeSection />
        <AboutServicesSection />
        <ContactSection />
        <PortfolioTeaserSection />

      </main>

      <FooterSection />
      <BottomBar />
    </>
  );
}

export default AboutPage;