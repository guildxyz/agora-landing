const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      display: ['Dystopian', 'sans-serif'],
      body: ['Inter', 'sans-serif']
    },
    extend: {
      colors: {
        primary: colors.blue
      }
    }
  },
  plugins: []
};
