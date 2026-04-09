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

import "../../styles/sections/landingPages/StrategyPage.css";

const StrategyPage = () => {
  return (
    <main className="strategy-page">
      <TopBar />
      <Navbar mode="sticky" />

      <HeroSection
        eyebrow="Strategy"
        title="Post more… won’t fix your problem."
        intro="Tu peux poster tous les jours, suivre les trends et tester tous les formats."
        text="Si ton message n’est pas clair, rien ne va vraiment changer."
        primaryCta={{
          label: "Construire ma stratégie",
          link: "/contact",
        }}
        secondaryCta={{
          label: "Discuter de mon projet",
          link: "/contact",
        }}
        image="/images/strategy-hero.jpg"
        imageAlt="Strategy visual"
      />

      <ProblemSection
        title="Le problème"
        blocks={[
          {
            subtitle: "Le vrai problème",
            text: [
              "La plupart des marques ne manquent pas de contenu. Elles manquent de direction.",
              "Le message est flou. Le contenu part dans tous les sens. Rien ne s’aligne vraiment.",
              "On ne comprend pas clairement ce que tu fais. On ne sait pas si c’est pour nous. Et ta marque ne reste pas.",
              "Tu fais sûrement déjà beaucoup. Mais sans structure, ton contenu ne devient jamais un levier.",
            ],
          },
          {
            subtitle: "Ce qu’il te manque",
            text: [
              "Pas plus de contenu.",
              "Une direction claire, un message aligné avec ton business, et une structure qui donne du sens à ce que tu publies.",
            ],
          },
        ]}
      />

      <SolutionSection
        title="Ce qu’il te manque"
        text="Pas plus de contenu. Une direction claire."
        supportingText="Un message aligné avec ton business, et une structure qui donne du sens à ce que tu publies."
      />

      <OfferSection
        title="Ce que je mets en place avec toi"
        cards={[
          {
            title: "Clarifier",
            text: "On travaille ton message, ton positionnement et ton angle pour que ce que tu dis soit immédiatement compris.",
          },
          {
            title: "Structurer",
            text: "On construit une logique de contenu claire avec des piliers, des formats et une ligne éditoriale cohérente.",
          },
          {
            title: "Construire",
            text: "On transforme tout ça en un système simple et actionnable : tu sais quoi dire, comment le dire et dans quel objectif.",
          },
        ]}
      />

      <ResultsSection
        title="Ce que ça change"
        intro="Tu ne postes plus au hasard."
        points={[
          "Ton contenu a une direction.",
          "Ton message est compris.",
          "Tu attires les bonnes personnes.",
        ]}
        closing="Tu sais quoi dire, pourquoi tu le dis, et comment tout s’assemble."
      />

      <CTASection
        title="On pose les bases"
        text="Pas de croissance sans structure. Si tu veux arrêter de poster dans le vide, on construit quelque chose de solide."
        forWho="Pour les marques, PME et startups déjà présentes en ligne, mais qui veulent enfin structurer leur contenu."
        notForWho="Si tu veux simplement plus de posts, sans travailler le fond, ou si tu cherches une solution rapide sans stratégie."
        primaryCta={{
          label: "Construire ma stratégie",
          link: "/contact",
        }}
        secondaryCta={{
          label: "Discuter de mon projet",
          link: "/contact",
        }}
      />

      <FooterSection />
      <BottomBar />
    </main>
  );
};

export default StrategyPage;