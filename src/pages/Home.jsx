import { Link } from "react-router-dom";
import "../styles/pageShared.css";
import WorkPreview from "../components/WorkPreview";
import { caseStudies } from "../data/caseStudies";


export default function Home() {
  // Build downloadable CV URL from Vite base so it works in dev and on GH Pages
  const cvUrl = `${import.meta.env.BASE_URL}Sifat-E-Noor_CV.pdf`;

  return (
    <main className="home" role="main">



      {/* HERO */}
      <section className="hero" aria-labelledby="hero-heading">
        <header className="hero-header-row">
          <img
            src={`${import.meta.env.BASE_URL}profile_1.jpg`}
            alt="Sifat-E-Noor"
            className="hero-photo"
          />
          <div className="hero-header-text">
            <p className="hero-name">Sifat-E-Noor</p>
            <h1 id="hero-heading">
              Senior UX Designer for AI-Driven Digital Products
            </h1>
          </div>
        </header>

        <p className="hero-subtitle">
          Senior UX Designer with 6+ years of experience designing complex,
          data-driven products across industry and research contexts.
          I help teams create clear, trustworthy, and usable experiences—
          especially where AI supports human decision-making.
        </p>

        <p className="hero-statement">
          I focus on turning complexity into confident user action.
        </p>

        {/* Primary hero CTAs removed per request */}
      </section>

      {/* WHAT I DO */}
      <section className="what-i-do" aria-labelledby="focus-heading">
        <h2 id="focus-heading">My Focus</h2>

        <p>
          I work closely with product and engineering teams to design <b>human-centered solutions for complex systems</b>, grounded in research, usability, and practical constraints.
        </p>

        <ul>
          <li>
            <strong>UX Research & Problem Framing: </strong>
            Defining the right problems through qualitative and quantitative research, and turning insights into clear product direction.
          </li>
          <li>
            <strong>UX & Product Design: </strong>
            Designing interactions, information architecture, and scalable design systems for enterprise and AI-enabled products.
          </li>
          <li>
            <strong>Human-Centered AI Design: </strong>
            Designing explainable, controllable, and supportive AI interactions that reduce cognitive load and build user trust.
          </li>
          <li>
            <strong>Cross-Functional Collaboration: </strong>
            Aligning design decisions with business goals and technical feasibility through close collaboration with stakeholders.
          </li>
        </ul>
      </section>

      <section className="selected-work" aria-labelledby="selected-work-heading">
        <h2 id="selected-work-heading">Selected work</h2>

        <article className="work-card">
          <h3>Designing a Scalable Virtual Collaboration Platform</h3>
          <p className="meta">
            Senior UX Designer · Synesis IT
          </p>

          <p>
            Led UX strategy and system design for an enterprise virtual collaboration platform, simplifying complex scheduling and live meeting workflows across institutional environments.
          </p>
          <p>I directed a team of six designers, defined role-based interaction models, and established a scalable design system supporting long-term product growth.</p>

          <p className="outcome">
            <strong>Outcome:</strong> Improved usability and task efficiency, increased
            enterprise adoption, and reduced interface-related support requests.
          </p>

          {/* PRIMARY CTA — placed after outcome */}
          <a href="/case-studies/synesis-convay" className="primary-btn">
            Explore the full case study
          </a>
        </article>
      </section>


      {/* AI & UX */}
      <section className="ai-philosophy" aria-labelledby="ai-heading">
        <h2 id="ai-heading">AI & Human-Centered Design</h2>

        <p>AI introduces both opportunity and responsibility. AI changes how decisions are made—and who remains accountable.</p>

        <p>My design principles:</p>
        <ul>
          <li>Explainability over opacity</li>
          <li>User agency over blind automation</li>
          <li>Cognitive support over efficiency at all costs</li>
        </ul>

        <p>
          I believe AI-enabled systems should help people make better decisions, not simply faster ones—and should always respect human judgment.
        </p>

        <Link to="/ai-and-ux" className="case-link" aria-label="Read my AI & UX approach">
          <span>Read my AI & UX approach</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
            <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </section>

      {/* CTA */}
      <section className="home-cta" aria-labelledby="cta-heading">
        <h2 id="cta-heading">Let’s Work Together</h2>

        <p>
          Open to <strong>Senior UX Designer, Product Designer (UX-focused)</strong>, and <strong>UX Researcher</strong> roles in Denmark, particularly in teams working with AI-enabled or complex digital products.
        </p>

        <div className="cta-icons" role="navigation" aria-label="Contact links">
          {/* Get in touch */}
          <Link to="/contact" className="icon-link" aria-label="Get in touch" title="Get in touch">
            {/* Envelope icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
              <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm0 2l8 5 8-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          {/* Download CV */}
          <a href={cvUrl} download className="icon-link" aria-label="Download CV (PDF)" title="Download CV (PDF)">
            {/* Download icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
              <path d="M12 3v10m0 0l-4-4m4 4l4-4M5 21h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/sifat-e-noor" target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="LinkedIn" title="LinkedIn">
            {/* LinkedIn icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
              <path d="M4.983 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.017-5zM4 9h2.5v12H4V9zm5 0h2.4v1.6h.034c.334-.63 1.152-1.296 2.374-1.296C16.613 9.304 18 10.573 18 13.067V21H15.5v-7.1c0-1.69-.6-2.545-1.874-2.545-1.02 0-1.624.688-1.89 1.352-.097.228-.121.546-.121.865V21H9V9z" />
            </svg>
          </a>
        </div>
      </section>

    </main>
  );
}