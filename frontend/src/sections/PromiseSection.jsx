import React from 'react';
import promiseContent from '../components/promiseContent';

export default function PromiseSection() {
  const { heading, intro, bullets } = promiseContent;

  return (
    <section id="promise" className="section promise">
      <div className="section-content">
        <h2>{heading}</h2>
        <p className="lead">{intro}</p>
        <ul className="promise-list">
          {bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
