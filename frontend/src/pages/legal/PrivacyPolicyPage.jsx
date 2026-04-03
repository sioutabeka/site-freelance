import TopBar from "../../components/layout/TopBar";
import Navbar from "../../components/layout/Navbar";
import FooterSection from "../../components/layout/FooterSection";
import BottomBar from "../../components/layout/BottomBar";
import "../../styles/sections/LegalPage.css";

function PrivacyPolicyPage() {
  return (
    <>
      <TopBar />
      <Navbar />

      <main className="legal-page">
        <section className="legal-page__main">
          <div className="legal-page__container">

            <h1 className="legal-page__title">Privacy Policy</h1>

            <p className="legal-page__intro">
              We respect your privacy and are committed to protecting your
              personal information. This page explains what data may be
              collected, how it may be used, and the choices you have when using
              this website.
            </p>

            <p className="legal-page__updated">
              Effective date: March 30, 2026
            </p>

            <div className="legal-page__content">
              <article className="legal-page__section">
                <h2 className="legal-page__section-title">
                  Information We Collect
                </h2>
                <p className="legal-page__text">
                  When you browse this website, certain technical information may
                  be collected automatically, such as your browser type, device
                  information, IP address, time zone, and website activity.
                </p>
                <p className="legal-page__text">
                  If you contact us or submit information through a form, we may
                  also collect personal details you choose to provide.
                </p>
                <ul className="legal-page__list">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Billing or shipping information if relevant</li>
                  <li>Any message or inquiry you submit</li>
                </ul>
              </article>

              <article className="legal-page__section">
                <h2 className="legal-page__section-title">
                  How We Use Your Information
                </h2>
                <p className="legal-page__text">
                  Your information may be used to operate the website, respond to
                  inquiries, improve services, process orders, and provide a
                  smoother user experience.
                </p>
                <ul className="legal-page__list">
                  <li>To communicate with you</li>
                  <li>To provide customer support</li>
                  <li>To improve website performance and usability</li>
                  <li>To process purchases or service requests</li>
                  <li>To prevent fraud or misuse</li>
                </ul>
              </article>

              <article className="legal-page__section">
                <h2 className="legal-page__section-title">
                  Sharing of Information
                </h2>
                <p className="legal-page__text">
                  We may work with trusted third-party services that help us run
                  the website and business operations, such as payment
                  processors, analytics providers, and email or hosting tools.
                </p>
                <p className="legal-page__text">
                  We only share information when necessary for those services to
                  function properly.
                </p>
              </article>

              <article className="legal-page__section">
                <h2 className="legal-page__section-title">Cookies</h2>
                <p className="legal-page__text">
                  This website may use cookies or similar technologies to improve
                  browsing, measure performance, and understand visitor
                  behavior.
                </p>
                <p className="legal-page__text">
                  You can usually control cookies through your browser settings.
                </p>
              </article>

              <article className="legal-page__section">
                <h2 className="legal-page__section-title">Your Rights</h2>
                <p className="legal-page__text">
                  Depending on your location, you may have the right to request
                  access to your personal information, ask for corrections, or
                  request deletion of your data.
                </p>
                <p className="legal-page__text">
                  To make a request, please contact us directly.
                </p>
              </article>

              <article className="legal-page__section">
                <h2 className="legal-page__section-title">Contact</h2>
                <p className="legal-page__text">
                  If you have any questions about this Privacy Policy, you can
                  contact us at{" "}
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

export default PrivacyPolicyPage;