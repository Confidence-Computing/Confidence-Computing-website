import React, { useEffect, useMemo, useState } from 'react';
import testimonialsData from '../components/testimonialsData';
import testimonialImg from '/images/colonial-porch-lantern.jpg';

const ROTATE_MS = 6000;

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTestimonial = useMemo(() => testimonialsData[activeIndex], [activeIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
    }, ROTATE_MS);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="section section--testimonials">
      <div className="section__content section__content--narrow testimonial-section">
        <h2 className="testimonials__title">People who chose Confidence</h2>
        <div className="testimonial-carousel" aria-live="polite" aria-atomic="true">
          <article
            className="testimonial-card"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(3, 6, 14, 0.4), rgba(3, 6, 14, 0.85)), url(${testimonialImg})`,
            }}
          >
            <div className="testimonial-card__content">
              <p className="testimonial-card__summary">
                “{activeTestimonial.quote.trim()}”
              </p>
              <p className="testimonial-card__author">{activeTestimonial.name}</p>
            </div>
          </article>
          <div className="testimonial-carousel__controls">
            <button
              type="button"
              onClick={() =>
                setActiveIndex((prev) => (prev + testimonialsData.length - 1) % testimonialsData.length)
              }
            >
              Previous
            </button>
            <button
              type="button"
              onClick={() => setActiveIndex((prev) => (prev + 1) % testimonialsData.length)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
