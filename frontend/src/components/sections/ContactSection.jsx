import { useState } from "react";
import axios from "axios";
import "../../styles/sections/AboutContact.css";

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    budget: "",
    service: "",
    email: "",
    website: "",
    date: "",
    project: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setIsSubmitting(true);
    setStatusMessage("");

    try {
      const response = await axios.post(
        "http://localhost:3001/api/contact",
        formData
      );

      if (response.data.success) {
        setStatusMessage("Votre demande a bien été envoyée.");

        setFormData({
          name: "",
          businessName: "",
          budget: "",
          service: "",
          email: "",
          website: "",
          date: "",
          project: "",
        });
      } else {
        setStatusMessage("Une erreur est survenue.");
      }
    } catch (error) {
      console.error("Axios error:", error);
      setStatusMessage("Erreur serveur. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="work-with-me" className="about-inquiry">
      <div className="about-inquiry__inner">
        <p className="about-inquiry__tag">REMPLISSEZ LE FORMULAIRE DE CONTACT</p>

        <h2 className="about-inquiry__title">Parlons de votre projet</h2>

        <div className="about-inquiry__notice">
          Je travaille avec un nombre limité de clients chaque mois et privilégie
          les collaborations sur le long terme.
        </div>

        <form className="about-inquiry__form" onSubmit={handleSubmit}>
          <div className="about-inquiry__grid">
            <div className="about-inquiry__column">
              <div className="about-inquiry__field">
                <label htmlFor="name">Nom</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="about-inquiry__field">
                <label htmlFor="business-name">Nom de l’entreprise / marque</label>
                <input
                  id="business-name"
                  name="businessName"
                  type="text"
                  placeholder="Nom de votre entreprise ou marque"
                  value={formData.businessName}
                  onChange={handleChange}
                />
              </div>

              <div className="about-inquiry__field">
                <label htmlFor="budget">Budget estimé</label>

                <div className="about-inquiry__select-wrap">
                  <select
                    id="budget"
                    name="budget"
                    className="about-inquiry__select"
                    value={formData.budget}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Sélectionner
                    </option>
                    <option value="Moins de 500 €">Moins de 500 €</option>
                    <option value="500 € – 1 500 €">500 € – 1 500 €</option>
                    <option value="1 500 € – 3 000 €">1 500 € – 3 000 €</option>
                    <option value="3 000 € +">3 000 € +</option>
                  </select>

                  <span
                    className="about-inquiry__select-arrow"
                    aria-hidden="true"
                  >
                    ⌄
                  </span>
                </div>
              </div>

              <div className="about-inquiry__field">
                <p className="about-inquiry__subheading">
                  Quel type d’accompagnement recherchez-vous ?
                </p>

                <div className="about-inquiry__options">
                  <label className="about-inquiry__option">
                    <input
                      type="radio"
                      name="service"
                      value="Community Management"
                      checked={formData.service === "Community Management"}
                      onChange={handleChange}
                    />
                    <span>Community Management</span>
                  </label>

                  <label className="about-inquiry__option">
                    <input
                      type="radio"
                      name="service"
                      value="Création UGC"
                      checked={formData.service === "Création UGC"}
                      onChange={handleChange}
                    />
                    <span>Création UGC</span>
                  </label>

                  <label className="about-inquiry__option">
                    <input
                      type="radio"
                      name="service"
                      value="Stratégie digitale"
                      checked={formData.service === "Stratégie digitale"}
                      onChange={handleChange}
                    />
                    <span>Stratégie digitale</span>
                  </label>

                  <label className="about-inquiry__option">
                    <input
                      type="radio"
                      name="service"
                      value="Audit réseaux sociaux"
                      checked={formData.service === "Audit réseaux sociaux"}
                      onChange={handleChange}
                    />
                    <span>Audit réseaux sociaux</span>
                  </label>

                  <label className="about-inquiry__option">
                    <input
                      type="radio"
                      name="service"
                      value="Autre demande"
                      checked={formData.service === "Autre demande"}
                      onChange={handleChange}
                    />
                    <span>Autre demande</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="about-inquiry__column">
              <div className="about-inquiry__field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="nom@bonjour.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="about-inquiry__field">
                <label htmlFor="website">Site web / Instagram (optionnel)</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  placeholder="https://votresite.com"
                  value={formData.website}
                  onChange={handleChange}
                />
              </div>

              <div className="about-inquiry__field">
                <label htmlFor="date">Date de démarrage idéale (optionnel)</label>
                <input
                  id="date"
                  name="date"
                  type="text"
                  placeholder="jj/mm/aaaa"
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>

              <div className="about-inquiry__field about-inquiry__field--textarea">
                <label htmlFor="project">Parlez-moi de votre projet</label>
                <textarea
                  id="project"
                  name="project"
                  rows="5"
                  placeholder="Décrivez votre besoin, vos objectifs, vos livrables ou le contexte de votre projet"
                  value={formData.project}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="about-inquiry__submit button button--submit button--submit-pink"
            disabled={isSubmitting}
          >
            {isSubmitting ? "ENVOI EN COURS..." : "ENVOYER LA DEMANDE"}
          </button>

          {statusMessage && (
            <p className="about-inquiry__status">{statusMessage}</p>
          )}
        </form>

        <div className="about-inquiry__extra">
          <span>Vous souhaitez collaborer avec moi sur du contenu UGC ?</span>
          <span className="about-inquiry__extra-flower">✿</span>
          <a href="mailto:contact@osecom.fr">Envoyez-moi un email</a>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;