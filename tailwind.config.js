/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/*.html'],
  theme: {
    extend: {
      colors: {
        'red': "#FF6551",
        'blue': "#184C99",
        'yellow': "#FFC652",
        'bold-red': "#E74040",
        'dark-blue': "#26335D",
      }
    },
  },
  plugins: [],
}

