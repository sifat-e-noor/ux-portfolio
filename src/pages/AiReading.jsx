import "../styles/pageShared.css";
import CaseStudyPager from "../components/CaseStudyPager";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero-image.png";
import wireframeOnboarding from "../assets/Onboarding.png";
import wireframeContext from "../assets/Enviornment_Capture_Screen.png";
import wireframeReader from "../assets/Reading_Interface.png";
import readingInterface from "../assets/Reading_Interface.png";
import adjustableSettings from "../assets/Adjustable_Reading_Settings_panel_focus.png";
import surfaceControlSmall from "../assets/Surface-control-small-screen.png";
import postFeedback from "../assets/Post_Feedback.png";
import visualImpact from "../assets/Visual-Impact.png";
import readsenseVideo from "../videos/readsense-simulation.webm?url";
import { useCompactHeader } from "../hooks/useCompactHeader";
import { useSlideNavigation } from "../hooks/useSlideNavigation";

export default function AiReading() {
  // Initialize compact header observer
  useCompactHeader();

  // Interface controls slides
  const interfaceSlides = [readingInterface, adjustableSettings, surfaceControlSmall];
  const { slideIndex, goTo, next } = useSlideNavigation('aiReadingInterfaceIndex', interfaceSlides.length);

  const feedbackSlides = [visualImpact, postFeedback];
  const { slideIndex: feedbackSlideIndex, goTo: goToFeedback, next: nextFeedback } = useSlideNavigation('aiReadingFeedbackIndex', feedbackSlides.length);



  return (
    <main className="case-study" role="main">

      {/* HEADER */}
      <header className="case-header">
        <Link to="/case-studies" className="case-badge" aria-label="All Case Studies"><span aria-hidden>‹</span><span>All Case Studies</span></Link>
        <h1>ReadSense — Real-World Reading Behaviour Tool</h1>
        <p className="case-intro">
          Designing and developing a research-grade reading application to
          capture authentic reading behaviour and preferences in real-world
          environments.
        </p>
        <p className="meta">
          UX Researcher, Designer & Developer· ReadSense · DTU
        </p>
        <p className="meta viewing-status">Viewing: Case Study 3 — Real-World Reading Behaviour Research Tool</p>
        <CaseStudyPager current="ai-reading" />
      </header>

      <div className="header-sentinel" aria-hidden="true"></div>

      {/* HERO VISUAL */}
      <figure className="case-hero">
        <img
          src={heroImage}
          alt="Reading interface with adjustable typography controls"
        />
        <figcaption>
          Consistent reading interface across devices and screen sizes supports natural reading while unobtrusively capturing behavioural and preference data, enabling real-world research on reading patterns across contexts.
        </figcaption>
      </figure>

      {/* Highlight Metrics & Testimonial */}
      <div className="metrics-testimonial-grid">
        <aside className="metrics-card">
          <h3>Highlight Metrics</h3>
          <ul>
            <li><strong>14</strong> Participants in prototype evaluation</li>
            <li><strong>100%</strong> Task completion across test conditions</li>
            <li><strong>2 Methods</strong> Semi-structured evaluation + think-aloud testing</li>
          </ul>
        </aside>

        <aside className="testimonial-card">
          <h3>User Feedback</h3>
          <blockquote>
            "I would be interested in using this application for reading, it has a nice interface and seems like I would be able to log
            my reading preferences."
            <cite>— Female, 26, University Student, Avid reader, High-tech Proficiency</cite>
          </blockquote>
        </aside>
      </div>

      {/* Executive Summary */}
      <section className="case-summary">
        <ul>
          <li><strong>Project:</strong> ReadSense — Real-World Reading Research Tool</li>
          <li><strong>Role:</strong> UX Researcher, Designer & Developer</li>
          <li><strong>Focus:</strong> Ethical data capture in natural reading contexts</li>
          <li><strong>Outcome:</strong> Functional prototype supporting in-situ reading research</li>
        </ul>
      </section>

      {/* Context & Problem */}
      <section>
        <h2>Context & Problem</h2>
        <p>
          Traditional reading studies rely on lab-based setups that fail to reflect
          real-world reading behaviour. Researchers behind the <em>Reading the Reader</em> project needed a tool capable of capturing behavioural patterns and preferences
          in natural environments without disrupting the act of reading.
        </p>
      </section>

      {/* Research & Insights */}
      <section>
        <h2>Research & Insights</h2>
        <p>
          To define system requirements, I conducted five in-depth interviews — combining informal and structured formats — with researchers and potential end-users connected to the Reading the Reader project. Participants regularly read across multiple devices and environments, ensuring both practical reading experience and research awareness.
          {/* Early discussions with researchers highlighted the need for:
          unobtrusive data capture, contextual awareness (environment, time,
          lighting), and flexible reading preferences without overwhelming the
          user. */}
        </p>
        <p>Discussions explored reading habits, contextual influences, and expectations for a research-driven reading tool.</p>
        <div className="research-cards">
          <aside className="research-card">
            <h3>Informal Interviews</h3>
            <ul>
              <li>2 project researchers interviewed</li>
              <li>Unobtrusive behavioural data capture</li>
              <li>Context awareness (environment, time, lighting) without excessive manual input</li>
              <li>Flexible preference controls that do not interrupt reading flow</li>
              <li>Curious about how reading behavior changes across contexts</li>
            </ul>
          </aside>

          <aside className="research-card">
            <h3>Structured Interviews</h3>
            <ul>
              <li>3 respondents from the study groups</li>
              <li>Preferences shift by device and reading context</li>
              <li>Typography controls strongly affect comfort and readability</li>
              <li>Poor reading experiences discourage continued use</li>
              <li>Web-based tools feel more accessible and convenient</li>
            </ul>
          </aside>
        </div>

        <p>
          These findings highlighted a central tension: meaningful contextual data must be captured while preserving the natural reading experience.
        </p>

        <div className="impact-summary">
          <strong>Key insight:</strong> Real-world reading research requires systems that prioritise natural reading behaviour first, with ethical and unobtrusive data capture embedded into the experience.
        </div>

        <p className="research-bridge">
          This insight directly informed the consent-first onboarding, environment capture flow, and minimal reading interface design.
        </p>
      </section>

      {/* Design Decisions */}
      <section>
        <h2>Design Decisions</h2>
        <p>Design decisions focused on preserving natural reading behaviour while enabling ethical, research-grade data capture.
          Key wireframes illustrate how the application supports natural reading
          while enabling ethical, real-environment data collection.</p>

        {/* Consent */}
        <div className="design-block">
          <h3>Consent-first onboarding</h3>
          <p>
            Introduced lightweight consent-first onboarding with explicit research consent to ensure transparency and informed participation.
            Short microcopy explaining data, privacy choices, and the option to pause/opt-out at any time.
          </p>

          <figure>
            <img
              src={wireframeOnboarding} alt="Consent-first onboarding"
            />
            <figcaption>
              Consent-first onboarding clearly explaining research intent.
            </figcaption>
          </figure>
        </div>

        {/* Context Capture */}
        <div className="design-block">
          <h3>Environment & context capture</h3>
          <p>
            Captured a simple set of contextual factors toggles (Place, lighting, sound) through simple environment selectors added at onboarding everytime supporting real-world research.
            Quick environment capture that adds contextual metadata without disrupting reading.
          </p>

          <figure>
            <img src={wireframeContext} alt="Reading environment capture" />
            <figcaption>
              Lightweight capture of environment and reading context.
            </figcaption>
          </figure>
        </div>

        {/* Interface & Controls */}
        <div className="design-block">
          <h3>Reading interface & preference controls</h3>
          <p>
            Provided adjustable typography controls with instant visual updates, allowing users to optimise comfort without interrupting reading flow. The MVP captured key readability variables — including spacing, alignment, layout, and scrolling behaviour — while surfacing controls only when needed to minimise disruption on small screens.
          </p>

          <div className="slideshow" role="region" aria-label="Interface and controls slideshow">
            <div className="slides">
              {interfaceSlides.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Interface controls screenshot ${i + 1}`}
                  className={i === slideIndex ? 'active' : ''}
                  onClick={next}
                />
              ))}
            </div>
            <p className="gcaption">Customisable reading controls enable readers to adjust font, spacing, layout, and background for comfort across devices. Settings persist per session, with inline adjustments and immediate visual feedback that preserve a content-first reading experience.</p>
            <div className="dots" role="tablist" aria-label="Interface slides">
              {interfaceSlides.map((_, i) => (
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
        </div>

        {/* Reading focus: Feedback/Preference confirmation */}
        <div className="design-block">
          <h3>System Feedback & Reading Flow Continuity</h3>
          <p>
            Minimised interruptions during active reading by replacing modal adjustments with instant visual updates and subtle, delayed feedback. Preference changes appear immediately, while lightweight confirmation cues reassure users without breaking immersion.
          </p>

          <div className="slideshow" role="region" aria-label="Feedback and confirmation slideshow">
            <div className="slides">
              {feedbackSlides.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Feedback and confirmation screenshot ${i + 1}`}
                  className={i === feedbackSlideIndex ? 'active' : ''}
                  onClick={nextFeedback}
                />
              ))}
            </div>
            <p className="gcaption">Content-first reading interface with unobtrusive, inline controls that surface only when needed. Instant visual updates and subtle feedback preserve reading flow across layouts and screen sizes.</p>
            <div className="dots" role="tablist" aria-label="Feedback and confirmation slides">
              {feedbackSlides.map((_, i) => (
                <button
                  key={i}
                  className={`dot ${i === feedbackSlideIndex ? 'active' : ''}`}
                  aria-label={`Show slide ${i + 1}`}
                  aria-pressed={i === feedbackSlideIndex}
                  onClick={() => goToFeedback(i)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Behavioural logging */}
        <div className="design-block">
          <h3>Unobtrusive behavioural logging</h3>
          <p>
            Implemented unobtrusive behavioural logging aligned with ethical research standards to capture meaningful data without disrupting the reading experience.
          </p>

          <figure className="video-figure">
            <video controls>
              <source src={readsenseVideo} type="video/webm" />
            </video>
            <figcaption>
              Short interaction simulation showing real reading interaction and unobtrusive
              preference capture. Demonstrates uninterrupted reading and unobtrusive preference capture.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* OUTCOME */}
      <section>
        <h2>Outcome & Impact</h2>
        <p>
          The prototype enabled researchers to observe reading behaviour in authentic settings while maintaining user trust and attention. The system was evaluated with 14 participants — including researchers, high school students, and university students — representing both avid and casual readers. Semi-structured evaluations and think-aloud testing confirmed that the interaction model felt intuitive and unobtrusive.
        </p>

        <div className="research-cards">
          <aside className="research-card">
            <h3>Validation Findings</h3>
            <ul>
              <li><strong>100% task completion</strong> across all test conditions</li>
              <li>Participants <strong>preferred instant visual updates</strong> over modal adjustments</li>
              <li><strong>Subtle feedback preserved reading flow</strong> and reduced interruptions</li>
            </ul>
          </aside>
        </div>

        <div className="impact-summary">
          <p>
            The application successfully captured behavioural and preference data across devices and environments, providing researchers with a practical tool for studying contextual reading patterns in real-world settings. Feedback highlighted the importance of preserving reading flow while enabling user control, confirming that <strong>ethical, unobtrusive design can support research-grade data collection without compromising the reading experience</strong>.
          </p>
        </div>

        {/* Short pull-quote reference */}
        <blockquote className="impact-quote">
          "I would be interested in using this application for reading, it has a nice interface and seems like I would be able to log
          my reading preferences."
          <cite>— Female, 26, University Student, Avid reader, High-tech Proficiency</cite>
        </blockquote>
      </section>

      {/* Research Impact */}
      <section>
        <h2>Research Impact</h2>
        <p>
          The prototype was later adapted into a lab-based experimental setup to support controlled data collection, extending its use beyond in-situ contexts. The work contributed to Reading the Reader, a multidisciplinary HCI research initiative at DTU, and informed a publication accepted at ETRA ’25.
        </p>
      </section>

      {/* AI Considerations */}
      <section>
        <h2>AI Considerations</h2>
        <p>
          The system was designed to enable future AI-driven adaptive reading interfaces and behavioural insights based on contextual and behavioural data, while prioritising transparency, informed consent, and user control. Data capture mechanisms were intentionally structured to support analysis without compromising reading flow or ethical standards.
        </p>
      </section>

      {/* CALLOUT */}
      <section>
        <h2>What I’d Do Differently</h2>
        <p className="callout">
          With more time, I would validate extended reading sessions in longitudinal contexts and explore passive context sensing to further reduce manual input while preserving user control.
        </p>
      </section>

      {/* REFLECTION */}
      <section>
        <h2>Reflection</h2>
        <p>
          Designing research tools does not require compromising user experience when ethical clarity and interaction restraint are prioritised. This project reinforced that data collection systems — including future AI-enabled reading tools — must respect human cognition, attention, and decision-making.
        </p>
      </section>

    </main>
  );
}
