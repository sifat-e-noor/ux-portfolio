import "../styles/pageShared.css";
import CaseStudyPager from "../components/CaseStudyPager";

export default function UxUnite() {
  return (
    <main className="case-study" role="main">
      <CaseStudyPager current="ux-unite" />

      {/* HEADER */}
      <header className="case-header">
        <h1>Supporting Confident Decision-Making in a Data-Driven Product</h1>
        <p className="meta">
          Product Designer(UX) · UX Unite · Denmark
        </p>
        <p className="meta">Viewing: Case Study 1 — Community-driven UX collaboration platform.</p>
      </header>

      {/* CONTEXT */}
      <section>
        <h2>Context & Problem</h2>
        <p>
          UX Unite is a data-driven product supporting professionals in
          understanding company history, job trends, and organisational signals.
          Early versions presented complex information without sufficient
          structure, making it difficult for users to interpret insights
          confidently.
        </p>
        <p>
          The challenge was to improve clarity and decision support without
          increasing cognitive load.
        </p>
      </section>

      {/* ROLE */}
      <section>
        <h2>My Role & Responsibilities</h2>
        <ul>
          <li>Owned UX research and interaction design</li>
          <li>Defined information architecture and user flows</li>
          <li>Designed high-fidelity UI aligned with the design system</li>
          <li>Collaborated closely with product and engineering</li>
        </ul>
      </section>

      {/* RESEARCH */}
      <section>
        <h2>Research & Insights</h2>
        <p>
          I conducted user interviews and usability testing to understand how
          users interpreted data-heavy views.
        </p>
        <ul>
          <li>Users struggled with prioritising information</li>
          <li>Data was trusted, presentation was not</li>
          <li>Users wanted clarity on why insights were shown</li>
        </ul>
        <p>
          <strong>Key insight:</strong> Trust depended more on structure than
          data accuracy.
        </p>
      </section>

      {/* DESIGN */}
      <section>
        <h2>Design Decisions</h2>
        <ul>
          <li>Re-structured information hierarchy</li>
          <li>Introduced progressive disclosure</li>
          <li>Designed comparison views instead of dashboards</li>
          <li>Standardised interaction patterns</li>
        </ul>
      </section>

      {/* VISUALS */}
      <section>
        <h2>Visuals & Flows</h2>

        <figure>
          <img
            src="/images/uxunite-flow.png"
            alt="User flow showing structured decision-making steps"
          />
          <figcaption>
            Core user flow redesigned to reduce cognitive load.
          </figcaption>
        </figure>

        <figure>
          <img
            src="/images/uxunite-ui.png"
            alt="High-fidelity UI showing comparison-based data presentation"
          />
          <figcaption>
            Comparison-based layout replacing dense dashboards.
          </figcaption>
        </figure>
      </section>

      {/* AI */}
      <section>
        <h2>AI Considerations</h2>
        <p>
          AI operated mostly behind the scenes. I focused on ensuring outputs
          were interpretable and avoided unexplained prioritisation or hidden
          logic.
        </p>
      </section>

      {/* OUTCOME */}
      <section>
        <h2>Outcome & Impact</h2>
        <ul>
          <li>Improved clarity in decision-making flows</li>
          <li>Increased confidence using data-driven features</li>
          <li>Established a scalable UX foundation</li>
        </ul>
      </section>

      {/* CALLOUT */}
      <section className="callout" aria-labelledby="callout-heading">
        <h3 id="callout-heading">What I’d do differently</h3>
            <p>
                I would validate the information hierarchy through longer-term usage data
                to better understand how user trust and interpretation evolve beyond
                initial onboarding.
            </p>
      </section>


      {/* REFLECTION */}
      <section>
        <h2>Reflection</h2>
        <p>
          With more time, I would measure trust longitudinally and introduce
          clearer feedback explaining how insights evolve.
        </p>
      </section>

    </main>
  );
}
