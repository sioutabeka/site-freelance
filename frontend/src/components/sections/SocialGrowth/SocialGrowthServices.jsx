import { Link } from "react-router-dom";
import "../../../styles/sections/SocialGrowth/SocialGrowthServices.css";

const services = [
  {
    label: "Vous avez du contenu… mais aucune vraie direction",
    title: "Strategy",
    description:
      "Pour les marques qui postent déjà, mais sans ligne claire, sans angle fort, et sans vraie cohérence.",
    problems: [
      "votre message change tout le temps",
      "vous ne savez jamais quoi poster",
      "votre contenu existe, mais ne construit rien",
    ],
    work:
      "Ce qu’on travaille : positionnement, message, ligne éditoriale, piliers de contenu.",
    theme: "light",
    link: "/strategy",
  },
  {
    label:
      "Vous savez qu’il faut être présent, mais vous n’arrivez pas à tenir le rythme",
    title: "Community Management",
    description:
      "Pour les marques qui veulent une présence régulière, propre et cohérente, sans devoir tout gérer en interne.",
    problems: [
      "vous postez quand vous pouvez",
      "vos réseaux manquent de régularité",
      "vous avez besoin de déléguer sans perdre le contrôle",
    ],
    work:
      "Ce qu’on prend en charge : organisation, planning, publication, continuité éditoriale.",
    theme: "blue",
    link: "/community-management",
  },
  {
    label: "Vous êtes visibles… mais ça ne vous ramène pas assez de clients",
    title: "Acquisition",
    description:
      "Pour les marques qui ont déjà du contenu ou de l’audience, mais peu de demandes concrètes derrière.",
    problems: [
      "vos contenus font des vues, pas des leads",
      "les gens regardent, mais ne passent pas à l’action",
      "il manque un lien entre vos réseaux et votre business",
    ],
    work:
      "Ce qu’on optimise : hooks, messages, CTA, logique de conversion, points de contact.",
    theme: "light",
    link: "/acquisition",
  },
  {
    label:
      "Vous voulez arrêter d’empiler des actions et enfin construire quelque chose de solide",
    title: "Growth",
    description:
      "Pour les marques qui veulent une vision plus globale, un vrai pilotage et un système structuré.",
    problems: [
      "vous avez besoin de structure",
      "vous voulez que tout travaille ensemble",
      "vous cherchez un accompagnement plus complet",
    ],
    work:
      "Ce qu’on construit : un système de croissance clair, cohérent et piloté dans le temps.",
    theme: "beige",
    link: "/growth",
  },
];

const SocialGrowthServices = () => {
  return (
    <section className="sg-services">
      {services.map((service, index) => (
        <div
          key={index}
          className={`sg-service sg-service--${service.theme}`}
        >
          <div className="sg-service__container">
            <p className="sg-service__label">{service.label}</p>

            <h2 className="sg-service__title">{service.title}</h2>

            <p className="sg-service__description">
              {service.description}
            </p>

            <ul className="sg-service__list">
              {service.problems.map((problem, i) => (
                <li key={i}>→ {problem}</li>
              ))}
            </ul>

            <p className="sg-service__work">{service.work}</p>

            <Link to={service.link} className="sg-service__btn">
              Voir l’offre
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default SocialGrowthServices;