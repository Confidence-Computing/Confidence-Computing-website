import React from 'react';
import problemNotes from '../components/problemNotes';

export default function ProblemSection() {
  const { heading, paragraph, questions, reassurance } = problemNotes;

  return (
    <section id="problem" className="section problem">
      <div className="section-content">
        <h2>{heading}</h2>
        <p className="lead">{paragraph}</p>
        <ul className="question-list">
          {questions.map((question, index) => (
            <li key={`${question}-${index}`}>{question}</li>
          ))}
        </ul>
        <p className="reassurance">{reassurance}</p>
      </div>
    </section>
  );
}
