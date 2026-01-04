import "../styles/Contact.css";

export default function Contact() {
  return (
    <main className="contact" role="main">

      {/* INTRO */}
      <section aria-labelledby="contact-heading">
        <h1 id="contact-heading">Get in touch</h1>

        <p>
          If you would like to discuss a role, a project, or a potential
          collaboration, feel free to reach out. I am open to conversations
          about <strong>Senior UX Designer</strong>,{" "}
          <strong>Product Designer (UX-focused)</strong>, and{" "}
          <strong>UX Researcher</strong> roles in Denmark, particularly in teams
          working with complex or AI-enabled digital products.
        </p>

        <p>
          I value clear communication and thoughtful collaboration, and I aim to
          respond promptly.
        </p>
      </section>

      {/* CONTACT DETAILS */}
      <section aria-labelledby="details-heading">
        <h2 id="details-heading">Ways to contact me</h2>

        <ul className="contact-list">
          <li>
            <strong>Phone</strong>
            <span>
              <a href="tel:+45 9163 9066">+45 9163 9066</a>
            </span>
          </li>
          <li>
            <strong>Email</strong>
            <span>
              <a href="mailto:noor.sifat.e@gmail.com">
                noor.sifat.e@gmail.com
              </a>
            </span>
          </li>

          <li>
            <strong>LinkedIn</strong>
            <span>
              <a
                href="https://www.linkedin.com/in/sifat-e-noor/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View LinkedIn profile
              </a>
            </span>
          </li>

          <li>
            <strong>CV</strong>
            <span>
              <a
                href={`${import.meta.env.BASE_URL}Sifat-E-Noor_CV.pdf`}
                download
              >
                Download CV (PDF)
              </a>
            </span>
          </li>
        </ul>
      </section>

      {/* EXPECTATIONS */}
      <section aria-labelledby="expect-heading">
        <h2 id="expect-heading">What to expect</h2>

        <ul>
          <li>Clear and respectful communication</li>
          <li>Openness to discussing roles, responsibilities, and expectations</li>
          <li>Availability for interviews or exploratory conversations</li>
        </ul>

        <p>
          If you are building products where usability, trust, and responsible
          use of technology matter, I would be glad to connect.
        </p>
      </section>

    </main>
  );
}
