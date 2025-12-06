import React from 'react';
import heroContent from '../components/heroContent';
import heroImg from '/images/hero-background.jpg';

const fallbackMeta = "Local, caring tech help when things feel unsettled.";

export default function HeroSection() {
  const { headline, subheading, supportLine, primaryCta, secondaryCta, contactLine } = heroContent;
  const telHref = `tel:${contactLine.phone.replace(/[^0-9+]/g, '')}`;

  return (
    <section
      id="top"
      className="section section--hero hero-section"
      style={{
        backgroundImage: `linear-gradient(rgba(8, 8, 12, 0.7), rgba(8, 8, 12, 0.7)), url(${heroImg})`,
      }}
    >
      <div className="section__content hero-section__content">
        <p className="support-line">{supportLine || fallbackMeta}</p>
        <h1>{headline}</h1>
        <p className="lead hero__lead">{subheading}</p>
        <div className="hero__actions">
          <a className="btn btn--primary" href={telHref}>
            {primaryCta}
          </a>
          <a className="btn btn--secondary" href="#contact">
            {secondaryCta}
          </a>
        </div>
      </div>
    </section>
  );
}
