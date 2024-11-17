import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null, // gunakan 'index.html' jika ada routing dinamis
    }),
    paths: {
      base: '/siprosidaui2', // Ganti <repository-name> dengan nama repository GitHub Anda
    },
    alias: {
      $lib: 'src/lib',
      $routes: 'src/routes'
    },
   
    prerender: {
      entries: ['*'], // Ini memprerender semua halaman
    },
  },
};
