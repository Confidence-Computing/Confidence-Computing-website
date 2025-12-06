import React from 'react';
import heroContent from '../components/heroContent';
import heroImg from '/images/hero-background.jpg';

export default function HeroSection() {
  const {
    headline,
    subheading,
    supportLine,
    primaryCta,
    secondaryCta,
    contactLine,
  } = heroContent;

  return (
    <section
      id="hero"
      className="section section--hero hero-section"
      style={{ backgroundImage: `linear-gradient(rgba(1,2,4,0.45), rgba(1,2,4,0.45)), url(${heroImg})` }}
    >
      <div className="section__content hero-section__content">
        <p className="support-line">{supportLine}</p>
        <h1>{headline}</h1>
        <p className="lead">{subheading}</p>
        <div className="hero__cta-row">
          <button className="primary-cta">{primaryCta}</button>
          <button className="secondary-cta">{secondaryCta}</button>
        </div>
        <div className="hero__contact">
          <span>Phone: {contactLine.phone}</span>
          <span>Email: {contactLine.email}</span>
          <span>Website: {contactLine.website}</span>
        </div>
      </div>
    </section>
  );
}
