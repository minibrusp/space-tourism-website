/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(231, 77%, 90%)',
        secondary: 'hsl(230, 35%, 7%)',
        white: 'hsl(0, 0%, 100%)'
      },
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
        barlowCondensed: ['Barlow Condensed', 'sans-serif'],
        bellefair: ['Bellefair', 'serif']
      },
      backgroundImage: {
        backgroundHome: "url('assets/home/background-home-mobile.jpg')"
      }
    },
  },
  plugins: [],
}