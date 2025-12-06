const processSteps = require('../components/processSteps');

module.exports = {
  id: 'process',
  title: 'Process',
  details: processSteps,
  describe() {
    return `${this.title}: simple three-step journey.`;
  },
};
