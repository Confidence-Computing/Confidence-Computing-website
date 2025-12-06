import React from 'react';
import processSteps, { processSectionCopy } from '../components/processSteps';

export default function ProcessSection() {
  return (
    <section id="process" className="section section--process">
      <div className="section__content">
        <h2>{processSectionCopy.heading}</h2>
        <ol className="process-steps" aria-label="Process steps">
          {processSteps.map((step) => (
            <li key={step.step}>
              <article className="process-step">
                <div className="step-number">{step.step}</div>
                <h3>{step.title}</h3>
                <p>{step.detail}</p>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
