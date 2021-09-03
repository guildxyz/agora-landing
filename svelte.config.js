import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    preprocess({
      postcss: true
    })
  ],

  kit: {
    adapter: adapter(),
    target: '#svelte',
    /* hydrate: false, */
    router: false,
    vite: {
      ssr: {
        // https://github.com/vitejs/vite/issues/2393#issuecomment-901697217
        noExternal: ['three']
      }
    }
  }
};

export default config;
