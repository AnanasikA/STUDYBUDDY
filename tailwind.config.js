/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
  base: ['Inter', 'sans-serif'],
  heading: ['"Playfair Display"', 'serif'], // <-- bardzo ważne dokładne nazewnictwo!
},

    },
  },
  plugins: [],
};
