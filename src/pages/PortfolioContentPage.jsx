import TopBar from "../components/layout/TopBar";
import Navbar from "../components/layout/Navbar";
import FooterSection from "../components/layout/FooterSection";
import BottomBar from "../components/layout/BottomBar";
import PortfolioContentHero from "../components/sections/PortfolioContentHero";
import BrandsSection from "../components/sections/BrandsSection";
import PortfolioContentSection from "../components/sections/PortfolioContentSection";
import PortfolioContentCTASection from "../components/sections/PortfolioContentCTASection";

const testImages = [
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
  "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
  "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb",
  "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b",
];

function PortfolioContentPage() {
  return (
    <>
      <TopBar />
      <Navbar variant="transparent" mode="sticky" />
      <PortfolioContentHero />
      <BrandsSection />

      <PortfolioContentSection
        tag="Content portfolio"
        title="Beauty & Fashion"
        description="A curated selection of content created around beauty, fashion, lifestyle and visual storytelling."
        images={testImages}
      />

      <PortfolioContentSection
        tag="Creative portfolio"
        title="Graphic Design"
        description="Visual concepts, creative layouts and social-first assets designed to build a strong and recognizable brand universe."
        images={testImages}
      />

      <PortfolioContentSection
        tag="Brand portfolio"
        title="Brand Partnerships"
        description="Selected collaborations and branded content crafted to align storytelling, aesthetics and audience connection."
        images={testImages}
      />

      <PortfolioContentCTASection />

      <FooterSection />
      <BottomBar />
    </>
  );
}

export default PortfolioContentPage;