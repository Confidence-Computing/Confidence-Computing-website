const contactInfo = require('../components/contactInfo');

module.exports = {
  id: 'contact',
  title: 'Call to Action',
  details: contactInfo,
  describe() {
    return `${this.title}: ${contactInfo.heading}`;
  },
};
