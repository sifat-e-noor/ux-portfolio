import React from 'react';
import "../styles/pageShared.css";
import BackButton from '../components/BackButton';
import { Link, useNavigate } from 'react-router-dom';
import convayDashboard from "../assets/convay-dashboard.png";
import convayLogo from "../assets/convay-logo.png";
import uxuniteLogo from "../assets/UxUnite-logo.png";
import readsenseLogo from "../assets/Adjustable-Reading-Settings.png";

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
          <figure>
            <img
              src={convayDashboard}
              alt="Synesis Convay dashboard"
            />
          </figure>
          <h2>Designing a Scalable Virtual Collaboration Platform</h2>
          <p className="meta">Senior UX Designer · Synesis IT</p>
          <p>
            Led end-to-end UX strategy and system design for an enterprise virtual collaboration platform, simplifying complex scheduling and live meeting workflows at scale.
          </p>
          <p className="focus"><strong>Focus</strong></p> 
          <ul>
            <li>UX strategy and leadership</li>
            <li>Enterprise workflow design</li>
            <li>Scalable interaction systems</li>
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
          <figure>
            <img
              src={uxuniteLogo}
              alt="UX Unite logo"
            />
          </figure>
          <h2>Designing Hiring Transparency Through Company Insights</h2>
          <p className="meta">Product Designer (UX) · UX Unite</p>
          <p>
            Researched and defined a hiring history feature that surfaces meaningful job post patterns, helping candidates evaluate companies with greater clarity and trust.
          </p>
          <p className="focus"><strong>Focus</strong></p> 
          <ul>
            <li>Research-driven product decisions & co-design</li>
            <li>Data Synthesis, Scoping & MVP</li>
            <li>Information architecture & Data-heavy interfaces</li>
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
          <figure>
            <img
              src={readsenseLogo}
              alt="ReadSense logo"
            />
          </figure>
          <h2>Designing a Research Tool for Real-World Reading Behaviour</h2>
          <p className="meta">UX Researcher, UX Designer & Developer · Human-Centered AI (DTU)</p>
          <p>
            Designed and developed a research application capturing authentic reading behaviour and preferences in real environments while preserving natural reading experiences.
          </p>
          <p className="focus"><strong>Focus</strong></p> 
          <ul>
            <li>Experimental UX research</li>
            <li>Behavioural data capture</li>
            <li>Ethical interaction design</li>
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
