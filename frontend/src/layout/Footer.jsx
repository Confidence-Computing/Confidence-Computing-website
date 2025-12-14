import React from 'react';
import contactInfo from '../components/contactInfo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="page__footer">
      <p>
        Phone:{' '}
        <a href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, '')}`}>
          {contactInfo.phone}
        </a>{' '}
        · Email: <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
      </p>
      <p>Serving Oxford, Massachusetts and nearly every county in Southern New England within two hours' drive.</p>
      <p>
        © {currentYear} Confidence Computing. All rights reserved. Website by{' '}
        <a
          href="https://www.MythologIQ.studio/presence/services"
          target="_blank"
          rel="noreferrer noopener"
        >
          MythologIQ
        </a>
        .
      </p>
    </footer>
  );
}
