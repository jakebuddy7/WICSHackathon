/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      //import local font from assets folder url and use it
      Vikendi: ['url(../assets/fonts/Vikendi) format("opentype")'],
      SF: ['url(../assets/fonts/sf-compact-display-medium) format("opentype")'],
    },
      apple: {
    extend: {},
  },
  plugins: [],
}}
