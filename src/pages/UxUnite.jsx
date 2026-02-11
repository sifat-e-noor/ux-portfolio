import "../styles/pageShared.css";
import CaseStudyPager from "../components/CaseStudyPager";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import heroImg from "../assets/company-insights-hero.png";
import framingImg from "../assets/questionnaire-research-framing-artifact.png";
import coDesignImg from "../assets/crazy6.png";
import notionImg from "../assets/Notion-document-artifact.png";
import wireframesImg from "../assets/company-insights-wireframes.png";

export default function UxUnite() {
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
        <h1>Supporting Confident Decision-Making in a Data-Driven Product</h1>
        <p className="meta">
          Product Designer(UX) · UX Unite · Denmark
        </p>
        <p className="meta viewing-status">Viewing: Case Study 1 — Community-driven UX collaboration platform.</p>
        <CaseStudyPager current="ux-unite" />
      </header>

      <div className="header-sentinel" aria-hidden="true"></div>

      {/* Hero */}
      <section className="case-hero">
        <img
          src={heroImg}
          alt="Research insights translated into hiring history wireframes"
        />
        <p className="caption">
          Synthesised research insights informing early design concepts for
          visualising previous job posts.
        </p>
      </section>

      {/* Executive Summary */}
      <section className="case-summary">
        <ul>
          <li><strong>Product:</strong> UX Unit — Company Insights Page</li>
          <li><strong>Role:</strong> UX Researcher & Product Designer</li>
          <li><strong>Status:</strong> Work in progress</li>
          <li><strong>Focus:</strong> Hiring transparency and candidate trust</li>
        </ul>
      </section>

      {/* CONTEXT */}
      <section>
        <h2>Context & Problem</h2>
        <p>
          Candidates often lack context about a company’s hiring behaviour when
          viewing a job post. Repeated roles, hiring frequency, and team growth
          signals remain hidden, making it harder to evaluate trust and fit.
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
          <li>Planned and conducted qualitative research</li>
          <li>Synthesised findings into actionable data insights</li>
          <li>Facilitated co-design sessions with stakeholders</li>
          <li>Defined information architecture and user flows</li>
          <li>Designed early-stage wireframes and interaction design</li>
          {/* <li>Designed high-fidelity UI aligned with the design system</li>
          <li>Collaborated closely with product and engineering</li> */}
        </ul>
      </section>

      {/* RESEARCH */}
      <section>
        <h2>Research & Insights</h2>
        <p>
          Research explored how candidates perceive hiring patterns and whether
          access to previous job posts influences trust and application
          decisions.
        </p>
        <p>
          Findings showed that candidates value transparency, but only when data
          is summarised into understandable patterns rather than raw listings.
        </p>

          <figure>
          <img
            src={framingImg}
            alt="Early wireframes for previous job posts feature"
          />
          <figcaption>
            Early wireframes exploring how hiring patterns could be surfaced
            clearly and responsibly.
          </figcaption>
        </figure>
      </section>

      {/* Synthesis */}
      <section>
        <h2>Synthesis & Data Scoping</h2>
        <p>
          Research findings were consolidated into a Notion report. From the
          available job post data, I scoped down to high-signal metrics such as
          role frequency, category distribution, and recency.
        </p>
        <figure>
          <img
            src={notionImg}
            alt="Notion synthesis document artifact"
          />
          <figcaption>
            Research notes and synthesis captured in a Notion report.
          </figcaption>
        </figure>
      </section>

      {/* Co-design */}
      <section>
        <h2>Co-Design & Ideation</h2>
        <p>
          I facilitated a Crazy 6’s session with stakeholders to explore multiple
          representations of hiring history, balancing interpretability with
          feasibility.
        </p>
        <figure>
          <img
            src={coDesignImg}
            alt="Crazy 6 co-design sketches"
          />
          <figcaption>
            Quick Crazy 6 sketches used during co-design sessions.
          </figcaption>
        </figure>
      </section>

      {/* DESIGN */}
      <section>
        <h2>Design Decisions (WIP)</h2>
        <ul>
          <li>Pattern-first summaries before detailed lists</li>
          <li>Visual timelines and clusters over tables</li>
          <li>Progressive disclosure to manage cognitive load</li>
        </ul>
      </section>

      {/* VISUALS */}
      <section>
        <h2>Visuals & Flows — Research to Design</h2>

         <figure>
          <img
            src={wireframesImg}
            alt="Early wireframes for previous job posts feature"
          />
          <figcaption>
            Early wireframes exploring how hiring patterns could be surfaced
            clearly and responsibly.
          </figcaption>
        </figure>
      </section>

      {/* AI */}
      {/* <section>
        <h2>AI Considerations</h2>
        <p>
          AI operated mostly behind the scenes. I focused on ensuring outputs
          were interpretable and avoided unexplained prioritisation or hidden
          logic.
        </p>
      </section> */}

      {/* OUTCOME */}
      <section>
        <h2>Outcome & Impact</h2>
        <p>
          The work established a validated problem space, a scoped data strategy,
          and alignment across product, design, and engineering on feature
          direction.
        </p>
      </section>

      {/* CALLOUT */}
      <section className="callout" aria-labelledby="callout-heading">
        <h3 id="callout-heading">What I’d do differently</h3>
            <p>
                With more time, I would measure trust longitudinally and introduce
                clearer feedback explaining how insights evolve.
            </p>
      </section>
          {/* "Next steps would include testing candidate comprehension of hiring
          patterns and validating visual interpretations across experience
          levels." */}


      {/* REFLECTION */}
      <section>
        <h2>Reflection</h2>
        <p>
          Transparency works best when users arehelped to interpret patterns—not just presented with data.
        </p>
      </section>

    </main>
  );
}
