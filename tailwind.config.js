/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{jsx,js}"],
  theme: {
    screens: {
      "2k": "2030px"
    },
    extend: {},
    fontFamily: {
      'raleway': ['Raleway', 'sans-serif']
    }
  },
  plugins: [],
}