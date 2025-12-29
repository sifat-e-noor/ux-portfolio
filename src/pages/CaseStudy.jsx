import React, { useState } from 'react';
import './caseStudy.css';

export default function CaseStudy() {
  const [selectedStudy, setSelectedStudy] = useState(null);

  const caseStudies = [
    {
      id: 1,
      title: 'Mobile Banking App Redesign',
      company: 'Danish Bank',
      role: 'UX Designer',
      challenge: 'Improve user onboarding and reduce abandonment rates',
      solution: 'Simplified registration flow, biometric authentication',
      results: '45% increase in user retention',
      image: '/images/banking-app.jpg',
    },
    {
      id: 2,
      title: 'E-commerce Platform Optimization',
      company: 'Copenhagen Retail Co.',
      role: 'Lead UX Designer',
      challenge: 'Decrease checkout friction and cart abandonment',
      solution: 'One-page checkout, guest option, payment flexibility',
      results: '32% increase in conversion rate',
      image: '/images/ecommerce.jpg',
    },
    {
      id: 3,
      title: 'Government Portal Accessibility Audit',
      company: 'Danish Ministry',
      role: 'UX Research Lead',
      challenge: 'Ensure WCAG 2.1 AA compliance for 500K+ users',
      solution: 'User testing with assistive technology, redesigned navigation',
      results: 'Full compliance, 60% faster task completion',
      image: '/images/gov-portal.jpg',
    },
  ];

  return (
    <div className="case-study-container">
      <header className="case-study-header">
        <h1>UX Case Studies</h1>
        <p>Selected projects showcasing UX design in Denmark</p>
      </header>

      <div className="case-studies-grid">
        {caseStudies.map((study) => (
          <article
            key={study.id}
            className="case-study-card"
            onClick={() => setSelectedStudy(study)}
          >
            <div
              className="card-image"
              style={{ backgroundImage: `url(${study.image})` }}
            />
            <div className="card-content">
              <h2>{study.title}</h2>
              <p className="company">{study.company}</p>
              <p className="role">{study.role}</p>
              <button className="read-more">Read Case Study →</button>
            </div>
          </article>
        ))}
      </div>

      {selectedStudy && (
        <div className="modal-overlay" onClick={() => setSelectedStudy(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedStudy(null)}>
              ✕
            </button>
            <h2>{selectedStudy.title}</h2>
            <p>
              <strong>Company:</strong> {selectedStudy.company}
            </p>
            <p>
              <strong>Role:</strong> {selectedStudy.role}
            </p>
            <p>
              <strong>Challenge:</strong> {selectedStudy.challenge}
            </p>
            <p>
              <strong>Solution:</strong> {selectedStudy.solution}
            </p>
            <p>
              <strong>Results:</strong> {selectedStudy.results}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
