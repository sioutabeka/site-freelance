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

import "../../styles/sections/landingPages/UGCPage.css";

const UGCPage = () => {
  return (
    <main className="ugc-page">
      <TopBar />
      <Navbar mode="sticky" />

      <HeroSection
        eyebrow="UGC Content"
        title="Make your brand stay in their mind."
        intro="Aujourd’hui, les gens ne regardent plus les pubs. Ils regardent du contenu."
        text="Et en quelques secondes, ils décident s’ils s’arrêtent… ou s’ils scrollent."
        primaryCta={{
          label: "Créer du contenu",
          link: "/contact",
        }}
        secondaryCta={{
          label: "Discuter de mon projet",
          link: "/contact",
        }}
        image="/images/ugc-hero.jpg"
        imageAlt="UGC visual"
      />

      <ProblemSection
        title="Le problème"
        blocks={[
          {
            subtitle: "Le problème",
            text: [
              "Tu as peut-être un bon produit, mais tes contenus ne captent pas.",
              "Tes vidéos passent inaperçues, ton message ne marque pas, et au final tu génères peu d’attention, peu d’engagement, et peu d’impact.",
            ],
          },
          {
            subtitle: "Ce qu’il te manque",
            text: [
              "Du contenu qui donne envie. Pas juste du contenu propre.",
              "Du contenu qui attire, qui retient, et qui reste dans l’esprit des bonnes personnes.",
            ],
          },
        ]}
      />

      <SolutionSection
        title="Ce qu’on crée ensemble"
        text="Du contenu pensé pour les réseaux : naturel, incarné et efficace."
        supportingText="Pas des pubs déguisées. Des contenus qui captent vraiment l’attention et qui fonctionnent avec les codes d’aujourd’hui."
      />

      <OfferSection
        title="Ce que je mets en place avec toi"
        cards={[
          {
            title: "Concevoir",
            text: "On définit les bons angles, les bons concepts et les bons formats pour créer un contenu qui donne envie de s’arrêter.",
          },
          {
            title: "Produire",
            text: "Je crée des vidéos qui captent dès les premières secondes, racontent quelque chose et mettent ta marque en valeur.",
          },
          {
            title: "Déployer",
            text: "Tu repars avec des contenus pensés pour TikTok, Reels, les ads ou ton site, pour qu’ils puissent vivre sur plusieurs points de contact.",
          },
        ]}
      />

      <ResultsSection
        title="Ce que ça change"
        intro="Ton contenu ne passe plus inaperçu."
        points={[
          "Il attire davantage l’attention.",
          "Il donne plus envie de regarder.",
          "Il reste plus facilement en tête.",
        ]}
        closing="Tu passes d’un contenu fade à un contenu plus mémorable, plus engageant, et plus utile pour ta marque."
      />

      <CTASection
        title="Du contenu qui ne se fait pas ignorer"
        text="Si tu veux des contenus qui captent vraiment l’attention, qui respectent les codes des plateformes et qui donnent envie d’aller plus loin, on peut construire ça ensemble."
        forWho="Pour les marques, e-commerce, apps ou produits qui ont besoin de contenu rapide, incarné, et pensé pour performer sur les réseaux."
        notForWho="Si tu veux un rendu ultra pub TV, si tu refuses les codes des plateformes, ou si tu ne veux pas tester des formats plus vivants et plus actuels."
        primaryCta={{
          label: "Créer du contenu",
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

export default UGCPage;