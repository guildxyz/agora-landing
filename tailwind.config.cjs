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
        primary: colors.indigo,
        agora: {
          'white': '#FDF7FF',
          'gray': '#252525',
          'blue-bg': '#2E2093',
          'blue-btn': '#3B2DA4',
          'purple-bg': '#4F1D85',
          'pink-bg': '#A34BAB',
          'pink-text': '#E77FF0',
          'pink-text-darker': '#BA4CC4',
        }
      },
      backgroundImage: {
        'circle-pattern': "url('/images/circle-pattern.png')",
        'what-is-agora-space': "url('/images/what-is-agora-space-bg.png')",
        'who-is-agora-space-for': "url('/images/who-is-agora-space-for-bg.png')",
        'circle-dark': "url('/svg/circle-dark.svg')",
        'circle-purple': "url('/svg/circle-purple.svg')",
        'david-default': "url('/images/david.png')",
        'david-mirrored': "url('/images/david-mirrored.png')"
      },
      backgroundPosition: {
        'bottom-footer-mobile': 'bottom right -20vw'
      }
    }
  },
  plugins: []
};
