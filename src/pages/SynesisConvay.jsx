import "../styles/pageShared.css";
import CaseStudyPager from "../components/CaseStudyPager";

export default function SynesisConvay() {
  return (
    <main className="case-study" role="main">
      <CaseStudyPager current="synesis-convay" />

      {/* HEADER */}
      <header className="case-header">
        <h1>Designing a Scalable Virtual Collaboration Platform</h1>
        <p className="meta">
          Senior UX Designer / Team Lead · Synesis IT
        </p>
        <p className="meta">Viewing: Case Study 2 — Conversational AI for enterprise workflows.</p>
      </header>

      {/* CONTEXT */}
      <section>
        <h2>Context & Problem</h2>
        <p>
          Synesis IT developed a virtual meeting platform for enterprise and
          institutional use. Existing tools suffered from feature overload,
          unclear controls, and limited accessibility, which reduced adoption
          and effective collaboration.
        </p>
        <p>
          The goal was to design a platform that prioritised clarity,
          reliability, and scalability.
        </p>
      </section>

      {/* ROLE */}
      <section>
        <h2>My Role & Responsibilities</h2>
        <ul>
          <li>Set UX strategy and overall design direction</li>
          <li>Led and mentored a team of six designers</li>
          <li>Planned and coordinated research and usability testing</li>
          <li>Defined and maintained a shared design system</li>
        </ul>
      </section>

      {/* RESEARCH */}
      <section>
        <h2>Research & Insights</h2>
        <ul>
          <li>Conducted usability testing with enterprise users</li>
          <li>Identified friction around meeting setup and moderation</li>
          <li>
            Found that users valued predictability and clarity over advanced
            features
          </li>
        </ul>
      </section>

      {/* DESIGN */}
      <section>
        <h2>Design Decisions</h2>
        <ul>
          <li>Simplified meeting controls and reduced visual complexity</li>
          <li>Designed clear role-based permissions and system states</li>
          <li>Ensured consistency through a shared design system</li>
        </ul>
      </section>

      {/* VISUALS */}
      <section>
        <h2>Visuals & Flows</h2>

        <figure>
          <img
            src="/images/synesis-flow.png"
            alt="User flow showing meeting setup and role-based controls"
          />
          <figcaption>
            Simplified meeting setup and moderation flow.
          </figcaption>
        </figure>

        <figure>
          <img
            src="/images/synesis-ui.png"
            alt="Virtual meeting interface with simplified controls"
          />
          <figcaption>
            Reduced visual complexity to support enterprise use.
          </figcaption>
        </figure>
      </section>

      {/* AI */}
      <section>
        <h2>AI Considerations</h2>
        <p>
          AI was not central to this product. However, I designed workflows with
          future automation in mind by preserving user control and avoiding
          hidden system behaviour that could reduce trust.
        </p>
      </section>

      {/* OUTCOME */}
      <section>
        <h2>Outcome & Impact</h2>
        <ul>
          <li>Improved usability and task efficiency</li>
          <li>Increased adoption in enterprise contexts</li>
          <li>Reduced support requests related to interface confusion</li>
        </ul>
      </section>

      {/* CALLOUT */}
      <section className="callout">
        <h3>What I’d do differently</h3>
        <p>
          I would introduce formal accessibility audits earlier in the process
          to reduce retrofitting and ensure broader enterprise readiness from
          the outset.
        </p>
      </section>

      {/* REFLECTION */}
      <section>
        <h2>Reflection</h2>
        <p>
          This project reinforced the importance of prioritising clarity and
          predictability over feature richness in enterprise collaboration
          tools.
        </p>
      </section>

    </main>
  );
}
