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
        <h1 id="hero-heading">
          Designing Human-Centered Experiences for AI-Driven Products
        </h1>

        <p className="hero-subtitle">
          Senior UX Designer with a strong research background, specialising in
          trustworthy, explainable, and usable AI-enabled digital products.
        </p>

        <p>
          I design systems where automation supports human judgment—never replaces it.
        </p>

        <div className="hero-actions" role="navigation" aria-label="Primary actions">
          <Link className="primary-btn" to="/case-study">
            View case studies
          </Link>
          <Link className="secondary-btn" to="/ai-and-ux">
            Read about AI and UX
          </Link>
        </div>
      </section>

      {/* WHAT I DO */}
      <section className="what-i-do" aria-labelledby="focus-heading">
        <h2 id="focus-heading">My Focus</h2>

        <p>
          I work at the intersection of UX, research, and AI, helping teams turn
          complexity into clear, responsible product decisions.
        </p>

        <ul>
          <li>
            <strong>UX Research & Insight:</strong> Framing problems, designing
            studies, and translating behavioral insights into actionable direction.
          </li>
          <li>
            <strong>UX & Product Design:</strong> Interaction design, information
            architecture, and prototyping for complex, data-driven systems.
          </li>
          <li>
            <strong>Human-Centered AI Design:</strong> Designing explainability,
            feedback, and human-in-the-loop interactions that build trust without
            increasing cognitive load.
          </li>
          <li>
            <strong>Product & Design Leadership:</strong> Influencing decisions
            across design, product, and engineering through evidence-based reasoning.
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

        <p>AI introduces power—and risk.</p>

        <ul>
          <li>Explainability over opacity</li>
          <li>User agency over blind automation</li>
          <li>Cognitive support over efficiency at all costs</li>
        </ul>

        <p>
          Well-designed AI should help users make better decisions, not just faster ones.
        </p>

        <Link to="/ai-and-ux">
          Read my AI & UX approach
        </Link>
      </section>

      {/* CTA */}
      <section className="home-cta" aria-labelledby="cta-heading">
        <h2 id="cta-heading">Let’s Work Together</h2>

        <p>
          Open to Senior UX Designer, Product Designer (UX-focused), and UX Researcher
          roles in Denmark.
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