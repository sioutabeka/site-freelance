import TopBar from "../components/layout/TopBar";
import Navbar from "../components/layout/Navbar";
import FooterSection from "../components/layout/FooterSection";
import BottomBar from "../components/layout/BottomBar";

import Hero from "../components/sections/Hero";
import MeetSection from "../components/sections/MeetSection";
import WorkSection from "../components/sections/WorkSection";
import BrandsSection from "../components/sections/BrandsSection";
import AboutSection from "../components/sections/AboutSection";
import WorksShowcaseSection from "../components/sections/WorksShowcaseSection";


function HomePage() {
  return (
    <>
      <TopBar />
      <Navbar mode="sticky" />
      <Hero />
      <MeetSection />
      <WorkSection />
      <BrandsSection />
      <WorksShowcaseSection />
      <AboutSection />
      <FooterSection />
      <BottomBar />
    </>
  );
}

export default HomePage;