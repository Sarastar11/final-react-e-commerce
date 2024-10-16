/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
    colors: {
        'custom-red': 'rgba(216, 71, 39, 1)',
      },
      fontFamily: {
        taviraj: ['Taviraj', 'serif'],

        nunito: ['Nunito', 'sans-serif']
      }
    },
  },
  plugins: [],
}

