/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      md: '769px',
      tablet: { min: '1350px' },
      md_rev: { max: '768px' }
    },
    extend: {}
  },
  plugins: []
};
