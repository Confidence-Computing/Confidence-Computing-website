const heroSection = require('../sections/HeroSection');
const problemSection = require('../sections/ProblemSection');
const servicesSection = require('../sections/ServicesSection');
const promiseSection = require('../sections/PromiseSection');
const testimonialsSection = require('../sections/TestimonialsSection');
const processSection = require('../sections/ProcessSection');
const contactSection = require('../sections/ContactSection');

const sections = [
  heroSection,
  problemSection,
  servicesSection,
  promiseSection,
  testimonialsSection,
  processSection,
  contactSection,
];

module.exports = {
  sections,
  describe() {
    return sections.map(section => section.describe()).join('\n');
  },
  structure() {
    return sections.map(section => ({
      id: section.id,
      title: section.title,
      detailCount: Array.isArray(section.details) ? section.details.length : Object.keys(section.details).length,
    }));
  },
};
