import TopBar from "../components/layout/TopBar";
import Navbar from "../components/layout/Navbar";
import FooterSection from "../components/layout/FooterSection";
import BottomBar from "../components/layout/BottomBar";
import PortfolioHero from "../components/sections/PortfolioHero";
import PortfolioSection from "../components/sections/PortfolioSection";
import maxmaraImage from "../assets/maxmara-cover.jpg";
import PortfolioCTASection from "../components/sections/PortfolioCTASection";

function PortfolioDesignPage() {
  return (
    <>
      <TopBar />
      <Navbar mode="sticky" />
      
      <main>
        <PortfolioHero title="The Design Portfolio" />

        <PortfolioSection
  tag="EMAIL & SMS DESIGN"
  title="Phe Phe"
  description="Phe Phe is a NYC-based clothing brand founded by Brigette and Danielle Pheloung. I support the brand through email and SMS marketing, creating thoughtful, on-brand campaigns that align with each launch and collection."
  images={[
    maxmaraImage,
    maxmaraImage,
    maxmaraImage,
    maxmaraImage,
    maxmaraImage,
    maxmaraImage,
  ]}
/>

<PortfolioSection
  tag="GRAPHIC DESIGN"
  title="Max Mara"
  description="At Max Mara, I led graphic design across marketing, events, and in-store experiences, creating cohesive, elevated visuals across digital and print. My work balanced the brand’s timeless identity with a fresh, modern perspective."
  images={[
    maxmaraImage,
    maxmaraImage,
    maxmaraImage,
    maxmaraImage,
    maxmaraImage,
    maxmaraImage,
  ]}
/>

        <PortfolioSection
          tag="GRAPHIC DESIGN"
          title="EP Jewels"
          description="For EP Jewels’ NYC pop-up, I created a playful, city-inspired visual direction using bold graphics and iconic motifs. Spanning packaging, merchandise, and in-store details, the designs feel cohesive, nostalgic, and distinctly New York."
          images={[
            maxmaraImage,
            maxmaraImage,
            maxmaraImage,
            maxmaraImage,
            maxmaraImage,
            maxmaraImage,
          ]}
        />

<PortfolioCTASection />

      </main>

      <FooterSection />
      <BottomBar />
    </>
  );
}

export default PortfolioDesignPage;