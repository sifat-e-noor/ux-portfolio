import React from 'react';
import BackButton from '../components/BackButton';

export default function Contact() {
  return (
    <div className="contact">
      <BackButton fallback="/" />
      <h1>Contact</h1>
      <p>
        You can reach me at <a href="mailto:noor.sifat.e@gmail.com">noor.sifat.e@gmail.com</a>
      </p>
    </div>
  );
}
