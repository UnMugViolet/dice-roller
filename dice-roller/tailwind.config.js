/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'coal': '#0f0d0e',
        'charcoal' : '#231f20',
        'orange-app': '#fc7428',
      }
    },
  },
  plugins: [
    function({addUtilities}) {
      const newUtilities = {
        '.bg-image-square': {
          backgroundImage: 'repeating-linear-gradient(to right,#231f20,#231f20 1px,transparent 1px,transparent 30px),repeating-linear-gradient(to bottom,#231f20,#231f20 1px,transparent 1px,transparent 30px)',
        },
    }
    addUtilities(newUtilities)
  }
  ],
}

