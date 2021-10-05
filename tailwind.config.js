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
        customGray: {
          700: '#707070'
        }
      },
      fontSize: {
        14: '0.875rem !important',
        15: '0.9375rem !important',
        16: '1rem',
        20: '1.25rem !important',
        25: '1.5625rem',
        40: '2.5rem',
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