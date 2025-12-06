const problemNotes = require('../components/problemNotes');

module.exports = {
  id: 'problem',
  title: 'Problem & Empathy',
  details: problemNotes,
  describe() {
    return `${this.title}: ${problemNotes.heading}`;
  },
};
