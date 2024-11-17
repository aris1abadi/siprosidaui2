// svelte.config.js
import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html',  // Penting untuk routing SPA
    }),
    paths: {
      base: '/siprosidaui2',  // Base path untuk aplikasi di GitHub Pages
    },
    prerender: {
      entries: ['*'], // Prerender semua halaman
    },
  },
};
