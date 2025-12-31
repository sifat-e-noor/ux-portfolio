import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/react.svg';
import '../styles/navBar.css';

export default function NavBar() {
  return (
    <header className="site-nav">
      <div className="site-nav-inner">
        <div className="site-brand">
          <img src={logo} alt="brand" className="brand-icon" />
          <NavLink to="/" className="brand-link">Sifat-E-Noor</NavLink>
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
        </div>

        <nav className="site-links" aria-label="Main navigation">
          <NavLink to="/" end className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
          <NavLink to="/work" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Work</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>About</NavLink>
          <NavLink to="/ai-and-ux" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>AI &amp; UX</NavLink>
          <NavLink to="/cv" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>CV</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}
