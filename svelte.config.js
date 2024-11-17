import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null, // gunakan 'index.html' jika ada routing dinamis
    }),
    paths: {
      base: '/siprosidaui2', // Ganti dengan nama repository Anda
    },
    prerender: {
      default: true, // Prerender semua halaman
    },
  },
};
