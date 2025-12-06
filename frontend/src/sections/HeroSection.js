const heroContent = require('../components/heroContent');

module.exports = {
  id: 'hero',
  title: 'Hero',
  details: heroContent,
  describe() {
    return `${this.title}: ${heroContent.headline}`;
  },
};
