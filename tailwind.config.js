/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/*.html'],
  theme: {
    extend: {
      colors: {
        'darkblue': "#252B42",
        'red': "#FF6551",
        'blue': "#184C99",
        'yellow': "#FFC652",
        'bold-red': "#E74040",
        'danger-color': "#E74040",
        'second-text': "#737373",
        'alert-color': "#E77C40",
        'disabled': "#8EC2F2",
        'dark-blue': "#26335D",
        'bggray': "#D9D9D9",
        'lightgray': "#FAFAFA",
      }
    },
    fontFamily: {
      monst: ['Montserrat'],
    }
  },
  plugins: [],
}

