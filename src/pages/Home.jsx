import React from 'react';

export default function Home() {
  return (
    <div className="home-page">
      <header className="hero">
        <h1>UX Design Jobs in Denmark</h1>
        <p>Discover top UX design opportunities across Denmark</p>
      </header>

      <section className="job-market">
        <h2>Why Denmark for UX Design?</h2>
        <ul>
          <li>Thriving tech hub in Copenhagen</li>
          <li>User-centered design culture</li>
          <li>Competitive salaries and benefits</li>
          <li>Work-life balance focus</li>
        </ul>
      </section>

      <section className="featured-jobs">
        <h2>Featured Opportunities</h2>
        <div className="jobs-grid">
          <div className="job-card">
            <h3>Senior UX Designer</h3>
            <p>Copenhagen</p>
            <p>Tech startup seeking experienced designer</p>
          </div>
          <div className="job-card">
            <h3>UX Researcher</h3>
            <p>Aarhus</p>
            <p>Research-focused role in growing company</p>
          </div>
          <div className="job-card">
            <h3>Product Designer</h3>
            <p>Copenhagen</p>
            <p>Design products for global audience</p>
          </div>
        </div>
      </section>

      <footer className="cta">
        <h2>Ready to advance your UX career?</h2>
        <button>Browse All Jobs</button>
      </footer>
    </div>
  );
}
