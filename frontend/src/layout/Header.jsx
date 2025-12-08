import React from 'react';
import contactInfo from '../components/contactInfo';
import brandLogo from '/images/confidencebrand/primary-logo-nobackground.png';

const navLinks = [
  { href: '#top', label: 'Home' },
  { href: '#problem', label: 'Challenges we solve' },
  { href: '#services', label: 'Services' },
  { href: '#promise', label: 'Our promise' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact', className: 'page__nav-link--contact' },
];

export default function Header() {
  const telHref = `tel:${contactInfo.phone.replace(/[^0-9+]/g, '')}`;

  return (
    <header className="page__header">
      <div className="page__header-inner">
        <a className="brand-mark" href="#top" aria-label="Confidence Computing home">
          <img src={brandLogo} alt="Confidence Computing lantern logo" className="brand-mark__logo" />
        </a>
        <nav className="page__nav" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`page__nav-link ${link.className || ''}`.trim()}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a className="primary-cta page__cta" href={telHref}>
          <span className="phone-icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27c1.21.48 2.53.74 3.88.74a1 1 0 011 1v3.5a1 1 0 01-1 1C9.85 21.66 2.34 14.15 2.34 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.26 2.67.74 3.88a1 1 0 01-.27 1.11l-2.2 2.2z"
                fill="currentColor"
              />
            </svg>
          </span>
          <span className="page__cta-text">Call for Confidence</span>
        </a>
      </div>
    </header>
  );
}
