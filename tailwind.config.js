/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*[html,js]"],
  theme: {
    fontFamily: {
      "Rowdies": "Rowdies",
      "Negative": "Signika Negative "

    },

    screens: {

      'mobile': '375px',
      // => @media (min-width: 375px) { ... }
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'blue': '#20ad96',
      'white': '#fff',
      'nili': '#3f3a644f',
      'bluelight': '#3f3a64',
      'black': '#000',
      "tosi": '#818181',

    },
    extend: {},
  },
  plugins: [],
}

