import TopBar from "../components/layout/TopBar";
import Navbar from "../components/layout/Navbar";
import FooterSection from "../components/layout/FooterSection";
import BottomBar from "../components/layout/BottomBar";
import PortfolioContentHero from "../components/sections/PortfolioContentHero";
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

      <PortfolioContentSection
  tag="Portfolio contenu"
  title="Beauté & Mode"
  description="Une sélection de contenus créés autour de la beauté, de la mode, du lifestyle et du storytelling visuel."
  images={testImages}
/>

<PortfolioContentSection
  tag="Portfolio créatif"
  title="Design graphique"
  description="Des concepts visuels, compositions créatives et contenus pensés pour les réseaux sociaux, au service d’un univers de marque fort et reconnaissable."
  images={testImages}
/>

<PortfolioContentSection
  tag="Portfolio collaborations"
  title="Collaborations avec des marques"
  description="Une sélection de collaborations et de contenus de marque pensés pour allier storytelling, esthétique et connexion avec l’audience."
  images={testImages}
/>

      <PortfolioContentCTASection />

      <FooterSection />
      <BottomBar />
    </>
  );
}

export default PortfolioContentPage;