const services = require('../components/servicesList');

module.exports = {
  id: 'services',
  title: 'Services Overview',
  details: services,
  describe() {
    return `${this.title}: ${services.length} focused offerings.`;
  },
};
