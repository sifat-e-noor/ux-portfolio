import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navBar.css';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  // Initialize theme from localStorage or system preference
  useEffect(() => {
    try {
      const saved = localStorage.getItem('theme');
      const systemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initial = saved ? saved : (systemDark ? 'dark' : 'light');
      document.documentElement.setAttribute('data-theme', initial);
    } catch (e) {
      // fallback to light if storage fails
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  return (
    <header className="site-nav">
      <div className="site-nav-inner">
        <div className="site-brand">
          <NavLink to="/" className="brand-link">S-E-N</NavLink>
          <span className="brand-sep" aria-hidden>|</span>
          <button
            className="theme-toggle"
            onClick={() => {
              const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
              document.documentElement.setAttribute('data-theme', next);
              try { localStorage.setItem('theme', next); } catch (e) {}
            }}
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            <span className="theme-icon" aria-hidden />
          </button>

          {/* Hamburger menu toggle for small screens */}
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle navigation menu"
            aria-controls="primary-nav"
            aria-expanded={menuOpen}
            title="Menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        <nav id="primary-nav" className={menuOpen ? 'site-links open' : 'site-links'} aria-label="Main navigation">
          <NavLink to="/" end className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'} onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/case-studies" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'} onClick={() => setMenuOpen(false)}>Work</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'} onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink to="/ai-and-ux" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'} onClick={() => setMenuOpen(false)}>AI &amp; UX</NavLink>
          <NavLink to="/cv" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'} onClick={() => setMenuOpen(false)}>CV</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'} onClick={() => setMenuOpen(false)}>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}
