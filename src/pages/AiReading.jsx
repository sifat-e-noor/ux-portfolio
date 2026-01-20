import "../styles/pageShared.css";
import CaseStudyPager from "../components/CaseStudyPager";

export default function AiReading() {
  return (
    <main className="case-study" role="main">

      {/* HEADER */}
      <header className="case-header">
          <a href={`${import.meta.env.BASE_URL}case-studies`} className="case-badge" aria-label="All Case Studies"><span aria-hidden>‹</span><span>All Case Studies</span></a>
        <h1>Evaluating Cognitive Load in AI-Generated Content</h1>
        <p className="meta">
          UX Researcher · Human-Centered AI · DTU
        </p>
        <p className="meta">Viewing: Case Study 3 — Assistive reading tools powered by AI.</p>
        <CaseStudyPager current="ai-reading" />
      </header>

      {/* CONTEXT */}
      <section>
        <h2>Context & Problem</h2>
        <p>
          As AI-generated content becomes common in digital products, teams need
          to understand how it affects usability, comprehension, and trust.
        </p>
        <p>
          The goal of this research was to examine how users read and process
          AI-generated text compared to human-authored content.
        </p>
      </section>

      {/* ROLE */}
      <section>
        <h2>My Role & Responsibilities</h2>
        <ul>
          <li>Designed and conducted experimental UX research</li>
          <li>Collected and analysed eye-tracking and behavioural data</li>
          <li>Interpreted findings with direct relevance to product design</li>
        </ul>
      </section>

      {/* RESEARCH */}
      <section>
        <h2>Research & Insights</h2>
        <ul>
          <li>Measured fixation duration, regressions, and reading behaviour</li>
          <li>
            Identified differences in cognitive load depending on content origin
          </li>
          <li>
            Found implications for how AI-generated content should be presented
          </li>
        </ul>
      </section>

      {/* DESIGN */}
      <section>
        <h2>Design Decisions</h2>
        <ul>
          <li>Translated findings into practical design guidance</li>
          <li>Emphasised transparency and content framing</li>
          <li>
            Informed how AI-assisted content should be introduced in interfaces
          </li>
        </ul>
      </section>

      {/* VISUALS */}
      <section>
        <h2>Visuals & Flows</h2>

        <figure>
          <img
            src="/images/ai-reading-setup.png"
            alt="Eye-tracking experiment setup"
          />
          <figcaption>
            Experimental setup measuring reading behaviour.
          </figcaption>
        </figure>

        <figure>
          <img
            src="/images/ai-reading-results.png"
            alt="Visualisation of eye-tracking metrics"
          />
          <figcaption>
            Eye-tracking metrics informing UX design decisions.
          </figcaption>
        </figure>
      </section>

      {/* AI */}
      <section>
        <h2>AI Considerations</h2>
        <p>
          This research directly addressed trust, cognitive effort, and design
          responsibility in AI-enabled systems.
        </p>
      </section>

      {/* OUTCOME */}
      <section>
        <h2>Outcome & Impact</h2>
        <ul>
          <li>Published at ETRA ’25</li>
          <li>
            Provided evidence-based guidance applicable to AI-enabled products
          </li>
          <li>
            Informed my industry work on AI and content design decisions
          </li>
        </ul>
      </section>

      {/* CALLOUT */}
      <section className="callout">
        <h3>What I’d do differently</h3>
        <p>
          I would complement controlled experiments with real product usage data
          to better connect research findings with day-to-day user behaviour.
        </p>
      </section>

      {/* REFLECTION */}
      <section>
        <h2>Reflection</h2>
        <p>
          This work strengthened my approach to designing AI-enabled systems that
          respect human cognition and decision-making.
        </p>
      </section>

    </main>
  );
}
