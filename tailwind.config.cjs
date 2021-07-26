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
        primary: colors.indigo
      },
      backgroundImage: {
        'circle-pattern': "url('/images/circle-pattern.png')",
        'what-is-agora-space': "url('/images/what-is-agora-space-bg.png')",
        'michelangelo-david': "url('/images/michelangelo-david.png')"
      },
      backgroundPosition: {
        'hero-right-bottom': 'right -5vw bottom 10vh'
      }
    }
  },
  plugins: [require('@tailwindcss/aspect-ratio')]
};
