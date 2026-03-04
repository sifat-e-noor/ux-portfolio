import "../styles/pageShared.css";
import CaseStudyPager from "../components/CaseStudyPager";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useCompactHeader } from "../hooks/useCompactHeader";
import { useSlideNavigation } from "../hooks/useSlideNavigation";
import hero from "../assets/convay-meeting.png";
import dashboard from "../assets/convay-dashboard.png";
import scheduler from "../assets/convay-scheduler.png";
import management from "../assets/convay-management.png";
import feedback1 from "../assets/convay-feedback-1.png";
import feedback2 from "../assets/convay-feedback-2.png";
import dashborad_status from "../assets/convay-dashboard-status.png";
import schedular_status from "../assets/convay-schedular-status.png";
import management_status from "../assets/convay-management-status.png";


export default function SynesisConvay() {
  // Initialize compact header observer
  useCompactHeader();

  const slides = [feedback1, feedback2];
  const { slideIndex, goTo, next } = useSlideNavigation('convaySlideIndex', slides.length);

  const hierarchySlides = [dashborad_status, schedular_status, management_status];
  const { slideIndex: hierarchySlideIndex, goTo: goToHierarchy, next: nextHierarchy } = useSlideNavigation('convayHierarchyIndex', hierarchySlides.length);
  return (
    <main className="case-study" role="main">

      {/* HEADER */}
      <header className="case-header">
        <Link to="/case-studies" className="case-badge" aria-label="All Case Studies"><span aria-hidden>‹</span><span>All Case Studies</span></Link>
        <h1>Convay — Designing a Scalable Virtual Collaboration Platform</h1>
        <p className="case-intro">
          As enterprise adoption increased, Synesis IT's collaboration platform
          needed to scale without adding complexity. I led the UX strategy and
          system redesign to simplify high-frequency workflows, improve role
          clarity during live meetings, and reduce cognitive load for enterprise
          users managing complex sessions.
        </p>
        <p className="meta">
          Senior UX Designer · Convay · Synesis IT 
        </p>
        <p className="meta viewing-status">Viewing: Case Study 1 — Enterprise Virtual Collaboration Platform</p>
        <CaseStudyPager current="synesis-convay" />
      </header>

      <div className="header-sentinel" aria-hidden="true"></div>

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


      {/* Highlight Metrics & Testimonial */}
      <div className="metrics-testimonial-grid">
        <aside className="metrics-card">
          <h3>Highlight Metrics</h3>
          <ul>
            <li><strong>~30%</strong> faster meeting setup</li>
            <li><strong>20%</strong> increase in daily usage</li>
            <li><strong>85%</strong> user satisfaction</li>
          </ul>
        </aside>

        <aside className="testimonial-card">
          <h3>User Feedback</h3>
          <blockquote>
            "The streamlined workflow and clear feedback made managing meetings intuitive and efficient."
            <cite>— Geetanjali Oishee, Front-end Developer, Synesis IT</cite>
          </blockquote>
        </aside>
      </div>

      {/* EXECUTIVE SUMMARY — SKIM LAYER */}
      <section className="case-summary">
        <ul>
          <li><strong>Product:</strong> Convay — Enterprise virtual collaboration platform</li>
          <li><strong>Focus:</strong> Scaling usability without increasing complexity</li>
          <li><strong>Role:</strong> UX strategist, system designer, team leadership</li>
          <li>
            <strong>Outcome:</strong> Faster scheduling, clearer live meetings, reduced
            support friction
          </li>
        </ul>
      </section>

      {/* CONTEXT */}
      <section>
        <h2>Context & Problem</h2>
        <p>
          The platform supported scheduled meetings, live sessions, and moderated
          enterprise events. As adoption grew, workflows became fragmented and
          interface complexity increased—particularly for users responsible for
          hosting and managing meetings.
        </p>
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
          To understand friction across the full meeting lifecycle — from scheduling to live moderation and post-meeting management — I conducted mixed-method research combining interviews, surveys, and competitive analysis.
        </p>

        <div className="research-cards">
          <aside className="research-card">
            <h3>Qualitative Interviews</h3>
            <ul>
              <li>15 enterprise users interviewed</li>
              <li>Friction during high-pressure hosting scenarios</li>
              <li>Poor role visibility and difficulty switching controls</li>
              <li>Challenges maintaining situational awareness during live sessions</li>
            </ul>
          </aside>

          <aside className="research-card">
            <h3>Quantitative Surveys</h3>
            <ul>
              <li>50+ respondents</li>
              <li>Scheduling complexity identified as a primary barrier</li>
              <li>Unclear system feedback hindered task efficiency</li>
            </ul>
          </aside>

          <aside className="research-card">
            <h3>Competitive Analysis</h3>
            <ul>
              <li>Feature breadth often prioritised over clarity</li>
              <li>Moderation controls are frequently fragmented</li>
              <li>Post-meeting management lacks clear workflows</li>
              <li>Opportunity identified: prioritise clarity and consolidated controls</li>
            </ul>
          </aside>
        </div>

        <p>
          These findings reframed the challenge: the issue was not missing features, but fragmented workflows and unclear system states.
        </p>

        <div className="impact-summary">
          <strong>Key insight:</strong> Enterprise users needed simplified meeting
          setup, clearer system feedback, and stronger role visibility to confidently
          manage complex sessions.
        </div>

        <p className="research-bridge">
          This insight directly informed the consolidated host dashboard and meeting
          lifecycle management flow.
        </p>
        {/* <p>
          Usability testing with enterprise users and internal stakeholders revealed
          three key issues:
        </p>
        <ul>
          <li>Users struggled to understand role-based controls during live meetings</li>
          <li>Scheduling workflows introduced unnecessary cognitive load</li>
          <li>System state was difficult to interpret at a glance</li>
        </ul> */}
      </section>

      {/* DESIGN */}
      <section>
        <h2>Design Decisions</h2>
        <p>Research showed that usability challenges stemmed from fragmented workflows
          and unclear system states. The redesign focused on restoring clarity,
          predictability, and operational confidence across the full meeting lifecycle.</p>

        {/* Workflow Structure */}
        <div className="design-block">
          <h3>Workflow Structure & Task Flow</h3>
          <p>
            Personas representing enterprise hosts and collaborators informed journey
            mapping across scheduling, joining, and managing meetings. This revealed
            unnecessary decision steps and friction points.
          </p>
          <p className="impact-summary">
            <strong>Key insight:</strong> A streamlined <strong>three-step meeting setup flow</strong> was introduced
            to reduce cognitive load and improve task predictability.
          </p>
        </div>

        {/* Host Dashboard */}
        <div className="design-block">
          <h3>Host Dashboard & Meeting Overview</h3>
          <p>
            A central dashboard provides visibility into upcoming, active, and
            completed meetings, enabling quick actions and reducing navigation
            overhead.
          </p>
          <p>
            The layout emphasises meeting status clarity and supports rapid context
            switching during high-frequency use.
          </p>

          <figure>
            <img
              src={dashboard}
              alt="Host dashboard showing meeting overview and status states"
            />
            <figcaption>
              Consolidated host dashboard reduced context switching by bringing meeting
              control, scheduling, and system status into a single workspace.
              {/* Host dashboard providing status visibility and quick access to meeting controls. */}
            </figcaption>
          </figure>
        </div>

        {/* Scheduling */}
        <div className="design-block">
          <h3>Guided Scheduling & Calendar Integration</h3>
          <p>
            Scheduling was redesigned as a structured flow with clear defaults and
            decision checkpoints. Calendar syncing enables side-by-side scheduling and
            reduces context switching with external tools.
          </p>

          <figure>
            <img
              src={scheduler}
              alt="Guided meeting scheduling flow"
            />
            <figcaption>
              Guided scheduling flow reduced fragmented inputs and helped users create
              meetings faster with clearer defaults.
              {/* Calendar integration supports faster scheduling and reduces workflow
      friction. */}
            </figcaption>
          </figure>
        </div>

        {/* Lifecycle Management */}
        <div className="design-block">
          <h3>Meeting Lifecycle & Post-Meeting Management</h3>
          <p>
            The platform was extended beyond live sessions to support full lifecycle
            management, allowing users to retrieve recordings, review attendance, and
            maintain continuity across recurring meetings.
          </p>

          <figure>
            <img
              src={management}
              alt="Post-meeting management interface showing recordings and session history"
            />
            <figcaption>
              Structured post-meeting access improves continuity and administrative
              efficiency.
            </figcaption>
          </figure>
        </div>

        {/* Feedback */}
        <div className="design-block">
          <h3>System Feedback & Action Confidence</h3>
          <p>
            Real-time feedback mechanisms — including confirmation dialogs and system
            state indicators — reassure users that actions are successful and guide
            next steps.
          </p>
        </div>

        {/* FEEDBACK SLIDESHOW (placed under Feedback section) */}
        <div className="slideshow" role="region" aria-label="User feedback slideshow">
          <div className="slides">
            {slides.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Feedback screenshot ${i + 1}`}
                className={i === slideIndex ? 'active' : ''}
                onClick={next}
              />
            ))}
          </div>
          <p className="gcaption">Clear system feedback increases confidence and reduces uncertainty.</p>
          <div className="dots" role="tablist" aria-label="Feedback slides">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === slideIndex ? 'active' : ''}`}
                aria-label={`Show slide ${i + 1}`}
                aria-pressed={i === slideIndex}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        </div>

        {/* Hierarchy */}
        <div className="design-block">
          <h3>Visual Hierarchy & State Clarity</h3>
          <p>
            Interface hierarchy was refined to distinguish upcoming, live, and
            completed sessions at a glance, improving situational awareness and
            reducing monitoring effort.
          </p>

          <div className="slideshow" role="region" aria-label="Hierarchy slides">
            <div className="slides">
              {hierarchySlides.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Hierarchy screenshot ${i + 1}`}
                  className={i === hierarchySlideIndex ? 'active' : ''}
                  onClick={nextHierarchy}
                />
              ))}
            </div>
            <p className="gcaption">Clear state visibility supports rapid scanning during active workflows.</p>
            <div className="dots" role="tablist" aria-label="Hierarchy slides">
              {hierarchySlides.map((_, i) => (
                <button
                  key={i}
                  className={`dot ${i === hierarchySlideIndex ? 'active' : ''}`}
                  aria-label={`Show slide ${i + 1}`}
                  aria-pressed={i === hierarchySlideIndex}
                  onClick={() => goToHierarchy(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OUTCOME */}
      <section>
        <h2>Outcome & Impact</h2>
        <p>Evaluation methods including usability testing, A/B testing, think-aloud
          sessions, and heuristic evaluation were used to validate core workflows
          such as scheduling, participant management, and dashboard navigation.</p>

        <div className="research-cards">
          <aside className="research-card">
            <h3>Efficiency Gains</h3>
            <ul>
              <li><strong>30% reduction</strong> in meeting setup time</li>
              <li><strong>25% faster scheduling</strong> with simplified flow</li>
              <li><strong>20% increase</strong> in task success rate</li>
            </ul>
          </aside>

          <aside className="research-card">
            <h3>User Preference & Validation</h3>
            <ul>
              <li><strong>90% preference</strong> for the simplified scheduler</li>
              <li><strong>85% found</strong> calendar integration seamless</li>
              <li>Improved clarity in participant management</li>
            </ul>
          </aside>

          <aside className="research-card">
            <h3>Usability & Confidence</h3>
            <ul>
              <li>Clearer navigation and workflow structure</li>
              <li>Improved labeling and feedback mechanisms</li>
              <li>Confirmation cues increased user confidence</li>
            </ul>
          </aside>
        </div>

        <div className="impact-summary">
          <p>
            The redesigned workflows reduced cognitive load and enabled users to
            manage meetings with greater speed, clarity, and confidence. Adoption
            increased, daily usage rose by <strong>20%</strong>, and overall user
            satisfaction reached <strong>85%</strong>. post-launch.
          </p>
        </div>

        {/* Short pull-quote reference */}
        <blockquote className="impact-quote">
          “The streamlined workflow and clear feedback made managing meetings intuitive and efficient.”
          <cite>— Geetanjali Oishee, Front-end Developer, Synesis IT</cite>
        </blockquote>
      </section>

      {/* AI */}
      <section>
        <h2>AI Considerations</h2>
        <p>
          While AI was not a core feature at the time, the system architecture
          was intentionally structured to support future smart scheduling,
          meeting summaries, and intelligent insights—prioritising transparency
          and user control.
        </p>
      </section>

      {/* BUSINESS CONTEXT */}
      <section>
        <h2>Business Context</h2>
        <p>
          Reducing onboarding friction and support dependency was essential for enterprise adoption. The redesign improved stability, maintainability, and long-term scalability.
          {/* For Synesis IT, reducing onboarding friction and support dependency was
          critical to scaling adoption across enterprise clients. The design changes
          supported product stability, maintainability, and long-term growth. */}
        </p>
      </section>

      {/* CALLOUT */}
      <section>
        <h2>What I’d Do Differently</h2>
        <p className="callout">
          I would validate live-meeting state visibility earlier through rapid
          interactive prototyping with enterprise hosts to reduce later
          iteration cycles.
        </p>
      </section>
      {/* h3 callout header */}

      {/* REFLECTION */}
      <section>
        <h2>Reflection</h2>
        <p>
          Scaling enterprise systems is not about adding features. It is about
          clarifying structure. Role transparency and workflow discipline were
          foundational to sustainable usability in this product.
        </p>
      </section>

    </main>
  );
}
