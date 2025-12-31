import React from 'react';
import BackButton from '../components/BackButton';

export default function About() {
  return (
    <div className="about">
      <BackButton fallback="/" />
      <h1>About Me</h1>
      <p>
        I'm a UX designer passionate about creating meaningful digital experiences.
        My work focuses on user research, interaction design, and accessibility.
      </p>
    </div>
  );
}

