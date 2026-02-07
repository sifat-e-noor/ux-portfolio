import "../styles/pageShared.css";
import CaseStudyPager from "../components/CaseStudyPager";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import hero from "../assets/convay-meeting.png";
import dashboard from "../assets/convay-dashboard.png";
import scheduler from "../assets/convay-scheduler.png";
import management from "../assets/convay-management.png";


export default function SynesisConvay() {
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
        <h1>Designing a Scalable Virtual Collaboration Platform</h1>
        <p className="meta">
          Senior UX Designer / Team Lead · Synesis IT
        </p>
        <p className="meta viewing-status">Viewing: Case Study 2 — Conversational AI for enterprise workflows.</p>
        <CaseStudyPager current="synesis-convay" />
      </header>

      <div className="header-sentinel" aria-hidden="true"></div>

      {/* EXECUTIVE SUMMARY — SKIM LAYER */}
      <section className="case-summary">
        <ul>
          <li><strong>Product:</strong> Enterprise virtual collaboration platform</li>
          <li><strong>Focus:</strong> Scaling usability without increasing complexity</li>
          <li><strong>My role:</strong> UX strategy, system design, team leadership</li>
          <li>
            <strong>Outcome:</strong> Faster scheduling, clearer live meetings, reduced
            support friction
          </li>
        </ul>
      </section>

      {/* HERO IMAGE */}
      <figure className="case-hero">
        <img
          src={hero}
          alt="Live meeting interface showing participants and moderation controls"
        />
        <figcaption>
          Live meeting interface designed to support role awareness, moderation,
          and clarity during enterprise meetings.
        </figcaption>
      </figure>

      {/* CONTEXT */}
      <section>
        <h2>Context & Problem</h2>
        <p>
          Synesis IT’s collaboration platform supported scheduled meetings, live
          sessions, and moderated events. As adoption grew, workflows became
          fragmented and interface complexity increased—particularly for frequent
          enterprise users responsible for hosting and managing meetings.
        </p>
        <p>
          The core challenge was to scale the product without increasing cognitive
          load for frequent enterprise users while keeping interactions clear,
          predictable, and efficient.
        </p>
      </section>

      {/* ROLE */}
      <section>
        <h2>My Role & Responsibilities</h2>
        <p>
          I led UX strategy and end-to-end product design, worked closely with product
          managers and engineers, and mentored a team of six designers. I was
          responsible for system-level interaction decisions and design standards
          used across the platform.
        </p>
      </section>

      {/* RESEARCH */}
      <section>
        <h2>Research & Insights</h2>
        <p>
          Usability testing with enterprise users and internal stakeholders revealed
          three key issues:
        </p>
        <ul>

          <li>Users struggled to understand role-based controls during live meetings</li>
          <li>Scheduling workflows introduced unnecessary cognitive load</li>
          <li>System state was difficult to interpret at a glance</li>
        </ul>
      </section>

      {/* DESIGN */}
      <section>
        <h2>Design Decisions</h2>

        <figure>
          <img
            src={dashboard}
            alt="Host dashboard consolidating meeting controls"
          />
          <figcaption>
            Consolidated host dashboard reduced context switching by bringing meeting
            control, scheduling, and system status into a single workspace.
          </figcaption>
        </figure>

        <figure>
          <img
            src={scheduler}
            alt="Guided meeting scheduling flow"
          />
          <figcaption>
            Guided scheduling flow reduced fragmented inputs and helped users create
            meetings faster with clearer defaults.
          </figcaption>
        </figure>
      </section>

      {/* AI */}
      <section>
        <h2>AI Considerations</h2>
        <p>
          AI was not a core feature at the time, but the system was designed to
          support future AI-driven enhancements such as smart scheduling and meeting
          insights. Design decisions prioritised transparency and user control over
          automation.
        </p>
      </section>

        {/* BUSINESS CONTEXT */}
      <section>
        <h2>Business Context</h2>
        <p>
          For Synesis IT, reducing onboarding friction and support dependency was
          critical to scaling adoption across enterprise clients. The design changes
          supported product stability, maintainability, and long-term growth.
        </p>
      </section>

      {/* OUTCOME */}
      <section>
        <h2>Outcome & Impact</h2>
        <ul>
          <li>Improved task efficiency in scheduling and live meetings</li>
          <li>Increased adoption in enterprise contexts</li>
          <li>Reduced interface-related support requests</li>
          <li>Established a scalable design foundation for future features</li>
        </ul>
      </section>

      {/* CALLOUT */}
      <section className="callout">
        <h3>What I’d do differently</h3>
        <p>
          I would validate live-meeting state visibility earlier using rapid
          prototypes with end users to reduce later iteration cycles.
        </p>
      </section>

    </main>
  );
}
