/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'slider-bg': "url('/src/assets/slider-bg.jpg')",
        'download': "url('/src/assets/download-bg.png')",
      },
      fontFamily: {
        kiwi: ['"Kiwi Maru"', 'serif'], 
        montserrat: ['"Montserrat"', 'sans-serif'],
        jost:["Jost", 'serif'],
        OpenSans:[ "Open Sans", 'serif']
      }
    },
  },
  plugins: [],
}

