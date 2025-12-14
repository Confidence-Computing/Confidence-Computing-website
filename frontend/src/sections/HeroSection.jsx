import React from 'react';
import heroContent from '../components/heroContent';
import heroImg from '/images/colonial-winter-home.jpg';

const fallbackMeta = "Local, caring technical help when things feel unsettled.";

export default function HeroSection() {
  const { headline1, headline2, subheading, supportLine, primaryCta, secondaryCta, contactLine } = heroContent;
  const telHref = `tel:${contactLine.phone.replace(/[^0-9+]/g, '')}`;

  return (
    <section
      id="top"
      className="section section--hero hero-section"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(20, 14, 8, 0.55), rgba(239, 175, 69, 0.28)), url(${heroImg})`,
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
