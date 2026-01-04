import "../styles/AIAndUX.css";

export default function AIAndUX() {
  return (
    <main className="aiux" role="main">

      {/* INTRO */}
      <section aria-labelledby="aiux-heading">
        <h1 id="aiux-heading">
          Designing AI-enabled products that support human decision-making
        </h1>

        <p>
          AI introduces new capabilities into digital products—and new design
          responsibilities. My work focuses on designing AI-enabled systems that
          are usable, understandable, and trustworthy, ensuring that automation
          supports human decision-making rather than replacing it.
        </p>

        <p>
          I treat AI in product design as an interaction and communication
          challenge, not a technology showcase.
        </p>
      </section>

      {/* APPROACH */}
      <section aria-labelledby="approach-heading">
        <h2 id="approach-heading">How I approach AI in product design</h2>

        <p>
          AI systems influence how users interpret information, make decisions,
          and assign responsibility. When poorly designed, AI interfaces increase
          cognitive load and reduce trust.
        </p>

        <ul>
          <li>Make system behaviour understandable</li>
          <li>Support informed decisions</li>
          <li>Preserve user agency and accountability</li>
        </ul>
      </section>

      {/* PRINCIPLES */}
      <section aria-labelledby="principles-heading">
        <h2 id="principles-heading">Design principles I apply</h2>

        <h3>Transparency and explainability</h3>
        <p>
          Users should understand what the system is doing and why. I design
          interfaces that communicate AI outputs, confidence, and limitations
          clearly, without unnecessary complexity.
        </p>

        <h3>Human-in-the-loop control</h3>
        <p>
          AI should assist, not override, users. I design workflows that allow
          review, adjustment, and override of AI-generated suggestions.
        </p>

        <h3>Cognitive load management</h3>
        <p>
          AI often introduces complexity. I focus on information hierarchy,
          progressive disclosure, and clear interaction patterns to reduce
          mental effort.
        </p>

        <h3>Trust and responsibility</h3>
        <p>
          Trust is built through predictability and clarity. I design systems
          that help users understand when AI is involved and how outcomes are
          produced.
        </p>
      </section>

      {/* PRACTICE */}
      <section aria-labelledby="practice-heading">
        <h2 id="practice-heading">Where this shows up in practice</h2>

        <p>I have applied these principles in:</p>

        <ul>
          <li>Decision-support tools</li>
          <li>AI-assisted content workflows</li>
          <li>Data-driven insights and recommendations</li>
          <li>Automation features supporting expert users</li>
        </ul>

        <p>
          In these contexts, I work closely with product managers, engineers,
          and data teams to align user needs, technical constraints, and business
          goals.
        </p>
      </section>

      {/* RESEARCH */}
      <section aria-labelledby="research-heading">
        <h2 id="research-heading">Research-informed perspective</h2>

        <p>
          My academic background in <strong>Human-Centered Artificial Intelligence</strong>{" "}
          informs my industry work. My research has examined:
        </p>

        <ul>
          <li>Reading behaviour and cognitive load</li>
          <li>User interaction with AI-generated content</li>
          <li>Behavioural analysis using eye-tracking</li>
        </ul>

        <p>
          This allows me to evaluate AI features critically and design
          interactions grounded in evidence rather than assumptions.
        </p>
      </section>

      {/* RESPONSIBILITY */}
      <section aria-labelledby="responsibility-heading">
        <h2 id="responsibility-heading">Responsible AI in UX practice</h2>

        <p>
          Responsible AI design is part of good UX practice. I consider:
        </p>

        <ul>
          <li>Clear communication of system limitations</li>
          <li>Appropriate use of automation</li>
          <li>Potential bias and fairness in user-facing outputs</li>
          <li>Long-term impact on users and organisations</li>
        </ul>
      </section>

      {/* VALUE */}
      <section aria-labelledby="value-heading">
        <h2 id="value-heading">What teams gain from this approach</h2>

        <ul>
          <li>AI features users understand and trust</li>
          <li>Reduced risk from misunderstood automation</li>
          <li>Better adoption of AI-enabled functionality</li>
          <li>Stronger alignment across design, engineering, and data teams</li>
        </ul>
      </section>

    </main>
  );
}
