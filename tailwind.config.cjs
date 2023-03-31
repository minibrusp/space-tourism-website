/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D0D6F9',
        secondary: '#0B0D17',
        white: 'hsl(0, 0%, 100%)',
        whiteBlur: 'hsla(0, 0%, 100%, 4%)',
        borderColor: '#383B4B',
      },
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
        barlowCondensed: ['Barlow Condensed', 'sans-serif'],
        bellefair: ['Bellefair', 'serif']
      },
      backgroundImage: {
        backgroundHome: "url('assets/home/background-home-mobile.jpg')",
        backgroundDestination: "url('assets/destination/background-destination-mobile.jpg')",
        backgroundCrew: "url('assets/crew/background-crew-mobile.jpg')",
        backgroundTechnology: "url('assets/technology/background-technology-mobile.jpg')",
      }
    },
  },
  plugins: [],
}