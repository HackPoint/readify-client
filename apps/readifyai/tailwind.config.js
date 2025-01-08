const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join, resolve } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
    resolve('./node_modules/flyonui/dist/js/*.j')
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flyonui'),
    require('flyonui/plugin'),
    require('tailwindcss-motion')
  ],
};
