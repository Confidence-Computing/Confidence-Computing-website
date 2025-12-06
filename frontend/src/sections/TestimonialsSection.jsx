import React from 'react';
import testimonialsData from '../components/testimonialsData';
import testimonialBg from '/images/evening-desk.jpg';

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="section section--testimonials testimonials-section"
      style={{
        backgroundImage: `linear-gradient(rgba(4, 4, 4, 0.6), rgba(4, 4, 4, 0.6)), url(${testimonialBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="section__content">
        <h2>Real people we have helped through the chaos</h2>
        <div role="status" aria-live="polite">
          <ul className="testimonial-grid" aria-label="Testimonials">
            {testimonialsData.map((item) => (
              <li key={item.name}>
                <article className="testimonial-card">
                  <p className="quote">{`“${item.quote}”`}</p>
                  <p className="author">{item.name}</p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
