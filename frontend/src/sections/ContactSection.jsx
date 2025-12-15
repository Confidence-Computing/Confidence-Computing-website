import React, { useState } from 'react';
import contactInfo from '../components/contactInfo';
import contactImg from '/images/service-contact.jpg';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  inquiry: '',
  preferred: 'Email',
  'bot-field': '',
};

export default function ContactSection() {
  const { heading, paragraph, formHelper } = contactInfo;
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');
  const [submitError, setSubmitError] = useState('');

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setSuccess('');
    const nextErrors = {};

    if (!form.name.trim()) {
      nextErrors.name = 'Please share your name so we know who we are supporting.';
    }

    if (!form.email.trim()) {
      nextErrors.email = 'Please provide an email so we can follow up shortly.';
    } else if (!emailPattern.test(form.email.trim())) {
      nextErrors.email = 'That email looks off, can you double check it for me?';
    }

    if (!form.inquiry.trim()) {
      nextErrors.inquiry = 'Tell us what is going on so we can prepare the right help.';
    }

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      setSubmitError('');
      return;
    }

    setErrors({});
    setSubmitError('');

    const firstName = form.name.split(' ')[0] || form.name;

    try {
      const payload = {
        'form-name': 'contact',
        ...form,
      };

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(payload).toString(),
      });

      if (!response.ok) {
        throw new Error(`Form submission failed with status ${response.status}.`);
      }

      setSuccess(`Thanks ${firstName || 'there'}, we will reach out soon via ${form.preferred.toLowerCase()}.`);
      setForm(initialForm);
    } catch (error) {
      setSubmitError('We could not send your message right now. Please try again in a moment.');
    }
  }

  return (
    <section id="contact" className="section section--contact">
      <div className="section__content">
        <div className="contact-shell">
          <div className="contact-panel">
            <div className="contact-panel__copy">
              <h2>{heading}</h2>
              <p className="lead">{paragraph}</p>
              <p className="helper-text">{formHelper}</p>
              <form
                className="contact-form"
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                noValidate
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="visually-hidden" aria-hidden="true">
                  <label>
                    Don't fill this out if you are human:
                    <input
                      name="bot-field"
                      value={form['bot-field']}
                      onChange={handleChange}
                      tabIndex="-1"
                    />
                  </label>
                </p>
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
                    Help us follow up the way that feels easiest. If you prefer email, we will email first;
                    if you prefer phone, we will call before sending anything.
                  </p>
                </fieldset>

                <div className="cta-row">
                  <button type="submit" className="primary-cta">
                    Send message
                  </button>
                </div>
                {submitError && (
                  <p className="field-error" role="alert">
                    {submitError}
                  </p>
                )}
                {success && (
                  <p className="form-success" role="status">
                    {success}
                  </p>
                )}
              </form>
              <p className="helper-text">
                {`We will respond within one business day by ${form.preferred.toLowerCase()} unless you tell us otherwise.`}
              </p>
            </div>
            <figure className="contact-panel__image">
              <img
                src={contactImg}
                alt="Calm technician ready to help over the phone"
                width="1200"
                height="900"
                loading="lazy"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
