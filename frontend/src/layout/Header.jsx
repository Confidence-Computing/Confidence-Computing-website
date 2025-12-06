import React from 'react';
import contactInfo from '../components/contactInfo';

export default function Header() {
  return (
    <header className="page__header">
      <div className="brand-mark">Confidence Computing</div>
      <div className="contact-meta">
        <span>{contactInfo.phone}</span>
        <a className="primary-cta" href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, '')}`}>
          Call for calm tech help
        </a>
      </div>
    </header>
  );
}
