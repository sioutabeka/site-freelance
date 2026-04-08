import { Link } from "react-router-dom";
import "../../styles/sections/landingPages/StrategyPage.css";

const StrategyPage = () => {
  return (
    <main className="strategy-page">
      <section className="strategy-hero">
        <div className="strategy-container">
          <p className="strategy-eyebrow">Social Media Strategy</p>

          <h1 className="strategy-hero__title">
            Post more… won’t fix your problem.
          </h1>

          <div className="strategy-hero__content">
            <p>
              Tu peux poster tous les jours. Suivre toutes les trends. Tester
              tous les formats.
            </p>
            <p className="strategy-hero__highlight">
              Si ton message n’est pas clair, rien ne va vraiment changer.
            </p>
          </div>

          <div className="strategy-hero__actions">
            <Link to="/contact" className="strategy-btn strategy-btn--primary">
              Discuter de mon projet
            </Link>
            <a href="#strategy-process" className="strategy-btn strategy-btn--secondary">
              Construire ma stratégie
            </a>
          </div>
        </div>
      </section>

      <section className="strategy-problem">
        <div className="strategy-container strategy-grid strategy-grid--problem">
          <div className="strategy-card strategy-card--light">
            <p className="strategy-section-label">Le vrai problème</p>
            <h2 className="strategy-section-title">
              Le contenu n’est pas le sujet.
            </h2>
            <p className="strategy-text">
              La plupart des marques ne manquent pas de contenu. Elles manquent
              de direction.
            </p>

            <ul className="strategy-list">
              <li>message flou</li>
              <li>contenu incohérent</li>
              <li>aucun fil conducteur</li>
            </ul>
          </div>

          <div className="strategy-card strategy-card--blue">
            <p className="strategy-section-label">Ce que ça crée</p>
            <div className="strategy-result-list">
              <p>→ on ne comprend pas vraiment ce que tu fais</p>
              <p>→ on ne sait pas si c’est pour nous</p>
              <p>→ on ne pense pas à toi</p>
            </div>

            <div className="strategy-shift">
              <p className="strategy-shift__title">Ce n’est pas un problème d’effort.</p>
              <p className="strategy-shift__text">
                Tu fais sûrement déjà beaucoup. Mais sans structure, ton contenu
                reste juste du contenu. Pas un levier.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="strategy-solution">
        <div className="strategy-container strategy-grid strategy-grid--solution">
          <div className="strategy-solution__intro">
            <p className="strategy-section-label">C’est là que j’interviens</p>
            <h2 className="strategy-section-title">
              Avant de produire plus, on remet de la clarté.
            </h2>
            <p className="strategy-text">
              On pose une base solide pour que ton contenu attire les bonnes
              personnes, soit compris rapidement et crée un vrai intérêt autour
              de ta marque.
            </p>
          </div>

          <div className="strategy-card strategy-card--beige">
            <p className="strategy-section-label">Ce que je fais concrètement</p>
            <ul className="strategy-list strategy-list--detailed">
              <li>on clarifie ce que tu veux dire</li>
              <li>on définit ton positionnement</li>
              <li>on construit des piliers de contenu</li>
              <li>on choisit les bons formats</li>
              <li>on structure ta ligne éditoriale</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="strategy-direction">
        <div className="strategy-container">
          <div className="strategy-direction__box">
            <p className="strategy-section-label">On construit une direction</p>
            <h2 className="strategy-section-title">
              Tu ne postes plus au hasard.
            </h2>

            <div className="strategy-direction__grid">
              <div className="strategy-mini-card">
                <span>→</span>
                <p>quoi dire</p>
              </div>
              <div className="strategy-mini-card">
                <span>→</span>
                <p>pourquoi</p>
              </div>
              <div className="strategy-mini-card">
                <span>→</span>
                <p>comment</p>
              </div>
              <div className="strategy-mini-card">
                <span>→</span>
                <p>comment tout s’assemble</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="strategy-process" id="strategy-process">
        <div className="strategy-container">
          <p className="strategy-section-label">Comment ça se passe</p>
          <h2 className="strategy-section-title">
            Une méthode simple. Une vraie logique.
          </h2>

          <div className="strategy-process__grid">
            <article className="strategy-step">
              <span className="strategy-step__number">01</span>
              <h3>Analyse</h3>
              <p>ce que tu fais aujourd’hui</p>
              <p>ce qui ne fonctionne pas</p>
            </article>

            <article className="strategy-step">
              <span className="strategy-step__number">02</span>
              <h3>Clarification</h3>
              <p>ton message</p>
              <p>ta cible</p>
              <p>ton angle</p>
            </article>

            <article className="strategy-step">
              <span className="strategy-step__number">03</span>
              <h3>Structure</h3>
              <p>piliers de contenu</p>
              <p>formats</p>
              <p>logique éditoriale</p>
            </article>

            <article className="strategy-step">
              <span className="strategy-step__number">04</span>
              <h3>Plan</h3>
              <p>quoi poster</p>
              <p>comment</p>
              <p>dans quel objectif</p>
            </article>
          </div>
        </div>
      </section>

      <section className="strategy-results">
        <div className="strategy-container strategy-grid strategy-grid--results">
          <div className="strategy-card strategy-card--light">
            <p className="strategy-section-label">Ce que tu reçois</p>
            <h2 className="strategy-section-title">Une base claire pour avancer.</h2>

            <ul className="strategy-list strategy-list--detailed">
              <li>une stratégie claire</li>
              <li>une ligne éditoriale</li>
              <li>des idées de contenus</li>
              <li>des angles différenciants</li>
              <li>une vision globale</li>
              <li>plus de doute à chaque post</li>
            </ul>
          </div>

          <div className="strategy-card strategy-card--cream">
            <p className="strategy-section-label">Avant / Après</p>

            <div className="strategy-before-after">
              <div className="strategy-before-after__col">
                <h3>Avant</h3>
                <p>tu postes sans vraie logique</p>
                <p>tu testes des trucs au hasard</p>
                <p>tu n’as pas de résultats clairs</p>
              </div>

              <div className="strategy-before-after__col">
                <h3>Après</h3>
                <p>ton contenu a une direction</p>
                <p>ton message est compris</p>
                <p>tu attires les bonnes personnes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="strategy-fit">
        <div className="strategy-container strategy-grid strategy-grid--fit">
          <div className="strategy-card strategy-card--blue">
            <p className="strategy-section-label">Pour qui c’est</p>
            <ul className="strategy-list strategy-list--check">
              <li>marques, PME, startups</li>
              <li>déjà présentes en ligne</li>
              <li>mais pas encore structurées</li>
            </ul>
          </div>

          <div className="strategy-card strategy-card--light">
            <p className="strategy-section-label">Pas pour toi si</p>
            <ul className="strategy-list strategy-list--cross">
              <li>tu veux juste “plus de posts”</li>
              <li>tu ne veux pas réfléchir au fond</li>
              <li>tu cherches une solution rapide sans stratégie</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="strategy-why">
        <div className="strategy-container">
          <div className="strategy-why__box">
            <p className="strategy-section-label">Pourquoi moi</p>
            <h2 className="strategy-section-title">
              Je ne te dirai jamais juste “poste plus”.
            </h2>

            <p className="strategy-text strategy-why__text">
              Je regarde ton message, ton contenu et ton objectif. Puis je fais
              en sorte que tout soit aligné pour que ta présence en ligne serve
              vraiment ton business.
            </p>
          </div>
        </div>
      </section>

      <section className="strategy-cta">
        <div className="strategy-container">
          <p className="strategy-section-label strategy-section-label--light">
            On pose les bases
          </p>

          <h2 className="strategy-cta__title">
            Pas de croissance sans structure.
          </h2>

          <p className="strategy-cta__text">
            Si tu veux arrêter de poster dans le vide, on commence ici.
          </p>

          <div className="strategy-hero__actions">
            <Link to="/contact" className="strategy-btn strategy-btn--primary">
              Discuter de mon projet
            </Link>
            <a href="#strategy-process" className="strategy-btn strategy-btn--secondary-light">
              Construire ma stratégie
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default StrategyPage;