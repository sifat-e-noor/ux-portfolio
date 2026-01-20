import React from 'react';
import { Link } from 'react-router-dom';

const order = [
  { key: 'ux-unite', index: 1, path: '/case-studies/ux-unite', title: 'UX Unite', subtitle: 'Community-driven UX collaboration platform.' },
  { key: 'synesis-convay', index: 2, path: '/case-studies/synesis-convay', title: 'Synesis Convay', subtitle: 'Conversational AI for enterprise workflows.' },
  { key: 'ai-reading', index: 3, path: '/case-studies/ai-reading', title: 'AI Reading', subtitle: 'Assistive reading tools powered by AI.' },
];

export default function CaseStudyPager({ current }) {
  const idx = order.findIndex((o) => o.key === current);
  if (idx === -1) return null;
  const prev = order[(idx - 1 + order.length) % order.length];
  const next = order[(idx + 1) % order.length];
  const cur = order[idx];

  return (
    <div className="case-pager" aria-label="Case study navigation">
      <Link
        to={prev.path}
        className="pager-left pager-link"
        aria-label={`View Case Study ${prev.index} — ${prev.subtitle}`}
        title={`View Case Study ${prev.index}`}
      >
        <span className="pager-arrow left">‹</span>
        <span className="pager-inline-tip left">View Case Study {prev.index}</span>
      </Link>
      <Link
        to={next.path}
        className="pager-right pager-link"
        aria-label={`View Case Study ${next.index} — ${next.subtitle}`}
        title={`View Case Study ${next.index}`}
      >
        <span className="pager-inline-tip right">View Case Study {next.index}</span>
        <span className="pager-arrow right">›</span>
      </Link>
    </div>
  );
}
