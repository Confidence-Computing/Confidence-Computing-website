import React, { useState } from 'react';
import contactInfo from '../components/contactInfo';
import contactImg from '/images/service-contact.jpg';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  inquiry: '',
  preferred: 'Email',
};

export default function ContactSection() {
  const { heading, paragraph, phone, email, website, primaryCTA, secondaryCTA } =
    contactInfo;
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = {};

    if (!form.name.trim()) {
      nextErrors.name = 'Please share your name so we know who we are talking with.';
    }

    if (!form.email.trim()) {
      nextErrors.email = 'Please provide an email so we can follow up shortly.';
    } else if (!emailPattern.test(form.email.trim())) {
      nextErrors.email = 'That email looks off—can you double check it for me?';
    }

    if (!form.inquiry.trim()) {
      nextErrors.inquiry = 'Tell us what is going on so we can prepare the right help.';
    }

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      setSuccess('');
      return;
    }

    setErrors({});
    setSuccess(
      `Thanks ${form.name.split(' ')[0] || form.name}, we will reach out soon via ${form.preferred.toLowerCase()}.`
    );
    setForm(initialForm);
  }

  return (
    <section id="contact" className="section section--contact">
      <div className="section__content contact-panel">
        <div className="contact-panel__copy">
          <h2>{heading}</h2>
          <p className="lead">{paragraph}</p>
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-field">
              <label htmlFor="name">Name *</label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                aria-required="true"
                aria-invalid={errors.name ? 'true' : undefined}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <p className="field-error" id="name-error">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="email">Email *</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                aria-required="true"
                aria-invalid={errors.email ? 'true' : undefined}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <p className="field-error" id="email-error">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="phone">Phone (optional)</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-field">
              <label htmlFor="inquiry">What is going on with your computer? *</label>
              <textarea
                id="inquiry"
                name="inquiry"
                rows="4"
                placeholder="Let us know in your own words what feels different or what keeps popping up."
                value={form.inquiry}
                onChange={handleChange}
                aria-required="true"
                aria-invalid={errors.inquiry ? 'true' : undefined}
                aria-describedby={errors.inquiry ? 'inquiry-error' : undefined}
              />
              {errors.inquiry && (
                <p className="field-error" id="inquiry-error">
                  {errors.inquiry}
                </p>
              )}
            </div>

            <fieldset className="form-field">
              <legend>Preferred contact method (optional)</legend>
              <div className="radio-row">
                {['Email', 'Phone'].map((option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      name="preferred"
                      value={option}
                      checked={form.preferred === option}
                      onChange={handleChange}
                    />
                    {option}
                  </label>
                ))}
              </div>
              <p className="helper-text">
                Help us follow up the way that feels easiest. If you prefer email, we will email first; if
                you prefer phone, we will call before sending anything.
              </p>
            </fieldset>

            <div className="cta-row">
              <button type="submit" className="primary-cta">
                Send message
              </button>
            </div>
            {success && (
              <p className="form-success" role="status">
                {success}
              </p>
            )}
          </form>
          <div className="contact-line">
            <span>Phone: {phone}</span>
            <span>Email: {email}</span>
            <span>Web: {website}</span>
          </div>
        </div>
        <figure className="contact-panel__image">
          <img src={contactImg} alt="Calm technician ready to help over the phone" />
        </figure>
      </div>
    </section>
  );
}
