import TopBar from "../../components/layout/TopBar";
import Navbar from "../../components/layout/Navbar";
import FooterSection from "../../components/layout/FooterSection";
import BottomBar from "../../components/layout/BottomBar";

import HeroSection from "../../components/sections/landingPages/HeroSection";
import ProblemSection from "../../components/sections/landingPages/ProblemSection";
import SolutionSection from "../../components/sections/landingPages/SolutionSec";
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
        title="Post more… won’t fix your problem."
        lines={[
          "Vous pouvez poster tous les jours.",
          "Suivre toutes les trends.",
          "Tester tous les formats.",
        ]}
        description="Si votre message n’est pas clair… rien ne va vraiment changer."
        primaryCta={{
          label: "Construire ma stratégie",
          link: "/contact",
        }}
        secondaryCta={{
          label: "Discuter de mon projet",
          link: "/contact",
        }}
      />

      <ProblemSection
        title="Le vrai problème"
        points={[
          "message flou",
          "contenu incohérent",
          "aucun fil conducteur",
        ]}
        results={[
          "on ne comprend pas vraiment ce que vous faites",
          "on ne sait pas si c’est pour nous",
          "on ne pense pas à vous",
        ]}
        extraText="Vous faites sûrement déjà beaucoup. Mais sans structure, votre contenu reste… juste du contenu. Pas un levier."
      />

      <SolutionSection
        title="On remet de la clarté"
        intro="Avant de produire plus, on pose une base solide."
        points={[
          "structurer ce que vous dites",
          "rendre votre message évident",
          "construire une vraie direction",
        ]}
      />

      <OfferSection
        title="Ce que je fais concrètement"
        intro="Je vous aide à structurer votre contenu pour qu’il :"
        items={[
          "attire les bonnes personnes",
          "soit compris rapidement",
          "crée de l’intérêt",
        ]}
        steps={[
          {
            title: "Analyse",
            points: [
              "ce que vous faites aujourd’hui",
              "ce qui ne fonctionne pas",
            ],
          },
          {
            title: "Clarification",
            points: [
              "votre message",
              "votre cible",
              "votre angle",
            ],
          },
          {
            title: "Structure",
            points: [
              "piliers de contenu",
              "formats",
              "logique éditoriale",
            ],
          },
          {
            title: "Plan",
            points: [
              "quoi poster",
              "comment",
              "dans quel objectif",
            ],
          },
        ]}
      />

      <ResultsSection
        title="On construit une direction"
        intro="Vous ne postez plus au hasard. Vous savez :"
        points={["quoi dire", "pourquoi", "comment"]}
        before={[
          "vous testez au hasard",
          "vous n’avez pas de direction",
        ]}
        after={[
          "votre contenu est structuré",
          "votre message est compris",
          "vous attirez les bonnes personnes",
        ]}
      />

      <CTASection
        title="On pose les bases."
        subtitle="Pas de croissance sans structure. Si vous voulez arrêter de poster dans le vide :"
        forWho={[
          "marques / PME / startups",
          "déjà présentes en ligne",
          "mais pas structurées",
        ]}
        notForWho={[
          "vous voulez juste “plus de posts”",
          "vous ne voulez pas travailler le fond",
          "vous cherchez une solution rapide",
        ]}
        credibility={[
          "je ne vous dis pas “poste plus”",
          "je travaille sur votre message",
          "j’aligne contenu et objectif",
        ]}
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