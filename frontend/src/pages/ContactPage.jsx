import TopBar from "../components/layout/TopBar";
import Navbar from "../components/layout/Navbar";
import FooterSection from "../components/layout/FooterSection";
import BottomBar from "../components/layout/BottomBar";
import ContactSection from "../components/sections/ContactSection";

function ContactPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <ContactSection />
      <FooterSection />
      <BottomBar />
    </>
  );
}

export default ContactPage;