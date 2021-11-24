module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{Zomato:{
      50:"#ffe5e7",
      100:"#fabaca0",
      200:"#f18f96",
      300:"#e9626d",
      400:"#e23744",
      500:"#c81d2a",
      },
    },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
