/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        darkBackground: '#211E23', 
        darkH1: '#AEBCCF',
        darkH2: '#B7AAFF',
      },
    },
  },
  plugins: [],
}