const testimonials = require('../components/testimonials');

module.exports = {
  id: 'testimonials',
  title: 'Testimonials',
  details: testimonials,
  describe() {
    return `${this.title}: voices from the communities served.`;
  },
};
