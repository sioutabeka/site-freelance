import { Link } from "react-router-dom";
import "../../../styles/sections/SocialGrowth/SocialGrowthServices.css";

const services = [
  {
    eyebrow: "Clarifier avant de produire plus",
    title: "Strategy",
    intro:
      "Pour les marques qui postent déjà, mais sans ligne claire, sans angle fort, et sans vraie cohérence.",
    signals: [
      "Votre message change tout le temps",
      "Vous ne savez jamais quoi poster",
      "Votre contenu existe, mais ne construit rien",
    ],
    focus: [
      "Positionnement",
      "Message",
      "Ligne éditoriale",
      "Piliers de contenu",
    ],
    theme: "light",
    link: "/strategy",
    calendarLink: "/contact",
  },
  {
    eyebrow: "Rendre votre présence régulière et crédible",
    title: "Community Management",
    intro:
      "Pour les marques qui veulent une présence régulière, propre et cohérente, sans devoir tout gérer en interne.",
    signals: [
      "Vous postez quand vous pouvez",
      "Vos réseaux manquent de régularité",
      "Vous avez besoin de déléguer sans perdre le contrôle",
    ],
    focus: [
      "Organisation",
      "Planning éditorial",
      "Publication",
      "Continuité éditoriale",
    ],
    theme: "blue",
    link: "/community-management",
    calendarLink: "/contact",
  },
  {
    eyebrow: "Créer du contenu qui capte et reste",
    title: "UGC",
    intro:
      "Pour les marques qui veulent du contenu incarné, naturel et efficace, pensé pour capter l’attention et nourrir la désirabilité.",
    signals: [
      "Vos contenus ne retiennent pas assez l’attention",
      "Votre marque manque de matière vivante à diffuser",
      "Vous avez besoin de contenus activables sur les réseaux ou en ads",
    ],
    focus: [
      "Concepts créatifs",
      "Hooks",
      "Formats TikTok / Reels",
      "Contenus utilisables en ads",
    ],
    theme: "rose",
    link: "/ugc",
    calendarLink: "/contact",
  },
  {
    eyebrow: "Transformer la visibilité en demandes",
    title: "Acquisition",
    intro:
      "Pour les marques qui ont déjà du contenu ou de l’audience, mais peu de demandes concrètes derrière.",
    signals: [
      "Vos contenus font des vues, pas des leads",
      "Les gens regardent, mais ne passent pas à l’action",
      "Il manque un lien entre vos réseaux et votre business",
    ],
    focus: [
      "Hooks",
      "Messages",
      "CTA",
      "Logique de conversion",
    ],
    theme: "warm",
    link: "/acquisition",
    calendarLink: "/contact",
  },
  {
    eyebrow: "Faire travailler tout ensemble",
    title: "Growth",
    intro:
      "Pour les marques qui veulent une vision plus globale, un vrai pilotage et un système structuré dans le temps.",
    signals: [
      "Vous avez besoin de structure",
      "Vous voulez que tout travaille ensemble",
      "Vous cherchez un accompagnement plus complet",
    ],
    focus: [
      "Vision globale",
      "Système de croissance",
      "Pilotage",
      "Cohérence d’ensemble",
    ],
    theme: "beige",
    link: "/growth",
    calendarLink: "/contact",
  },
];

const SocialGrowthServices = () => {
  return (
    <section className="sg-services" id="social-growth-offers">
      <div className="sg-services__container">
        {services.map((service) => (
          <article
            key={service.title}
            className={`sg-service sg-service--${service.theme}`}
          >
            <div className="sg-service__inner">
              <p className="sg-service__eyebrow">{service.eyebrow}</p>

              <h2 className="sg-service__title">{service.title}</h2>

              <p className="sg-service__intro">{service.intro}</p>

              <div className="sg-service__content">
                <div className="sg-service__block">
                  <p className="sg-service__kicker">Vous vous reconnaîtrez ici si…</p>
                  <ul className="sg-service__list">
                    {service.signals.map((signal) => (
                      <li key={signal}>{signal}</li>
                    ))}
                  </ul>
                </div>

                <div className="sg-service__block sg-service__block--focus">
                  <p className="sg-service__kicker">Ce qu’on active</p>
                  <div className="sg-service__tags">
                    {service.focus.map((item) => (
                      <span key={item} className="sg-service__tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="sg-service__actions">
                <Link
                  to={service.link}
                  className="sg-service__btn sg-service__btn--primary"
                >
                  Plus de détails
                </Link>

                <Link
                  to={service.calendarLink}
                  className="sg-service__btn sg-service__btn--secondary"
                >
                  Prendre rendez-vous
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default SocialGrowthServices;