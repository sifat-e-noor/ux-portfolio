import React from 'react';
import "../styles/pageShared.css";
import BackButton from '../components/BackButton';
import { Link } from 'react-router-dom';

export default function CaseStudy() {

  return (
    <main className="case-study-container" role="main">
      <BackButton fallback="/work" />
      <header className="case-study-header">
        <h1>UX Case Studies</h1>
        <p>Selected work demonstrating my experience as a Senior Product Designer, UX Researcher, and Product Designer across industry and research-driven contexts.</p>
      </header>

      {/* Case Studies Index */}
      <section className="case-studies-index">
        <h2>Case Studies Index</h2>
        <div className="case-studies-index-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
          <article className="index-card" style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1rem' }}>
            <h3>UxUnite</h3>
            <p className="muted">Community-driven UX collaboration platform.</p>
            <Link to="/case-study/ux-unite" className="btn btn-primary" style={{ marginTop: '0.5rem' }}>View Case Study</Link>
          </article>
          <article className="index-card" style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1rem' }}>
            <h3>Synesis Convay</h3>
            <p className="muted">Conversational AI for enterprise workflows.</p>
            <Link to="/case-study/synesis-convay" className="btn btn-primary" style={{ marginTop: '0.5rem' }}>View Case Study</Link>
          </article>
          <article className="index-card" style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1rem' }}>
            <h3>AI Reading</h3>
            <p className="muted">Assistive reading tools powered by AI.</p>
            <Link to="/case-study/ai-reading" className="btn btn-primary" style={{ marginTop: '0.5rem' }}>View Case Study</Link>
          </article>
        </div>
      </section>
    </main>
  );
}
