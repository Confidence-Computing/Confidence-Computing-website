import React from 'react';
import problemNotes from '../components/problemNotes';

export default function ProblemSection() {
  const { heading, paragraph, questions, reassurance } = problemNotes;

  return (
    <section id="problem" className="section section--problem">
      <div className="section__content section__content--narrow card card--glow problem__content">
        <h2 className="problem__heading">{heading}</h2>
        <p className="problem__lead">{paragraph}</p>
        <div className="problem__grid">
          <ul className="question-list">
            {questions.map((question, index) => (
              <li key={`${question}-${index}`}>{question}</li>
            ))}
          </ul>
          <p className="reassurance">{reassurance}</p>
        </div>
      </div>
    </section>
  );
}
