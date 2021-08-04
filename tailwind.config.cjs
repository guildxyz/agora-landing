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
        agora: {
          white: '#FDF7FF',
          gray: '#252525',
          purple: '#4F1D85',
          blue: {
            light: '#3B2DA4',
            medium: '#2E2093'
          },
          pink: {
            light: '#E77FF0',
            medium: '#BA4CC4',
            dark: '#A34BAB'
          }
        }
      },
      backgroundImage: {
        'circle-pattern': "url('/images/circle-pattern.png')",
        'who-is-agora-space-for': "url('/images/who-is-agora-space-for-bg.png')",
        'circle-dark': "url('/svg/circle-dark.svg')",
        'circle-purple': "url('/svg/circle-purple.svg')"
      },
      backgroundPosition: {
        'bottom-footer-mobile': 'bottom right -20vw'
      }
    }
  },
  plugins: []
};
