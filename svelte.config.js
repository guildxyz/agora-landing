import preprocess from 'svelte-preprocess';
// import adapter from '@sveltejs/adapter-static';
import vercel from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    preprocess({
      postcss: true
    })
  ],

  kit: {
    adapter: vercel(),
    target: '#svelte',
    /* hydrate: false, */
    router: false
  }
};

export default config;
