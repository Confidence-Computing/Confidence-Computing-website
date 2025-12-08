import React, { useState } from 'react';
import servicesList, { servicesSectionCopy } from '../components/servicesList';

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(null);

  return (
    <section id="services" className="section section--services">
      <div className="section__content section__content--narrow">
        <div className="services__intro-row">
          <div>
            <h2 className="services__heading section-heading">{servicesSectionCopy.heading}</h2>
            <p className="services__intro">{servicesSectionCopy.intro}</p>
          </div>
          <span className="services__badge">Oxford + surrounding communities</span>
        </div>
        <div className="service-grid">
          {servicesList.map((service) => (
            <article
              key={service.id}
              className="service-card"
              style={{ '--service-image': `url(${service.image})` }}
            >
              <div className="service-card__content">
                <h3>{service.title}</h3>
                <p className="service-card__summary">{service.summary}</p>
                <button
                  type="button"
                  className="service-card__details-btn"
                  onClick={() => setActiveService(service)}
                >
                  Learn more
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
      {activeService && (
        <div
          className="service-modal"
          role="dialog"
          aria-labelledby="service-modal-title"
          aria-describedby="service-modal-description"
          onClick={() => setActiveService(null)}
        >
          <div
            className="service-modal__content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="service-modal__close"
              aria-label="Close details"
              onClick={() => setActiveService(null)}
            >
              ×
            </button>
            <div
              className="service-modal__hero"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(7, 7, 7, 0.5), rgba(7, 7, 7, 0.5)), url(${activeService.image})`,
              }}
            />
            <div className="service-modal__body">
              <h3 id="service-modal-title">{activeService.title}</h3>
              <p className="service-card__summary">{activeService.summary}</p>
              <p id="service-modal-description" className="service-card__details">
                {activeService.details}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
