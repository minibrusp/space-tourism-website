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
        backgroundHomeTablet: "url('assets/home/background-home-tablet.jpg')",
        backgroundHomeDesktop: "url('assets/home/background-home-desktop.jpg')",
        backgroundDestination: "url('assets/destination/background-destination-mobile.jpg')",
        backgroundDestinationTablet: "url('assets/destination/background-destination-tablet.jpg')",
        backgroundDestinationDesktop: "url('assets/destination/background-destination-desktop.jpg')",
        backgroundCrew: "url('assets/crew/background-crew-mobile.jpg')",
        backgroundCrewTablet: "url('assets/crew/background-crew-tablet.jpg')",
        backgroundCrewDesktop: "url('assets/crew/background-crew-desktop.jpg')",
        backgroundTechnology: "url('assets/technology/background-technology-mobile.jpg')",
        backgroundTechnologyTablet: "url('assets/technology/background-technology-tablet.jpg')",
        backgroundTechnologyDesktop: "url('assets/technology/background-technology-desktop.jpg')",
      },
      screens: {
        'desktop': '1440px',
        // => @media (min-width: 1440px) { ... }
      }
    },
  },
  plugins: [],
}