const layout = require('./layout/MainLayout');

console.log('Confidence Computing frontend structure:');
layout.sections.forEach(section => {
  console.log(`- ${section.title} (${section.id})`);
});

console.log('\nDetails summary:');
layout.structure().forEach(({ id, title, detailCount }) => {
  console.log(`? ${title} (${id}) has ${detailCount} detail entries or fields.`);
});

console.log('\nBuild components to replace this scaffold as you implement the UI.');
