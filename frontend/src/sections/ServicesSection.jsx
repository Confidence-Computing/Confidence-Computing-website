import React from 'react';
import servicesList, { servicesSectionCopy } from '../components/servicesList';
import tutoringImg from '/images/service-tutoring.jpg';
import securityImg from '/images/service-cybersecurity.jpg';
import repairImg from '/images/service-repair.jpg';
import backupImg from '/images/service-data-backup.jpg';

export default function ServicesSection() {
  const imageMap = {
    repairs: repairImg,
    backup: backupImg,
    tutoring: tutoringImg,
    security: securityImg,
  };
  return (
    <section id="services" className="section section--services">
      <div className="section__content">
        <h2>{servicesSectionCopy.heading}</h2>
        <p className="lead">{servicesSectionCopy.intro}</p>
        <ul className="service-grid" aria-label="Services" role="list">
          {servicesList.map((service) => (
            <li key={service.id}>
              <article
                className="service-card"
                style={{
                  backgroundImage: `linear-gradient(rgba(10,10,10,0.25), rgba(10,10,10,0.25)), url(${imageMap[service.id]})`,
                }}
              >
                <div className="service-card__content">
                  <h3>{service.title}</h3>
                  <p className="summary">{service.summary}</p>
                  <p className="details">{service.details}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
