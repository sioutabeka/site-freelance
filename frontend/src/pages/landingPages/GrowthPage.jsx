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

import "../../styles/sections/landingPages/GrowthPage.css";

const GrowthPage = () => {
  return (
    <main className="growth-page">
      <TopBar />
      <Navbar mode="sticky" />

      <HeroSection
        eyebrow="Growth"
        title="Grow your brand through content. For real."
        intro="Ton contenu peut faire beaucoup plus que simplement exister."
        text="Aujourd’hui, il est là. Mais il ne travaille pas vraiment pour toi."
        highlight="Pas assez de clients. Pas assez de demandes. Pas assez d’impact."
        primaryCta={{
          label: "Prendre contact",
          link: "/contact",
        }}
        secondaryCta={{
          label: "Discuter de ton projet",
          link: "/contact",
        }}
        image="/images/growth-hero.jpg"
        imageAlt="Growth visual"
      />

      <ProblemSection
        title="Le problème"
        blocks={[
          {
            subtitle: "Le problème, ce n’est pas ton contenu",
            text: [
              "Ce n’est pas un problème de motivation. Ni un problème d’idées.",
              "C’est un problème de système. Tu postes sans vraie direction, tu testes sans savoir pourquoi, et tu accumules sans construire.",
            ],
          },
          {
            subtitle: "Ce que ça crée",
            text: [
              "Une visibilité instable, peu de conversions, et beaucoup de frustration.",
              "Tu fais des efforts, sans voir un vrai impact business derrière.",
            ],
          },
        ]}
      />

      <SolutionSection
        title="Ce qu’il te manque"
        text="Pas juste du contenu. Une vraie machine de croissance."
        supportingText="Une logique claire, une présence mieux pensée, et un système qui transforme l’attention en opportunités."
      />

      <OfferSection
        title="Ce que je mets en place avec toi"
        cards={[
          {
            title: "Clarifier",
            text: "On pose une direction claire avec un meilleur positionnement, un message plus fort et une présence plus lisible.",
          },
          {
            title: "Structurer",
            text: "On construit une stratégie de contenu cohérente avec les bons piliers, les bons formats et une logique de publication utile.",
          },
          {
            title: "Accélérer",
            text: "On relie contenu, acquisition et conversion pour que ta présence attire les bonnes personnes et ouvre de vraies opportunités.",
          },
        ]}
      />

      <ResultsSection
        title="Ce que ça change"
        intro="Tu ne postes plus pour remplir."
        points={[
          "Ton contenu devient plus utile.",
          "Ta présence devient plus cohérente.",
          "Ton business génère plus de demandes.",
        ]}
        closing="Tu passes d’efforts dispersés à une vraie logique de croissance."
      />

      <CTASection
        title="On construit quelque chose de solide"
        text="Pas juste du contenu. Pas juste de la stratégie. Un système clair pour faire de ta présence digitale un vrai levier de business."
        forWho="Pour les marques, PME et startups qui veulent structurer leur croissance, investir sérieusement dans leur présence, et obtenir des résultats concrets."
        notForWho="Si tu veux simplement poster un peu, si tu cherches du low-cost, ou si tu n’es pas prêt à t’impliquer dans la construction d’un vrai système."
        primaryCta={{
          label: "Prendre contact",
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

export default GrowthPage;