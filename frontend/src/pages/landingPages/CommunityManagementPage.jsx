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

import "../../styles/sections/landingPages/CommunityManagementPage.css";

const CommunityManagementPage = () => {
  return (
    <main className="community-management-page">
      <TopBar />
      <Navbar mode="sticky" />

      <HeroSection
        eyebrow="Community Management"
        title="Your brand deserves more than random posts."
        intro="Poster quand tu peux, quand tu as le temps, ou quand une idée te traverse l’esprit, ça ne construit rien."
        text="Et ça se voit. Ta présence existe, mais elle ne donne ni cadre, ni cohérence, ni vrai signal de sérieux."
        primaryCta={{
          label: "Déléguer mes réseaux",
          link: "/contact",
        }}
        secondaryCta={{
          label: "Discuter de mon projet",
          link: "/contact",
        }}
        image="/images/community-management-hero.jpg"
        imageAlt="Community management visual"
      />

      <ProblemSection
        title="Le problème"
        blocks={[
          {
            subtitle: "Tes réseaux existent, mais ils ne vivent pas vraiment",
            text: [
              "Il n’y a pas assez de régularité, pas assez de structure, et pas de vraie ligne.",
              "Résultat : une image floue, peu d’impact, et peu d’intérêt.",
            ],
          },
          {
            subtitle: "Le vrai sujet",
            text: [
              "Ce n’est pas juste poster.",
              "C’est construire une présence qui montre que tu es sérieux, donne envie de suivre, et inspire confiance.",
            ],
          },
        ]}
      />

      <SolutionSection
        title="Ce qu’il faut mettre en place"
        text="Pas juste de l’exécution. Une présence claire, cohérente et régulière."
        supportingText="L’objectif, ce n’est pas de remplir ton feed. C’est de construire une image solide qui tient dans le temps."
      />

      <OfferSection
        title="Ce que je mets en place avec toi"
        cards={[
          {
            title: "Organiser",
            text: "Je remets de l’ordre dans ton contenu et dans ce que ta marque montre au quotidien.",
          },
          {
            title: "Planifier",
            text: "Je structure les publications avec une vraie logique pour que ta présence ne dépende plus de ton énergie du moment.",
          },
          {
            title: "Piloter",
            text: "Je gère la mise en ligne, le suivi global, et je veille à ce que tout reste cohérent, propre et aligné.",
          },
        ]}
      />

      <ResultsSection
        title="Ce que ça change"
        intro="Tu ne postes plus au hasard, ni dans l’urgence."
        points={[
          "Ta présence devient régulière.",
          "Ton image est plus professionnelle.",
          "Tu gagnes du temps et de la clarté.",
        ]}
        closing="Tu délègues sans perdre le contrôle, et ta communication devient enfin stable."
      />

      <CTASection
        title="Une présence qui tient dans le temps"
        text="Pas juste quelques posts. Une vraie base pour faire exister ta marque avec plus de régularité, plus de cohérence et moins de charge mentale."
        forWho="Pour les marques, PME et startups qui ont besoin de régularité, de cadre, et de quelqu’un pour faire tourner leur présence proprement."
        notForWho="Si tu veux simplement tester Instagram sans vision, ou si tu ne veux pas t’impliquer du tout dans ce que ta marque raconte."
        primaryCta={{
          label: "Déléguer mes réseaux",
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

export default CommunityManagementPage;