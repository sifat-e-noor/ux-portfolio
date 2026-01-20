import React from 'react';
import "../styles/pageShared.css";
import BackButton from '../components/BackButton';
import { Link, useNavigate } from 'react-router-dom';

export default function CaseStudies() {
  const navigate = useNavigate();
  const onKeyNav = (e, path) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      navigate(path);
    }
  };
  return (
    <main className="case-study-container" role="main">
      <header>
        <h1>Case Studies</h1>
        <p className="intro">
          Selected work showing how I design, research, and deliver usable,
          scalable, and responsible digital products.
        </p>
      </header>

      <section className="case-grid">

        <article
          className="case-card clickable"
          role="link"
          tabIndex={0}
          onClick={() => navigate('/case-studies/synesis-convay')}
          onKeyDown={(e) => onKeyNav(e, '/case-studies/synesis-convay')}
        >
          <h2>Designing a Scalable Virtual Collaboration Platform</h2>
          <p className="meta">Senior UX Designer / Team Lead · Synesis IT</p>
          <p>
            Led UX strategy and design for an enterprise collaboration platform,
            focusing on clarity, reliability, and long-term scalability.
          </p>
          <p className="focus"><strong>Focus</strong></p> 
          <ul>
            <li>UX strategy and leadership</li>
            <li>Enterprise usability</li>
            <li>Design systems</li>
          </ul>
            <Link to="/case-studies/synesis-convay" className="case-link" onClick={(e) => e.stopPropagation()}>
            Read more
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            </Link>
        </article>

        <article
          className="case-card clickable"
          role="link"
          tabIndex={0}
          onClick={() => navigate('/case-studies/ux-unite')}
          onKeyDown={(e) => onKeyNav(e, '/case-studies/ux-unite')}
        >
          <h2>Supporting Confident Decision-Making in a Data-Driven Product</h2>
          <p className="meta">Senior Product Designer · UX Unite</p>
          <p>
            Owned UX research and interaction design for a data-driven product
            supporting user decision-making.
          </p>
          <p className="focus"><strong>Focus</strong></p> 
          <ul>
            <li>Research-driven design</li>
            <li>Information architecture</li>
            <li>Data-heavy interfaces</li>
          </ul>
            <Link to="/case-studies/ux-unite" className="case-link" onClick={(e) => e.stopPropagation()}>
            Read more
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            </Link>
        </article>

        <article
          className="case-card clickable"
          role="link"
          tabIndex={0}
          onClick={() => navigate('/case-studies/ai-reading')}
          onKeyDown={(e) => onKeyNav(e, '/case-studies/ai-reading')}
        >
          <h2>Evaluating Cognitive Load in AI-Generated Content</h2>
          <p className="meta">UX Researcher · Human-Centered AI (DTU)</p>
          <p>
            Experimental research on how users process AI-generated versus
            human-authored content, with implications for product design.
          </p>
          <p className="focus"><strong>Focus</strong></p> 
          <ul>
            <li>UX research</li>
            <li>Cognitive load and trust</li>
            <li>Human-centered AI</li>
          </ul>
            <Link to="/case-studies/ai-reading" className="case-link" onClick={(e) => e.stopPropagation()}>
            Read more
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            </Link>
        </article>

      </section>
    </main>
  );
}
