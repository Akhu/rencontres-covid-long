const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      sans: ['"Nunito"', ...defaultTheme.fontFamily.sans]
    },
    extend: {}
  },
  plugins: [require('@tailwindcss/typography'),require('daisyui')]
};
