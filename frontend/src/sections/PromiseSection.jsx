import React from 'react';
import promiseContent from '../components/promiseContent';

export default function PromiseSection() {
  const { heading, intro, bullets } = promiseContent;

  return (
    <section id="promise" className="section section--promise">
      <div className="section__content section__content--narrow">
        <h2 className="promise__heading">{heading}</h2>
        <p className="promise__intro">{intro}</p>
        <ul className="promise__list">
          {bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
