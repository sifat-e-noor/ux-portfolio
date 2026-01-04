import { Link } from "react-router-dom";
import "../styles/Home.css";
import WorkPreview from "../components/WorkPreview";
import { caseStudies } from "../data/caseStudies";


export default function Home() {
  // Build downloadable CV URL from Vite base so it works in dev and on GH Pages
  const cvUrl = `${import.meta.env.BASE_URL}cv.pdf`;

  return (
    <main className="home" role="main">

      

      {/* HERO */}
      <section className="hero" aria-labelledby="hero-heading">
        <header className="hero-header-row">
          <img
            src={`${import.meta.env.BASE_URL}profile.jpg`}
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

        <div
          className="hero-actions"
          role="navigation"
          aria-label="Primary actions"
        >
          <Link to="/work" className="primary-btn">
            View case studies
          </Link>
          <Link to="/ai-and-ux" className="secondary-btn">
            AI & UX approach
          </Link>
        </div>
      </section>

      {/* WHAT I DO */}
      <section className="what-i-do" aria-labelledby="focus-heading">
        <h2 id="focus-heading">My Focus</h2>

        <p>
          I work closely with product and engineering teams to design <b>human-centered solutions for complex systems</b>, grounded in research, usability, and practical constraints.
        </p>

        <ul>
          <li>
            <strong>UX Research & Problem Framing</strong> 
              Defining the right problems through qualitative and quantitative research, and turning insights into clear product direction.
          </li>
          <li>
            <strong>UX & Product Design</strong> 
              Designing interactions, information architecture, and scalable design systems for enterprise and AI-enabled products.
          </li>
          <li>
            <strong>Human-Centered AI Design</strong> 
              Designing explainable, controllable, and supportive AI interactions that reduce cognitive load and build user trust.
          </li>
          <li>
            <strong>Cross-Functional Collaboration</strong> 
              Aligning design decisions with business goals and technical feasibility through close collaboration with stakeholders.
          </li>
        </ul>
      </section>

      {/* SELECTED WORK */}
      <section className="selected-work" aria-labelledby="work-heading">
        <h2 id="work-heading">Selected Work</h2>

        {/* injected component below */}
        {caseStudies.map((work) => (
            <WorkPreview key={work.id} {...work} />
        ))}

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

        <Link to="/ai-and-ux">
          Read my AI & UX approach
        </Link>
      </section>

      {/* CTA */}
      <section className="home-cta" aria-labelledby="cta-heading">
        <h2 id="cta-heading">Let’s Work Together</h2>

        <p>
          Open to <strong>Senior UX Designer, Product Designer (UX-focused)</strong>, and <strong>UX Researcher</strong> roles in Denmark, particularly in teams working with AI-enabled or complex digital products.
        </p>

        <div className="cta-actions" role="navigation" aria-label="Contact actions">
          <Link className="primary-btn" to="/contact">
            Get in touch
          </Link>
          <Link className="secondary-btn" to="/cv">
            View CV
          </Link>
          <a className="secondary-btn" href={cvUrl} download>
            Download CV (PDF)
          </a>
        </div>
      </section>

    </main>
  );
}