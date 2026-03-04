import "../styles/pageShared.css";
import CaseStudyPager from "../components/CaseStudyPager";
import { Link } from "react-router-dom";
import { useCompactHeader } from "../hooks/useCompactHeader";
import { useSlideNavigation } from "../hooks/useSlideNavigation";
import heroImg from "../assets/company-insights-hero.png";
import framingImg from "../assets/questionnaire-research-framing-artifact.png";
import coDesignImg from "../assets/crazy6.png";
import notionImg from "../assets/Notion-document-artifact.png";
import wireframesImg from "../assets/company-insights-wireframes.png";

export default function UxUnite() {
  // Initialize compact header observer
  useCompactHeader();

  // slide data for research images
  const researchSlides = [framingImg, notionImg];
  const researchSlideAlts = [
    "Early wireframes for previous job posts feature",
    "Notion synthesis document artifact",
  ];
  const {
    slideIndex: researchIndex,
    goTo: goToResearch,
    next: nextResearch,
  } = useSlideNavigation("uxuniteResearchIndex", researchSlides.length);

  // slide data for design images
  const designSlides = [wireframesImg, coDesignImg];
  const designSlideAlts = [
    "Early wireframes for previous job posts feature",
    "Crazy 6 co-design sketches",
  ];
  const {
    slideIndex: designIndex,
    goTo: goToDesign,
    next: nextDesign,
  } = useSlideNavigation("uxuniteDesignIndex", designSlides.length);

  return (
    <main className="case-study" role="main">

      {/* HEADER */}
      <header className="case-header">
        <Link to="/case-studies" className="case-badge" aria-label="All Case Studies"><span aria-hidden>‹</span><span>All Case Studies</span></Link>
        <h1>Company Insights — Hiring Transparency for Confident Candidate Decisions</h1>
        <p className="case-intro">
          Researching and designing hiring transparency features to help candidates
          interpret company hiring patterns and make informed application decisions
          with greater confidence.
        </p>
        <p className="meta">
          Product Designer(UX) · Company Insight Page · UX Unite
        </p>
        <p className="meta viewing-status">Viewing: Case Study 2 — Hiring Transparency Feature (WIP)</p>
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
          <li><strong>Product:</strong> Company Insights — Hiring Transparency Feature</li>
          <li><strong>Role:</strong> Product Designer (UX)</li>
          <li><strong>Focus:</strong> Hiring transparency and candidate trust</li>
          <li><strong>Status:</strong> Work in progress</li>
        </ul>
      </section>

      {/* CONTEXT */}
      <section>
        <h2>Context & Problem</h2>
        <p>
          Candidates often lack visibility into a company’s hiring behaviour when
          evaluating job posts. Signals such as repeated roles, hiring frequency,
          and team growth trends remain hidden, limiting informed decision-making.
        </p>
        <p>
          The challenge was to surface meaningful hiring patterns without increasing
          cognitive load.
        </p>
      </section>

      {/* RESEARCH */}
      <section>
        <h2>Research & Insights</h2>
        <p>
          Research explored how candidates interpret hiring patterns and whether
          access to previous job posts influences trust and application decisions.
        </p>
        <p>
          Research findings were consolidated into a Notion report. From the
          available job post data, scoped down to high-signal metrics such as
          role frequency, category distribution, and recency.
        </p>
        <p>
          Findings revealed that transparency is valued only when data is
          synthesised into clear patterns rather than presented as raw listings.
          The opportunity was to design for interpretability, not data exposure.
        </p>

        <div className="slideshow" role="region" aria-label="Research artifacts slideshow">
          <div className="slides">
            {researchSlides.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={researchSlideAlts[i]}
                className={i === researchIndex ? "active" : ""}
                onClick={nextResearch}
              />
            ))}
          </div>
          <p className="gcaption">
            Key artifacts from the research phase: framing wireframes and the
            synthesized Notion document.
          </p>
          <div className="dots" role="tablist" aria-label="Research slides">
            {researchSlides.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === researchIndex ? "active" : ""}`}
                aria-label={`Show slide ${i + 1}`}
                aria-pressed={i === researchIndex}
                onClick={() => goToResearch(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* DESIGN */}
      <section>
        <h2>Design Decisions (WIP)</h2>
        <p>
          Facilitated a Crazy 6’s session with stakeholders and team members to explore multiple
          representations of hiring history, balancing interpretability with
          feasibility.
        </p>
        <ul>
          <li>Pattern-first summaries before detailed job listings</li>
          <li>Visual timelines and clustered representations over dense tables</li>
          <li>Progressive disclosure to manage cognitive load</li>
        </ul>

        <div className="slideshow" role="region" aria-label="Design artifacts slideshow">
          <div className="slides">
            {designSlides.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={designSlideAlts[i]}
                className={i === designIndex ? "active" : ""}
                onClick={nextDesign}
              />
            ))}
          </div>
          <p className="gcaption">
            Early design artifacts including wireframes and co-design sketches.
          </p>
          <div className="dots" role="tablist" aria-label="Design slides">
            {designSlides.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === designIndex ? "active" : ""}`}
                aria-label={`Show slide ${i + 1}`}
                aria-pressed={i === designIndex}
                onClick={() => goToDesign(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* AI */}
      <section>
        <h2>AI Considerations</h2>
        <p>
          The system was designed to support future AI-assisted pattern detection
          and hiring insights while maintaining transparency and user control
          over how information is surfaced.
        </p>
      </section>

      {/* Business Context */}
      <section>
        <h2>Business Context</h2>
        <p>
          Improving hiring transparency supports platform credibility, strengthens
          candidate trust, and differentiates UX Unite as a responsible,
          insight-driven collaboration platform.
        </p>
      </section>

      {/* OUTCOME */}
      <section>
        <h2>Outcome & Impact</h2>
        <p>
          The work established a validated problem space, a scoped data strategy,
          and cross-functional alignment across product, design, and engineering.
        </p>
        <p>
          It reframed the feature direction from “show more data” to “design for
          clarity and trust.”
        </p>
      </section>

      {/* CALLOUT */}
      <section>
        <h2>What I’d Do Differently</h2>
        <p className="callout">
          With more time, I would measure trust longitudinally and introduce clearer
          feedback explaining how hiring insights evolve over time.
        </p>
      </section>
      {/* "Next steps would include testing candidate comprehension of hiring
          patterns and validating visual interpretations across experience
          levels." */}


      {/* REFLECTION */}
      <section>
        <h2>Reflection</h2>
        <p>
          Transparency works best when users are supported in interpreting patterns —
          not simply presented with more data.
        </p>
      </section>

    </main>
  );
}
