import TopBar from "../../components/layout/TopBar";
import Navbar from "../../components/layout/Navbar";
import FooterSection from "../../components/layout/FooterSection";
import BottomBar from "../../components/layout/BottomBar";
import "../../styles/sections/LegalPage.css";

function TermsPage() {
  return (
    <>
      <TopBar />
      <Navbar />

      <main className="legal-page">
        <section className="legal-page__main">
          <div className="legal-page__container">

            <h1 className="legal-page__title">Terms & Conditions</h1>

            <p className="legal-page__intro">
              These terms outline the rules and conditions for using this
              website. By accessing or using this site, you agree to be bound by
              these terms.
            </p>

            <p className="legal-page__updated">
              Effective date: March 30, 2026
            </p>

            <div className="legal-page__content">
              <article className="legal-page__section">
                <h2 className="legal-page__section-title">
                  Use of the Website
                </h2>
                <p className="legal-page__text">
                  You agree to use this website only for lawful purposes and in a
                  way that does not infringe the rights of others or restrict
                  their use of the site.
                </p>
              </article>

              <article className="legal-page__section">
                <h2 className="legal-page__section-title">
                  Intellectual Property
                </h2>
                <p className="legal-page__text">
                  All content on this website, including visuals, branding, and
                  text, is protected and may not be reused without permission.
                </p>
              </article>

              <article className="legal-page__section">
                <h2 className="legal-page__section-title">
                  Limitation of Liability
                </h2>
                <p className="legal-page__text">
                  We are not responsible for any damages or losses resulting from
                  the use of this website or reliance on its content.
                </p>
              </article>

              <article className="legal-page__section">
                <h2 className="legal-page__section-title">
                  Changes to Terms
                </h2>
                <p className="legal-page__text">
                  These terms may be updated at any time. Continued use of the
                  website means you accept any changes.
                </p>
              </article>

              <article className="legal-page__section">
                <h2 className="legal-page__section-title">Contact</h2>
                <p className="legal-page__text">
                  For any questions regarding these terms, contact us at{" "}
                  <a
                    href="mailto:hello@example.com"
                    className="legal-page__link"
                  >
                    hello@example.com
                  </a>
                  .
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
      <BottomBar />
    </>
  );
}

export default TermsPage;