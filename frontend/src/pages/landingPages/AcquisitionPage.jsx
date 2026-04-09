import TopBar from "../../components/layout/TopBar";
import Navbar from "../../components/layout/Navbar";
import FooterSection from "../../components/layout/FooterSection";
import BottomBar from "../../components/layout/BottomBar";

import HeroSection from "../../components/sections/landingPages/HeroSection";
import ProblemSection from "../../components/sections/landingPages/ProblemSection";
import SolutionSection from "../../components/sections/landingPages/SolutionSection";
import OfferSection from "../../components/sections/landingPages/OfferSection";
import ResultsSection from "../../components/sections/landingPages/ResultsSection";
import CTASection from "../../components/sections/landingPages/CTASection";

import "../../styles/sections/landingPages/AcquisitionPage.css";

const AcquisitionPage = () => {
  return (
    <main className="acquisition-page">
      <TopBar />
      <Navbar mode="sticky" />

      <HeroSection
        eyebrow="Acquisition"
        title="Being visible is not the goal. Getting clients is."
        intro="Tu peux faire des vues, avoir des likes, et même une audience."
        text="Mais si ton contenu ne déclenche rien, il ne sert pas vraiment ton business."
        highlight="Et pourtant… aucun client."
        primaryCta={{
          label: "Attirer plus de clients",
          link: "/contact",
        }}
        secondaryCta={{
          label: "Discuter de ton projet",
          link: "/contact",
        }}
        image="/images/acquisition-hero.jpg"
        imageAlt="Acquisition visual"
      />

      <ProblemSection
        title="Le problème"
        blocks={[
          {
            subtitle: "Le problème n’est pas ta visibilité",
            text: [
              "Tu es déjà visible. Mais ton contenu ne transforme pas.",
              "On regarde, on scroll, on oublie. Parce que rien ne pousse à passer à l’action.",
            ],
          },
          {
            subtitle: "Le vrai problème",
            text: [
              "Ton contenu n’est pas connecté à ton business.",
              "Il n’y a pas de logique, pas de parcours, pas de conversion. Résultat : de l’attention perdue, du contenu inutile, et des opportunités manquées.",
            ],
          },
        ]}
      />

      <SolutionSection
        title="Le shift"
        text="Le contenu ne sert pas juste à être vu. Il sert à déclencher quelque chose."
        supportingText="De l’intérêt, une prise de conscience, puis une action. C’est ce passage-là qu’on construit."
      />

      <OfferSection
        title="Ce que je mets en place avec toi"
        cards={[
          {
            title: "Optimiser le contenu",
            text: "Je retravaille tes hooks, tes messages et tes formats pour que ton contenu donne envie de rester et d’aller plus loin.",
          },
          {
            title: "Structurer la conversion",
            text: "Je mets en place des CTA naturels, une structure claire et une progression entre tes contenus pour transformer l’attention en intérêt réel.",
          },
          {
            title: "Aligner les points de contact",
            text: "J’optimise ta bio, ton profil et tes contenus clés pour qu’en quelques secondes, on comprenne que ton offre peut répondre au bon besoin.",
          },
        ]}
      />

      <ResultsSection
        title="Ce que ça change"
        intro="On arrête de poster pour rien."
        points={[
          "Ton contenu attire les bonnes personnes.",
          "Il génère des interactions plus utiles.",
          "Il ouvre la voie à de vraies demandes.",
        ]}
        closing="On construit un système simple, mais efficace, qui relie enfin contenu, perception et business."
      />

      <CTASection
        title="On construit quelque chose qui sert vraiment"
        text="Si tu veux que ton contenu t’apporte des clients, il faut plus que de la visibilité. Il faut une logique claire, des points de contact alignés, et un vrai système de conversion."
        forWho="Pour les marques, PME et startups déjà visibles en ligne, avec du contenu existant, mais peu ou pas de clients générés via leurs réseaux."
        notForWho="Si tu pars de zéro total, si tu veux seulement plus de visibilité, ou si tu refuses de structurer ce que ton contenu doit réellement produire."
        primaryCta={{
          label: "Attirer plus de clients",
          link: "/contact",
        }}
        secondaryCta={{
          label: "Discuter de ton projet",
          link: "/contact",
        }}
      />

      <FooterSection />
      <BottomBar />
    </main>
  );
};

export default AcquisitionPage;