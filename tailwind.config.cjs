const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
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
      }
    },
    container: {
      center: true,
      padding: {DEFAULT: "2rem", sm: "3rem", lg: "4rem"},
    }
  },
  plugins: []
};
