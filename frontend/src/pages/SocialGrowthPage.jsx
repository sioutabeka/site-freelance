import TopBar from "../components/layout/TopBar";
import Navbar from "../components/layout/Navbar";
import FooterSection from "../components/layout/FooterSection";
import BottomBar from "../components/layout/BottomBar";
import SocialGrowthHero from "../components/sections/SocialGrowth/SocialGrowthHero";
import SocialGrowthIntro from "../components/sections/SocialGrowth/SocialGrowthIntro";
import SocialGrowthServices from "../components/sections/SocialGrowth/SocialGrowthServices";
import SocialGrowthCTA from "../components/sections/SocialGrowth/SocialGrowthCTA";
import "../styles/sections/SocialGrowth/SocialGrowthPage.css";

const SocialGrowthPage = () => {
  return (
    <>
    <TopBar />
    <Navbar/>
      <SocialGrowthHero />
      <SocialGrowthIntro />
      <SocialGrowthServices />
      <SocialGrowthCTA />
      <FooterSection />
      <BottomBar />
    </>
  );
};

export default SocialGrowthPage;