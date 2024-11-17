import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null, // gunakan 'index.html' jika ada routing dinamis
    }),
    
    alias: {
      $lib: 'src/lib',
      $routes: 'src/routes'
    },
   
    prerender: {
      entries: ['*'], // Ini memprerender semua halaman
    },
  },
};
