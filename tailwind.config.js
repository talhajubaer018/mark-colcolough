module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        customYellow: {
          500: '#C3872C',
        },
        customTeal: {
          200: '#E4EEF1',
          500: '#62C8D8'
        },
      },
      gridTemplateColumns: {
        '1/2': '1fr 2fr'
      },
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}