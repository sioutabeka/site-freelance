import TopBar from "../components/layout/TopBar";
import Navbar from "../components/layout/Navbar";
import FooterSection from "../components/layout/FooterSection";
import BottomBar from "../components/layout/BottomBar";

function AboutPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <h1>About Page</h1>
      </main>
      <FooterSection />
      <BottomBar />
    </>
  );
}

export default AboutPage;