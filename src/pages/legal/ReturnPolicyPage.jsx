import TopBar from "../../components/layout/TopBar";
import Navbar from "../../components/layout/Navbar";
import FooterSection from "../../components/layout/FooterSection";
import BottomBar from "../../components/layout/BottomBar";
import "../../styles/sections/LegalPage.css";

function ReturnPolicyPage() {
  return (
    <>
      <TopBar />
      <Navbar />

      <main className="legal-page">
        <section className="legal-page__main">
          <div className="legal-page__container">

            <h1 className="legal-page__title">Return Policy</h1>

            <p className="legal-page__intro">
              This page outlines the conditions under which returns, refunds, or
              exchanges may be accepted.
            </p>

            <p className="legal-page__updated">
              Effective date: March 30, 2026
            </p>

            <div className="legal-page__content">
              <article className="legal-page__section">
                <h2 className="legal-page__section-title">
                  Return Eligibility
                </h2>
                <p className="legal-page__text">
                  Items may be returned within a specified period if they are in
                  their original condition and unused.
                </p>
              </article>

              <article className="legal-page__section">
                <h2 className="legal-page__section-title">
                  Refund Process
                </h2>
                <p className="legal-page__text">
                  Once your return is received and inspected, we will notify you
                  regarding the approval of your refund.
                </p>
              </article>

              <article className="legal-page__section">
                <h2 className="legal-page__section-title">
                  Exchanges
                </h2>
                <p className="legal-page__text">
                  Exchanges are possible depending on product availability. If
                  you need a replacement, contact us directly.
                </p>
              </article>

              <article className="legal-page__section">
                <h2 className="legal-page__section-title">
                  Shipping Costs
                </h2>
                <p className="legal-page__text">
                  Shipping fees for returns may vary depending on your location
                  and are generally non-refundable.
                </p>
              </article>

              <article className="legal-page__section">
                <h2 className="legal-page__section-title">Contact</h2>
                <p className="legal-page__text">
                  For any return request, contact us at{" "}
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

export default ReturnPolicyPage;