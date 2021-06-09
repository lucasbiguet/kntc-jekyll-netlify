const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './_site/**/*.html',
		'./_site/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: {
        DEFAULT: '#0c0606',
        dark: colors.black
      },
      white: {
        light: colors.white,
        DEFAULT: '#f7f7fa'
      },
      red: {
        light: "#ff0921",
        DEFAULT: "#c60800",
        dark: "#cf0a1d"
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: []
}
