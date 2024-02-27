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
        'danger-color': "#E74040",
        'dark-blue': "#26335D",
        'black-text': "#252B42",
        'second-text': "#737373",
        'alert-color': "#E77C40",
        'disable-color': "#8EC2F2",
        'dark-gray': "#A39F9F",

      }
    },
    fontFamily: {
      monst: ['Montserrat'],
    }
  },
  plugins: [],
}

