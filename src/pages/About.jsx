import "../styles/About.css";

export default function About() {
  return (
    <main className="about" role="main">

      {/* INTRO */}
      <section aria-labelledby="about-heading">
        <h1 id="about-heading">
          Senior UX Designer working on complex, AI-enabled digital products
        </h1>

        <p>
          I am a Senior UX Designer with over six years of experience designing
          and improving digital products in industry and research-driven
          environments. I work with teams to create clear, usable, and
          trustworthy experiences—particularly in products where data,
          automation, and human decision-making intersect.
        </p>

        <p>
          My background combines hands-on product design with strong user-research
          practice, allowing me to move comfortably from problem framing to
          implementation and validation.
        </p>
      </section>

      {/* HOW I WORK */}
      <section aria-labelledby="work-heading">
        <h2 id="work-heading">How I work</h2>

        <p>
          I approach design as a structured, evidence-based discipline. I focus
          on understanding user needs, organisational constraints, and technical
          realities before shaping solutions.
        </p>

        <ul>
          <li>Framing problems and defining research goals</li>
          <li>Conducting qualitative and quantitative user research</li>
          <li>
            Translating insights into interaction design, information
            architecture, and prototypes
          </li>
          <li>Validating decisions through usability testing and iteration</li>
          <li>
            Collaborating closely with product managers, engineers, and
            stakeholders
          </li>
        </ul>

        <p>
          I prioritise clarity, accessibility, and scalability over short-term
          trends.
        </p>
      </section>

      {/* AI DESIGN */}
      <section aria-labelledby="ai-design-heading">
        <h2 id="ai-design-heading">Designing AI-enabled systems</h2>

        <p>
          A significant part of my work involves designing interfaces and
          workflows where AI plays an active role. I pay particular attention
          to:
        </p>

        <ul>
          <li>Explainability and transparency</li>
          <li>User trust and perceived control</li>
          <li>Cognitive load and decision support</li>
          <li>Responsible and ethical use of automation</li>
        </ul>

        <p>
          I design AI-enabled systems to support human judgment, ensuring users
          remain informed and accountable decision-makers.
        </p>
      </section>

      {/* EXPERIENCE */}
      <section aria-labelledby="experience-heading">
        <h2 id="experience-heading">Experience and collaboration</h2>

        <p>
          I have worked in cross-functional teams across startups, enterprise
          contexts, and academic settings. My experience includes leading UX
          work, mentoring designers, facilitating workshops, and contributing
          to product decisions in agile environments.
        </p>

        <p>
          Colleagues describe my working style as calm, structured, and
          collaborative. I value open communication and shared ownership of
          outcomes.
        </p>
      </section>

      {/* BACKGROUND */}
      <section aria-labelledby="background-heading">
        <h2 id="background-heading">Background</h2>

        <p>
          I hold an M.Sc. in Human-Centered Artificial Intelligence from the
          Technical University of Denmark (DTU), where I researched reading
          behaviour and cognitive load in AI-generated and human-authored
          content using eye-tracking methods.
        </p>

        <p>
          This research informs how I approach AI-related design challenges in
          industry today.
        </p>
      </section>

      {/* OUTSIDE WORK */}
      <section aria-labelledby="outside-heading">
        <h2 id="outside-heading">Outside of work</h2>

        <p>
          Outside work, I enjoy travelling, hiking, photography, and hands-on
          creative projects. These activities help me stay observant,
          grounded, and reflective in my design practice.
        </p>

        {/* Album: four images from public in a simple grid */}
        <div className="album-grid" aria-label="Personal photo album">
          <figure className="album-item">
            <img
              src={`${import.meta.env.BASE_URL}Hiking.jpg`}
              alt="Hiking"
              className="album-img"
            />
          </figure>

          <figure className="album-item">
            <img
              src={`${import.meta.env.BASE_URL}Norway.jpg`}
              alt="Norway landscape"
              className="album-img"
            />
          </figure>

          <figure className="album-item">
            <img
              src={`${import.meta.env.BASE_URL}lamp.jpg`}
              alt="Lamp detail"
              className="album-img"
            />
          </figure>

          <figure className="album-item">
            <img
              src={`${import.meta.env.BASE_URL}Sketchs.jpg`}
              alt="Sketches"
              className="album-img"
            />
          </figure>
        </div>
      </section>

      {/* VALUE */}
      <section aria-labelledby="value-heading">
        <h2 id="value-heading">What you can expect from working with me</h2>

        <ul>
          <li>A research-driven, human-centered approach</li>
          <li>Clear and structured design reasoning</li>
          <li>Experience with complex and AI-enabled systems</li>
          <li>Reliable collaboration in cross-functional teams</li>
          <li>Focus on usability, accessibility, and meaningful impact</li>
        </ul>
      </section>

    </main>
  );
}
