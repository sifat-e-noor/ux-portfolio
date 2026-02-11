import "../styles/pageShared.css";
import CaseStudyPager from "../components/CaseStudyPager";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero-image.png";
import wireframeOnboarding from "../assets/Onboarding.png";
import wireframeContext from "../assets/Enviornment_Capture_Screen.png";
import wireframeReader from "../assets/Reading_Interface.png";
import readsenseVideo from "../videos/readsense-simulation.webm?url";

export default function AiReading() {
  useEffect(() => {
    const header = document.querySelector('.case-header');
    const sentinel = document.querySelector('.header-sentinel');
    if (!header || !sentinel) return;
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      header.classList.toggle('compact', !entry.isIntersecting);
    }, { threshold: 0 });
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);
  return (
    <main className="case-study" role="main">

      {/* HEADER */}
      <header className="case-header">
          <Link to="/case-studies" className="case-badge" aria-label="All Case Studies"><span aria-hidden>‹</span><span>All Case Studies</span></Link>
        <h1>Reading the Reader — Real-World Reading Behaviour Tool</h1>
        <p className="meta">
          UX Researcher & Product Designer · ReadSense · DTU
        </p>
        <p className="meta viewing-status">Viewing: Case Study 3 — Assistive reading tool.</p>
        <CaseStudyPager current="ai-reading" />
      </header>

      <div className="header-sentinel" aria-hidden="true"></div>

      {/* Executive Summary */}
      <section className="case-summary">
        <ul>
          <li><strong>Client / Project:</strong> Reading the Reader (Research)</li>
          <li><strong>Role:</strong> UX Designer & Front-end Developer</li>
          <li><strong>Focus:</strong> Ethical data capture in natural reading contexts</li>
          <li><strong>Outcome:</strong> Functional prototype supporting in-situ reading research</li>
        </ul>
      </section>

        {/* HERO VISUAL */}
        <figure className="case-hero">
        <img
            src={heroImage}
            alt="Reading interface with adjustable typography controls"
        />
        <figcaption>
          Core reading interface designed to support natural reading while quietly
          collecting behavioural and preference data.
        </figcaption>
        </figure>

      {/* Context & Problem */}
      <section>
        <h2>Context & Problem</h2>
        <p>
          Traditional reading studies often rely on lab-based setups that fail
          to reflect how people read in everyday environments. Researchers
          behind the <em>Reading the Reader</em> project needed a tool that could
          capture reading behaviour and preferences without disrupting the act
          of reading itself.
        </p>
      </section>

      {/* Role & Responsibilities */}
      <section>
        <h2>My Role & Responsibilities</h2>
        <ul>
          <li>UX research and interaction design</li>
          <li>Designing consent-first onboarding flows</li>
          <li>Developing an interactive reading prototype</li>
          <li>Collaborating closely with academic researchers</li>
        </ul>
      </section>

      {/* Research & Insights */}
      <section>
        <h2>Research & Insights</h2>
        <p>
          Early discussions with researchers highlighted the need for:
          unobtrusive data capture, contextual awareness (environment, time,
          lighting), and flexible reading preferences without overwhelming the
          user.
        </p>
      </section>

      {/* Design Decisions */}
      <section>
        <h2>Design Decisions</h2>
        <ul>
          <li>Introduced lightweight onboarding with explicit research consent</li>
          <li>Captured contextual data through simple environment selectors</li>
          <li>Provided adjustable typography controls without interrupting reading</li>
          <li>Designed unobtrusive data logging aligned with ethical standards</li>
          <li>Minimised interruptions during active reading</li>
          <li>Surfaced controls only when explicitly needed</li>
        </ul>
      </section>

      {/* Visuals & Flows */}
      <section className="case-visuals">
        <h2>Visuals & Flows — wireframes</h2>
        <p>
          Key wireframes illustrate how the application supports natural reading
          while enabling ethical, real-environment data collection.
        </p>

        <div className="wireframe-grid">
          <figure>
            <img src={wireframeOnboarding} alt="Consent-first onboarding" />
            <figcaption>
              Consent-driven onboarding clearly explaining research intent.
            </figcaption>
          </figure>

          <figure>
            <img src={wireframeContext} alt="Reading environment capture" />
            <figcaption>
              Lightweight capture of environment and reading context.
            </figcaption>
          </figure>

          <figure>
            <img src={wireframeReader} alt="Reading interface" />
            <figcaption>
              Reading interface prioritising content with optional preferences.
            </figcaption>
          </figure>

          <figure className="video-figure">
            <video controls>
              <source src={readsenseVideo} type="video/webm" />
            </video>
            <figcaption>
              Short simulation showing real reading interaction and unobtrusive
              preference capture.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* OUTCOME */}
      <section>
        <h2>Outcome & Impact</h2>
        <p>The resulting prototype enabled researchers to observe reading
          behaviour in authentic settings while maintaining user trust and
          attention. The tool successfully balanced research needs with a
          reader-first experience.
        </p>
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
          With more time, I would further validate long-term reading sessions and
          explore passive context sensing to reduce manual input even further.
        </p>
      </section>

      {/* REFLECTION */}
      <section>
        <h2>Reflection</h2>
        <p>
          Designing for research does not require sacrificing user experience when ethical clarity and interaction
          restraint are prioritised.g AI-enabled systems that
          respect human cognition and decision-making.
        </p>
      </section>

    </main>
  );
}
