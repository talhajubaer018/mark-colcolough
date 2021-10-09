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
          700: '#707070',
          900: '#4B4B4B'
        }
      },
      fontSize: {
        14: '0.875rem !important',
        15: '0.9375rem !important',
        16: '1rem !important',
        18: '1.125rem !important',
        20: '1.25rem !important',
        25: '1.5625rem !important',
        40: '2.5rem !important',
      },
      gridTemplateColumns: {
        '1/2': '1fr 2fr'
      },
      spacing: {
        '10': '10%',
        '15': '15%',
      },
      boxShadow: {
        custom: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}