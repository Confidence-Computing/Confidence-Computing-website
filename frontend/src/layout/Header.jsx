import React from 'react';
import contactInfo from '../components/contactInfo';

const navLinks = [
  { href: '#problem', label: 'Why it feels unpredictable' },
  { href: '#services', label: 'Services' },
  { href: '#promise', label: 'Our promise' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#process', label: 'How it works' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const telHref = `tel:${contactInfo.phone.replace(/[^0-9+]/g, '')}`;

  return (
    <header className="page__header">
      <div className="page__header-inner">
        <div className="brand-mark">Confidence Computing</div>
        <nav className="page__nav" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <a className="primary-cta page__cta" href={telHref}>
          Call for calm tech help · {contactInfo.phone}
        </a>
      </div>
    </header>
  );
}
