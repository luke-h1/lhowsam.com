module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx', './templates/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minHeight: {
      sm: '80px',
    },
    minWidth: {
      sm: '500px',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
